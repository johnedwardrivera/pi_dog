const { Dog, Temperament } = require('../db')
 
         /**
         * Funcion para cear un perro
         */
const postDogs = async (objDog) => {

    try {

        const { image, name, height, weight, life_span, Temperaments } = objDog

        if (!image || !name || !height || !weight || !life_span || !Temperaments) throw new Error('Mandatory data missing')

        const newDog = { image, name, height, weight, life_span }

        const createDog = await Dog.create(newDog)
         
          /**
         * Funcion para validar si ya existe un temperamento
         */
        let temData = await Temperament.findAll({
            where: {
                name: Temperaments,
            }
        }) 
          /**
         * Condicion para valdar si ya existe el temperamento
         * si no existe se crea, si existe se retona los temperamentos de la DB
         */

        if(temData == ""){
            temData = await Temperament.create({
                name: Temperaments
            })
        }
     
        console.log("id: ", temData )
        createDog.addTemperament(temData) 
        
          /**
         *  mostrar los temperamentos
         */
        return Dog.findAll({
            include: [
                {
                    model: Temperament,
                    attributes: [ 'id', 'name']
                }
            ]
        })


    } catch (error) {
        return { error: error.message }

    }

}

module.exports = postDogs;