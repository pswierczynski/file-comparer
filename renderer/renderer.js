const btnFolder = document.getElementById('btn-folder');
const btnExcel = document.getElementById('btn-excel');
const folderPathEl = document.getElementById('folder-path');
const excelPathEl = document.getElementById('excel-path');
const btnCompare = document.getElementById('btn-compare');
const resultsTableBody = document.querySelector('#results-table tbody');
const countFolderEl = document.getElementById('count-folder');
const countExcelEl = document.getElementById('count-excel');
const countMissingEl = document.getElementById('count-missing');

let selectedFolder = null;
let selectedExcel = null;
let folderFiles = [];
let excelList = [];

function normalizeName(name) {
  const parts = name.trim().split('.');
  if (parts.length < 2) return name.toUpperCase();
  const ext = parts.pop().toLowerCase();
  const base = parts.join('.').toUpperCase();
  return `${base}.${ext}`;
}

btnFolder.addEventListener('click', async () => {
  const p = await window.electronAPI.selectFolder();
  if (!p) return;
  selectedFolder = p;
  folderPathEl.textContent = p;

  const res = await window.electronAPI.readFolderFiles(p);
  if (res.success) {
    folderFiles = res.files.map(normalizeName);
    countFolderEl.textContent = folderFiles.length;
  } else {
    alert('Błąd czytania folderu: ' + res.error);
  }
});

btnExcel.addEventListener('click', async () => {
  const p = await window.electronAPI.selectExcel();
  if (!p) return;
  selectedExcel = p;
  excelPathEl.textContent = p;

  const res = await window.electronAPI.readExcelList(p);
  if (res.success) {
    excelList = res.list.map(normalizeName);
    countExcelEl.textContent = excelList.length;
  } else {
    alert('Błąd czytania Excela: ' + res.error);
  }
});

btnCompare.addEventListener('click', async () => {
  if (!selectedFolder || !selectedExcel) {
    alert('Wybierz folder i plik Excel przed porównaniem.');
    return;
  }

  const folderSet = new Set(folderFiles);
  resultsTableBody.innerHTML = '';
  let missingCount = 0;

  excelList.forEach((name, idx) => {
    const exists = folderSet.has(name);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${name}</td>
      <td>${exists ? 'TAK' : 'BRAK'}</td>
    `;
    tr.classList.add(exists ? 'exists' : 'missing');
    if (!exists) missingCount++;
    resultsTableBody.appendChild(tr);
  });

  countMissingEl.textContent = missingCount;
});
