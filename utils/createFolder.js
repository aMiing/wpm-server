//createFolder.js
const fs = require('fs');
const path = require("path")

function createFolder(to) {
    const sep = path.sep
    const folders = path.dirname(to).split(sep);
    let p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}
module.exports = createFolder;