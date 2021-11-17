const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

function createWindow () {
    let win = new BrowserWindow({
    width: 1366,
    height: 768,
    resizable: true,
    frame: true,
    icon: __dirname + "/icon.png",
    //minWidth: 1366,
    //minHeight: 700,
  });

  win.maximize();
  win.removeMenu();
  win.loadFile('Screens/Welcome/WelcomeWindow.html')

}

app.whenReady().then(createWindow);

