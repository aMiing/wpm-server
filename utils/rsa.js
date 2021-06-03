const NodeRSA = require('node-rsa');
// 1.创建RSA对象，并指定 秘钥长度
const key = new NodeRSA({
    b: 512
});
key.setOptions({
    encryptionScheme: 'pkcs1'
}); //指定加密格式
// 2.生成 公钥私钥，使用 pkcs8标准，pem格式
const public = key.exportKey('pkcs8-public-pem'); //制定输出格式
const private = key.exportKey('pkcs8-private-pem');

module.exports = {
    key,
    publicKey: public,
    privateKey: private
}