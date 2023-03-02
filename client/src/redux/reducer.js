import { GET_DOG } from "./action-types"
const initialState = {
    getAlldogs: []
  
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOG:
            return {
                ...state,
                getAlldogs: action.payload,
            }     

        default:
            return { ...state }
    }
}
export default reducer;