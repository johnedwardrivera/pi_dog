const axios = require('axios')
const { API_KEY } = process.env
const { Dog, Temperament } = require('../db')

/**
* Funcion para buscar los resultado a traves de el ID de dogByidApi dogByidDb
*/
const getDogsByid = async (id) => {
    const resultApi = await dogByidApi(id);
    const resultDb = await dogByidDb(id)
    const total = resultDb.concat(resultApi)
    console.log("soy de la api ", resultApi)
    console.log("soy la base de datos", resultDb)
    console.log("soy el total", total)

    return total


}
/**
  * Funcion para buscar los resultado a travez de la ID de la api 
  */
const dogByidApi = async (id) => {
    try {
        const dogApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const data = await dogApi.data;
        const dogFoundApi = data.filter(dog => dog.id == id)
        console.log("holadogFoundApi", dogFoundApi)

        if (dogFoundApi) {


            return dogFoundApi

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
                    attributes: ['id', 'name']
                }
            ] 
           
        });  console.log("que tal" ,dogFoundDb)
        
        /**
 * preguntamos si existe el perro con la id
 */
        if (dogFoundDb) { 
           

            return [{
                id: dogFoundDb.id,
                image: dogFoundDb.image,
                name: dogFoundDb.name,
                weight: dogFoundDb.weight,
                height: dogFoundDb.height,
                life_span: dogFoundDb.life_span,
                Temperaments: dogFoundDb.Temperaments
            }]
        }  
        
      
        return "the dog with the id was not found";

    } catch (error) {
        return error;

    }
}



module.exports = getDogsByid;

