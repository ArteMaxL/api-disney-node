const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');

router.post('/register',[
    check('username', 'Name required').not().isEmpty(),
    check('email', 'Email must be ok').isEmail(),
    check('password', 'Password required').not().isEmpty()
] ,async (req, res) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()})
    };

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async (req, res)=>{
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const equals = bcrypt.compareSync(req.body.password, user.password);
        if (equals){
            res.json({ success: 'TOKEN' });
        } else {
            res.json({ error: 'Wrong username/password.'}); 
        }
    } else {
        res.json({ error: 'Wrong username/password.'});
    }
});

module.exports = router;