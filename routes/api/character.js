const router = require('express').Router();


const { Character, MovieOrSerie } = require('../../db');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    //res.send('Entra correctamente en /characters.');
    console.log(req.userId);
    const characters = await Character.findAll({
        attributes: ['image', 'name']
    });
    res.json(characters);
});

router.post('/', async (req, res) => {
    const character = await Character.create(req.body);
    res.json(character);
});

router.put('/:id', async (req, res) => {
    await Character.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Character updated.' });
});

router.delete('/:id', async (req, res) => {
    await Character.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Character deleted.' })
});

/* router.get('/name=', async (req, res) => {
   const name = await Character.findAll({
        where: { name: [req.query.name] }
        
    })
    console.log(req.query.name);
    res.json(name);

}); */


module.exports = router;