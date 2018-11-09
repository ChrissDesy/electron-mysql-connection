const {electron, app, BrowserWindow} = require('electron')
var my = require('mysql');
let mainWindow

function createMainwindow() {
    mainWindow = new BrowserWindow({
        width: 850,
        height: 650
    });

    mainWindow.loadURL('file://'+__dirname+'/views/main.html'); 
    //mainWindow.openDevTools();
}

app.on('ready', createMainwindow)