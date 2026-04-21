# 📂 File Comparer

A desktop application for comparing files, built with Electron.

## ✨ Description

**Electron File Compare** is a simple tool that allows you to visually compare the contents of two files. It helps quickly identify differences between text files — useful for developers, debugging, and change analysis.

The app runs locally as a desktop application and does not require an internet connection.

## 🚀 Features

- 📄 Compare two text files
- 🔍 Visual diff highlighting
- 🖥️ Cross-platform (Windows / macOS / Linux)
- ⚡ Fast local processing
- 📂 Load files directly from disk

## 🛠️ Tech Stack

- Electron (Node.js + Chromium)
- JavaScript / HTML / CSS

## 📦 Installation

```bash
git clone https://github.com/pswierczynski/electron-file-compare.git
cd electron-file-compare
npm install
```

## ▶️ Run

```bash
npm start
```

## 🧪 Development Mode

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📸 How It Works

1. Select two files from your system
2. The application reads their contents
3. Differences are displayed visually (side-by-side or inline)

## 📁 Project Structure (example)

```
.
├── main.js
├── renderer.js
├── index.html
├── package.json
└── assets/
```

## 🤝 Contributing

1. Fork the repository  
2. Create a branch (`feature/your-feature`)  
3. Commit your changes  
4. Open a Pull Request  

## 🐛 Bug Reports

If you find a bug, please open an issue in the repository.

## 📄 License

MIT License

## 💡 Future Improvements

- Directory comparison
- Binary file support
- Git integration
- Dark mode 🌙
- Export diff to file
