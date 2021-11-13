const { app, BrowserWindow } = require('electron');

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

  win.maximize();
  win.removeMenu();
  win.loadFile('Screens/Welcome/WelcomeWindow.html')

}

app.whenReady().then(createWindow)

function CreateNewFileWindow(){
  let NewFileWindow = new BrowserWindow({
      width: 733,
      height: 403,
      resizable: false,
      frame: true,
      icon: __dirname + "./Screens/CreateFile/WindowAssets/icons/new-file-icon_2.png",
      minimizable: false,
      modal: true,
      parent: win,
      title: 'Criar',
      show: false
  });
  NewFileWindow.removeMenu();
  NewFileWindow.loadFile('Screens/CreateFile/CreateFileWindow.html')
}


