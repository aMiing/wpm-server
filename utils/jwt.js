// 引入模块依赖

const jwt = require('jsonwebtoken');
const {
    publicKey,
    privateKey,
    key
} = require('./rsa')
// 创建 token 类
class Jwt {
    constructor(data) {
        this.data = data;
    }
    //生成token
    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = privateKey; //私钥 可以自己生成
        let token = jwt.sign({
            data,
            exp: created + 60 * 60 * 24, //过期时间
        }, cert, {
            algorithm: 'RS256'
        });
        return token;
    }

    // 校验token
    verifyToken() {
        let token = this.data;
        let cert = publicKey; //公钥 可以自己生成
        let res;
        try {
            let result = jwt.verify(token, cert, {
                algorithms: ['RS256']
            }) || {};
            let {
                exp = 0
            } = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

module.exports = Jwt;