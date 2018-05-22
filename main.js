const electron = require('electron');
const url = require('url');
const path = require('path');
var url = 'http://localhost:3000/';
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
    mainWindow.loadURL(url);
    //Build Menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Inserir menu
    Menu.setApplicationMenu(mainMenu);
});
//Funcao Criar janela
function createAddWindow() {
    //Criar janela
    addWindow = new BrowserWindow({
        width: 200,
        height: 300,
        title: 'Adicionar lista'
    });
    addWindow.loadURL(url);
    //Build Menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Inserir menu
    Menu.setApplicationMenu(mainMenu);
}
//Criar menu
const mainMenuTemplate = [{
    label: 'Arquivo',
    submenu: [{
        label: 'Adicionar item',
        click() {
            createAddWindow()
        }
    }, {
        label: 'Limpar itens'
    }, {
        label: 'Sair',
        accelerator: process.platform == 'Friod' ? 'Ctrl+Q' : 'Command+Q',
        click() {
            app.quit();
        }
    }]
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