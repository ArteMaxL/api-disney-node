const router = require('express').Router();

const { Character } = require('../../db');

router.get('/', async (req, res)=>{
    //res.send('Entra correctamente en /characters.');
    const characters = await Character.findAll({
        attributes: ['image', 'name']
    });
    res.json(characters);
});

router.post('/', async (req, res)=>{
    const character = await Character.create(req.body);
    res.json(character);
});

router.put('/:id', async (req, res) =>{
    await Character.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Personaje actualizado.'});
});

router.delete('/:id', async (req, res)=>{
    await Character.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Personaje eliminado.'})
});

module.exports = router;