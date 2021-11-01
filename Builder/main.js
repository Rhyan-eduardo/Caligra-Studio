const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 930,
    height: 600,
    resizable: false,
    frame: true,
    icon: __dirname + "/fly.png",
    //minWidth: 1366,
    //minHeight: 700,
  });

  // e carregar o index.html do aplicativo.
  win.removeMenu();
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

