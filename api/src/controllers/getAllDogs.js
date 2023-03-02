const { Dog, Temperament } = require('../db')
const {toJSON, stringify,fromJSON} = require('flatted');
const axios = require('axios');
const { API_KEY } = process.env
const getAllDogs = async () => {

    /**
   * Funcion para Listar todo los perros de la Db 
   */
    const getDogsDb = await getAllDogsDb()
    const getDogsApi = await getAllDogsApi()
    const total = getDogsDb.concat(getDogsApi)
    return total
}

const getAllDogsDb = async () => {
    const dogs = await Dog.findAll({
        include: [
            {
                model: Temperament,
                attributes: ['id', 'name']
            }
        ]
    })
    return dogs
}
const getAllDogsApi = async () => {
    const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    return dogsApi.data.map(dog => {
        return {
            id: dog.id, 
            image: dog.image,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            temperament: dog.temperament
        }
    })

}

module.exports = getAllDogs