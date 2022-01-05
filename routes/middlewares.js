const jwt = require('jwt-simple');
const moment = require('moment');


//Validez de Token
const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.json({ error: 'Need to include user-token on the header' });
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'keyword');
    } catch (error) {
        return res.json({ error: 'Wrong TOKEN' });
    }

    //Validez por tiempo de Token

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Token was expirated' });
    }

    //

    req.userId = payload.userId;

    next()
}

module.exports = {
    checkToken: checkToken
}