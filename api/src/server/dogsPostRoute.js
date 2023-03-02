const { Router } = require('express');
const postDogs = require('../controllers/postDogs');

const router = Router();

router.post('/dogs', async (req, res) => {
    const objDog  = req.body
   
    try {
        const createDog = await postDogs(objDog)
         console.log(createDog)
        res.status(201).json(createDog)
    } catch (error) {
        res.status(500).json(error.message)

    }
})


module.exports = router