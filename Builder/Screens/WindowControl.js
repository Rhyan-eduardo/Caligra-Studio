const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');

const CreateWindowAction = document.getElementById('NewFileAction');

CreateWindowAction.addEventListener('click', (e) => {
    const WindowCreateFile = new BrowserWindow({
      width: 733,
      height: 403,
      resizable: false,
      frame: true,
      icon: __dirname + "../Screens/CreateFile/WindowAssets/icons/new-file-icon_2.png",
      minimizable: false,
      modal: true,
      parent: win,
      title: 'Criar'
    });

    WindowCreateFile.loadFile('../Screens/CreateFile/CreateFileWindow.html');
    WindowCreateFile.show();

    WindowCreateFile.on('close', function() { WindowCreateFile = null });
});