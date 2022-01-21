const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const sendgrid = require('@sendgrid/mail');
const { response } = require('express');

//Config SendGrid

const sendgridApiKey = 'zzzzzzzz';
sendgrid.setApiKey(sendgridApiKey)


//Creacion de Usuarios. Comprobacion de los datos ingresados.

router.post('/register', [
    check('username', 'Name required').not().isEmpty(),
    check('email', 'Email must be ok').isEmail(),
    check('password', 'Password required').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    };

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

//Envío de email de bienvenida con SendGrid al registrarse
    const email = req.body.email;
    const message = {
        to: email,
        from: {
            name: 'API DISNEY ALKEMY!',
            email: 'email@gmail.com'
        },
        subject: "Welcome to my Disney Api!",
        text: "Welcome to my Disney Api!",
        html: "<h1>Welcome to my Disney Api!</h1>"
    };

    sendgrid.send(message)
        .then((response) => console.log('Email sent...'))
        .catch((error) => console.log(error.message));
    

});

//Login de Usuarios y comprobación de credenciales

router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const equals = bcrypt.compareSync(req.body.password, user.password);
        if (equals) {
            res.json({ success: createToken(user) });
        } else {
            res.json({ error: 'Wrong username/password.' });
        }
    } else {
        res.json({ error: 'Wrong username/password.' });
    }
});

//Metodo para generar un TOKEN de autorización 

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'keyword');
}

module.exports = router;