const axios = require('axios')
const { API_KEY } = process.env
const { Dog , Temperament } = require('../db') 

         /**
         * Funcion para buscar los resultado a traves del name de getNameApi getNameDb
         */
const getDogsname = async (name) => {
    const resultNameApi = await getNameApi(name)
    const resultNameDb = await getNameDb(name)
    console.log("soy el perro de la api ", resultNameApi) 
    console.log("soy el perro de la base" ,resultNameDb)
    // console.log(resultDb)

    return {
        resultNameApi,
        resultNameDb
    }
}

         /**
         * Funcion para buscar los resultado a traves del name de la api
         */
const getNameApi = async (name) => {
    try {
        const nameApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const data = await nameApi.data
        const dogNameData = data.find(dogname => dogname.name.toUpperCase() == name.toUpperCase())

        if (dogNameData) {
            return {
                id: dogNameData.id,
                name: dogNameData.name,
                weight: dogNameData.weight,
                height: dogNameData.height,
                life_span: dogNameData.life_span,
                temperament: dogNameData.temperament
            }
        }
    } catch (error) {
        return error.message
    }

} 
        /**
         * Funcion para buscar los resultado a traves del name de la DB
         */
const getNameDb = async (name) => {
    try {
        const nameDb = await Dog.findAll({ 
            include: [
                {
                    model: Temperament,
                    attributes: ['id', 'name']
                }
            ]
        }) 
       
        const dogNameDb = nameDb.find(namedb => namedb.name.toUpperCase() == name.toUpperCase())
      
        if (dogNameDb) {
            return {
                id: dogNameDb.id,
                name: dogNameDb.name,
                weight: dogNameDb.weight,
                height: dogNameDb.height,
                life_span: dogNameDb.life_span,
                Temperaments: dogNameDb.Temperaments
            }
        }
        return "the name of the dog does not exist"

    } catch (error) {
        return error

    }
}

module.exports = getDogsname 