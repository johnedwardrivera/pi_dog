const axios = require('axios')
const { API_KEY } = process.env
const { Dog, Temperament } = require('../db')

         /**
         * Funcion para listar los temperamnetos de la api
         */
const getTemperaments = async () => {
    try {
        const temperamentApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const data = await temperamentApi.data
        let temperamentos = []
        let temperamentosFilter = await data.filter(dog => dog.temperament != "")
        temperamentosFilter.forEach(dog => {
            if (dog.temperament != undefined) {
                temperamentos.push({
                    name: dog.temperament
                })
            }
        })

        /**
         * Funcion para validar si ya existe un temperamento
         */
        let temData = await Temperament.findAll({
            where: {
                name: temperamentos[0].name
            }
        })


        /**
         * Condicion para valdar si ya existe el temperamento
         * si no existe se crea, si existe se retona los temperamentos de la DB
         */
        if (temData == "") {
            let temperamentDb = await Temperament.bulkCreate(temperamentos)
            return temperamentDb

        }

        return Temperament.findAll()


    } catch (error) {
        return error.message
    }
}

module.exports = getTemperaments