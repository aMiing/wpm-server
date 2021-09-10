const fs = require('fs');


module.exports= async (sequelize) => {
    const models = {}
    fs.readdirSync(__dirname + '/models').filter((f) => {
        return f.endsWith('.js');
    }).forEach(async (f) => {
        const modelFactory = require(__dirname + '/models/' + f);
        models[f.slice(0, -3)] = await modelFactory(sequelize)
    });
    return models
}