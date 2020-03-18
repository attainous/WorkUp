var fs = require("fs");
const notifier = require('node-notifier');

window.onload = function(){
    document.getElementById("save").addEventListener("click", saveSettings);
    loadSettings();
    runApplication()
}

var settings = {
    interval,
    minRep,
    maxRep,
    waterBreak,
    exercises
} = require('./settings.json');

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

    fs.writeFile("./settings.json", JSON.stringify(settings), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });

}

function runApplication() {
    var max = Math.max(minRep, maxRep);
    var min = Math.min(minRep, maxRep);
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    var exerciseNumber = Math.floor(Math.random() * ((exercises.length - 1) - 0 + 1) + 0);

    notifier.notify({
        title: 'Time to WorkUp!',
        message: `It is time to do ${random} ${exercises[exerciseNumber]}`,
        icon: './icon.png',
        appID: "WorkUp"
    });
}