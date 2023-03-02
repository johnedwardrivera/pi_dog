const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js'); 
const dogRouter = require('../server/dogsRoute')
const dogsPostRoute = require('../server/dogsPostRoute')   
const getTemperaments = require('../server/dogTemperaments')




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter); 
router.use('/', dogRouter) 
router.use('/', dogRouter)
router.use('/', dogsPostRoute) 
router.use('/', dogRouter)  
router.use('/', getTemperaments)



module.exports = router;
