var fs = require("fs");

window.onload = function(){
    document.getElementById("save").addEventListener("click", saveSettings);
    loadSettings();
}

var settings = {
    interval,
    minRep,
    maxRep,
    waterBreak
} = require('./settings.json');

function loadSettings() {
    document.getElementById("interval").value = settings.interval;
    document.getElementById("minRep").value = settings.minRep;
    document.getElementById("maxRep").value = settings.maxRep;
    document.getElementById("waterBreak").checked = settings.waterBreak;

}

function saveSettings() {
    settings.interval = document.getElementById("interval").value;
    settings.minRep = document.getElementById("minRep").value;
    settings.maxRep = document.getElementById("maxRep").value;
    settings.waterBreak = document.getElementById("waterBreak").checked;

    fs.writeFile("./settings.json", JSON.stringify(settings), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });

}
