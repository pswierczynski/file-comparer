const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  selectFolder: () => ipcRenderer.invoke('select-folder'),
  selectExcel: () => ipcRenderer.invoke('select-excel'),
  readFolderFiles: (path) => ipcRenderer.invoke('read-folder-files', path),
  readExcelList: (path) => ipcRenderer.invoke('read-excel-list', path)
});
