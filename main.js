const {
    app,
    BrowserWindow
} = require('electron');
const notifier = require('node-notifier');
const path = require('path');

function createWindow() {

    const win = new BrowserWindow({
        resizable: false,
        width: 600,
        height: 600,
        icon: './icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.removeMenu()

    win.webContents.openDevTools()
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