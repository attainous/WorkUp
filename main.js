const {
    app,
    BrowserWindow,
    Menu,
    Tray
} = require('electron');
const path = require('path');

let win = null;

function createWindow() {

    win = new BrowserWindow({
        resizable: false,
        skipTaskbar: true,
        width: 550,
        height: 500,
        icon: './icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.removeMenu()

    //win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.on('ready', () => {
    tray = new Tray('./icon.png')
    const contextMenu = Menu.buildFromTemplate([{
        label: 'Quit',
        type: 'normal',
        click: function () {
            app.isQuitting = true;
            app.quit();
        }
    }])
    tray.setToolTip('WorkUp')
    tray.setContextMenu(contextMenu)

    tray.on('click', () => {
        win.show();
    });
})