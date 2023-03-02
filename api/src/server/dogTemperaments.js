const { Router } = require('express');
const getTemperaments = require('../controllers/getTemperaments')

const router = Router();

router.get('/temperaments', async (req, res) => {
    try {
        const result = await getTemperaments()
        res.json(result)

    } catch (error) {
        res.status(500).json(error.message)

    }

})

module.exports = router