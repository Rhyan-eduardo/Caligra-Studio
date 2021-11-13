
const remote = require('electron').remote;
const main = remote.require('./main.js');

let CreateNewFile = document.querySelector('#NewFileAction');
CreateNewFile.addEventListener('click', (e) => {
  main.CreateNewFileWindow()
  main.CreateNewFileWindow.show();
});

//if(navigator.online){
 //   document.getElementById('off-line-notification').display = 'none';
//}else {
//    document.getElementById('off-line-notification').display = 'flex';
//}
function scriptPage() {
    window.location.replace("Main.html");
}

function ReloadPage() {
    window.location.reload(true);
}




