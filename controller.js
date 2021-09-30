const fs = require('fs');
const upload = require('./utils/getpath.js')
const path = require('path')
// add url-route in /controllers:

function addMapping(router, mapping) {
    for (const url in mapping) {
        if (url.startsWith('GET ')) {
            const _path = url.substring(4);
            router.get(_path, mapping[url]);
        } else if (url.startsWith('POST ')) {
            const _path = url.substring(5);
            if (_path.startsWith('/api/upload/')) {
                router.post(_path, upload.single('file'), mapping[url]);
            } else {
                router.post(_path, mapping[url]);
            }
        } else if (url.startsWith('PUT ')) {
            const _path = url.substring(4);
            router.put(_path, mapping[url]);
        } else if (url.startsWith('DELETE ')) {
            const _path = url.substring(7);
            router.del(_path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    const base_dir = path.join(__dirname, dir);
    fs.readdirSync(base_dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        let mapping = require((path.resolve(base_dir, f)));
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers',
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};