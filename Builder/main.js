const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1366,
    height: 768,
    resizable: true,
    frame: true,
    icon: __dirname + "/icon.png",
    //minWidth: 1366,
    //minHeight: 700,
  });

  // e carregar o index.html do aplicativo.
  win.removeMenu();
  win.loadFile('Screens/Welcome/WelcomeWindow.html')
}

app.whenReady().then(createWindow)

