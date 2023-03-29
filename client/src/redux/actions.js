import { GET_DOG, DOG_DETAIL } from './action-types'
import axios from 'axios';

export const Alldogs = () => {

    return async (dispatch) => {
        const response = await axios("http://localhost:3001/dogs")

        return dispatch({
            type: GET_DOG,
            payload: response.data

        })

    }
}
export const getDogDetail = (id) => {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3001/dogs/id/${id}`)   
        console.log("holA soy id" ,id)

        return dispatch({
            type: DOG_DETAIL,
            payload: response.data

        })

    }

}