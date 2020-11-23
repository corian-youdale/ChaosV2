import { SET_DEPOSIT_TYPE } from '../actions' 

const initialState = "Unspecified"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DEPOSIT_TYPE:
            return action.depositType
        default:
            return state
    }
}

export default reducer