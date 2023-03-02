import { GET_DOG } from './action-types'
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