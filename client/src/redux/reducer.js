import { GET_DOG, DOG_DETAIL } from "./action-types"
const initialState = {
    getAlldogs: [],
    getDetail: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOG:
            return {
                ...state,
                getAlldogs: action.payload,
            }
        case DOG_DETAIL:
            return{ 
                ...state,  
                getDetail: action.payload,
            }

        default:
            return { ...state }
    }
}
export default reducer;