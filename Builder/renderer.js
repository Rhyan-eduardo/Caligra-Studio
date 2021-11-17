/*const BrowserWindow =  require('electron').remote.BrowserWindow;
pathname: path.join(__dirname, 'index.html')
const path = require('path');

const btn = document.getElementById('NewFileAction');

btn.addEventListener('click', function (event) {
    const wim = new BrowserWindow({ width: 100, height: 100})

    wim.loadFile('./Screens/CreateFile/CreateFileWindow.html');
    wim.show();

    wim.on('close', function() { wim = null });

});
*/

const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('NewFileAction')

notifyBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, './Screens/CreateFile/')
    let wind = new BrowserWindow({ width: 400, height: 200 })
    wind.on('close', function () { wind = null })
    wind.loadURL(modalPath)
    wind.show()
  })