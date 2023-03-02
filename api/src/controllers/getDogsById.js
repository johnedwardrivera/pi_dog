const axios = require('axios')
const { API_KEY } = process.env
const { Dog, Temperament } = require('../db')

         /**
         * Funcion para buscar los resultado a traves de el ID de dogByidApi dogByidDb
         */
const getDogsByid = async (id) => {
    const resultApi = await dogByidApi(id);
    const resultDb = await dogByidDb(id)
    console.log("soy de la api ", resultApi)
    console.log("soy la base de datos", resultDb)

    return {
        resultApi,
        resultDb
    }

}
   /**
     * Funcion para buscar los resultado a travez de la ID de la api 
     */
const dogByidApi = async (id) => {
    try {
        const dogApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const data = await dogApi.data;
        const dogFoundApi = data.find(dog => dog.id == id)
        if (dogFoundApi) {

            return {
                id: dogFoundApi.id,
                name: dogFoundApi.name,
                weight: dogFoundApi.weight,
                height: dogFoundApi.height,
                life_span: dogFoundApi.life_span,
                temperament: dogFoundApi.temperament
            }
        }
    } catch (error) {
        return error;
    }
}
 
    /**
    * Funcion para buscar los resultado a traves de el ID de la DB
    */
const dogByidDb = async (id) => {
    try {
        const dogFoundDb = await Dog.findOne({
            where: { id: id },
            include: [
                {
                    model: Temperament,
                    attributes: [ 'id', 'name']
                }
            ]
        });

        if (dogFoundDb) {

            return {
                id: dogFoundDb.id,
                name: dogFoundDb.name,
                weight: dogFoundDb.weight,
                height: dogFoundDb.height,
                life_span: dogFoundDb.life_span,
                Temperaments: dogFoundDb.Temperaments
            }
        }
        return "the dog with the id was not found";

    } catch (error) {
        return error;

    }
}



module.exports = getDogsByid;

