//createFolder.js
const fs = require('fs');
const path = require("path")

function createFolder(to) {
    var sep = path.sep
    var folders = path.dirname(to).split(sep);
    var p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}
module.exports = createFolder;