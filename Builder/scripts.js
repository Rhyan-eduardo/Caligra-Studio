const { app } = require("electron");

if(navigator.online){
    document.getElementById('off-line-notification').display = 'none';
}else {
    document.getElementById('off-line-notification').display = 'flex';
}


// COLOR HIGHLIGHT START BLOCK

function stateOn(){

    let colorHighliht = true;

    if (colorHighliht == true){
        document.getElementById('btn-find').src = "_assets/_icons/lens-2.png";
        document.getElementById('search-area').style.border = "1px solid rgb(0, 163, 0)";
    }
    else {
        document.getElementById('btn-find').src = "_assets/_icons/lens_icon.png";
        document.getElementById('search-area').style.border = "1px solid #606a75";
    }
}

function stateOff(){
    document.getElementById('btn-find').src = "_assets/_icons/lens_icon.png";
    document.getElementById('search-area').style.border = "1px solid #606a75";
}

// END 

function closeSelected() {
    document.getElementById('btn-close-notification').src = '_assets/close_icon_selected.png';
}

function closeUnselected() {
    document.getElementById('btn-close-notification').src = '_assets/close_icon.png';
}

function closeNotificationOffLine() {
    document.getElementById('off-line-notification').style.visibility = 'hidden';
}
s
function newDataBase() {
   window.location.replace("newFile.html");
}

function visualPage() {
    window.location.replace("visualSchema.html");
 }

function codePage() {
    window.location.replace("editor.html");
}

function scriptPage() {
    window.location.replace("Main.html");
}

function reloadPage() {
    window.location.reload(true);
}


function dataBaseState() {
    document.getElementById('bd_state').style.backgroundColor = 'yellow';
    document.getElementById('btn-host-off').src="_assets/btn_db_on.png";   
    document.getElementById('window-db-state').style.visibility = 'visible';
}

function closeTerminal() {
    document.getElementById('terminal').style.visibility = 'hidden';
    document.getElementById('editor').style.height = '100%';
}

function btnOkPress() {
    document.getElementById('btn-ok').style.backgroundColor = 'white';
    document.getElementById('btn-ok-name').style.color = '#262d36';
    document.getElementById('window-db-state').style.visibility = 'hidden'
}

//function newDataBase() {
//    document.getElementById('secondPlan').style.display = 'flex';
//    document.getElementById('windowChoiseMode').style.display = 'flex';
//
//}

function terminalTypeChoise() {
    document.getElementById('terminalTypeSelectBoxList').style.display = 'flex';
}


