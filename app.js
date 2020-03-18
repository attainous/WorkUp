var fs = require("fs");
const notifier = require('node-notifier');
const path = require('path');

window.onload = function(){
    document.getElementById("save").addEventListener("click", saveSettings);
    loadSettings();
}

var settings = {
    interval,
    minRep,
    maxRep,
    waterBreak,
    exercises
} = require(path.join(__dirname, 'settings.json'));

function loadSettings() {
    document.getElementById("interval").value = settings.interval;
    document.getElementById("minRep").value = settings.minRep;
    document.getElementById("maxRep").value = settings.maxRep;
    document.getElementById("waterBreak").checked = settings.waterBreak;
    document.getElementById("exercises").value = exercises.join("\n");
}

function saveSettings() {
    settings.interval = document.getElementById("interval").value;
    settings.minRep = document.getElementById("minRep").value;
    settings.maxRep = document.getElementById("maxRep").value;
    settings.waterBreak = document.getElementById("waterBreak").checked;
    settings.exercises = (document.getElementById("exercises").value).split("\n");

    fs.writeFile(path.join(__dirname, "settings.json"), JSON.stringify(settings), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });

    loadSettings();

}

function runApplication() {
    var max = Math.max(minRep, maxRep);
    var min = Math.min(minRep, maxRep);
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    var exerciseNumber = Math.floor(Math.random() * ((exercises.length - 1) - 0 + 1) + 0);

    notifier.notify({
        title: 'Time to WorkUp!',
        message: `It is time to do ${random} ${exercises[exerciseNumber]}`,
        icon: path.join(__dirname, 'icon.ico'),
        appID: "WorkUp"
    });
}

function runWater() {

    notifier.notify({
        title: 'Time to WorkUp!',
        message: `It is time to get up, and drink a glass of water`,
        icon: path.join(__dirname, 'water.ico'),
        appID: "WorkUp"
    });

}

setInterval(runApplication, interval*60*1000);

if (waterBreak) {
    setInterval(runWater, 15*60*1000);
}
