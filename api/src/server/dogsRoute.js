const { Router } = require('express');
const getAllDogs = require('../controllers/getAllDogs');
const getDogsByid = require('../controllers/getDogsById');
const getDogsname = require('../controllers/getDogsname')

const router = Router();

router.get('/dogs', async (req, res) => {

    try {
        const dogs = await getAllDogs();
        res.json(dogs)
    } catch (error) {
        res.status(500).json(error.message)
    }

})
router.get('/dogs/id/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const Byid = await getDogsByid(id)
        res.json(Byid)
    } catch (error) {
        res.status(401).json(error.message)
    }
})

router.get('/dogs/name', async (req, res) => {
    const { name } = req.query;  
    const nameOne = name[0]
    try {
        const { resultNameApi, resultNameDb } = await getDogsname(nameOne);
        res.json({
            resultNameApi, 
            resultNameDb 
        })
    } catch (error) {
        res.status(401).json(error.message)

    }
})

module.exports = router