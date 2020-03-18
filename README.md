# WorkUp

### About
WorkUp is an Electron app that allows people who spend lots of their time at their desks to stay active! Everything is customizable, from the exercises, how often you get notifications, and the amount of reps.

### To-do
- [x] Allow user to minimize to task
- [x] Build a release
- [ ] Improve CSS and general appearance of the app
- [x] Add the water notification

### How to Build
1. Package the Electron files
    `electron-packager . WorkUp --platform win32 --arch x64 --out dist/`
2. Make the installers
    `electron-installer-windows --src dist/WorkUp-win32-x64/ --dest dist/installers/`

### Credits
* [electron](https://github.com/electron/electron)
* [node-notifier](https://github.com/mikaelbr/node-notifier)
