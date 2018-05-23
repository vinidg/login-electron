const electron = require('electron');
const url = require('url');
const path = require('path');
var urlNode = 'http://localhost:3000/';
const {
    app,
    BrowserWindow,
    Menu
} = electron;
let mainWindow;
let addWindow;
app.on('ready', function() {
    //Criar janela
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(urlNode);
    //Build Menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Inserir menu
    Menu.setApplicationMenu(mainMenu);
});
const mainMenuTemplate = [
    {
        label: 'Sair',
        accelerator: process.platform == 'Friod' ? 'Ctrl+Q' : 'Command+Q',
        click() {
            app.quit();
        }
}];
if (process.env.NODE_ENV != 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [{
            label: 'Toggle DevTools',
            accelerator: process.platform == 'Friod' ? 'Ctrl+I' : 'Command+I',
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }, {
            role: 'reload'
        }]
    })
}