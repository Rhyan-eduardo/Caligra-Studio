function MouseHover(){
    document.getElementById('DownloadIcon').src = "./Source/Icons/Download-icon-hover-svg.svg";
}
function NoMouseHover(){
    document.getElementById('DownloadIcon').src = "./Source/Icons/Download-icon-svg.svg";
}

let DownloadAction = document.querySelector('#ButtDownloadon');

DownloadAction = addEventListener('click', (e) => {
    setInterval(() => {
        document.getElementById('DownloadLocation').style.animation = "UpToDown 1s both";
    }, 2000);
});

let GetStartedAction = document.querySelector('GetStarted');

GetStartedAction = addEventListener('click', (e) => {
    //Action here!
});