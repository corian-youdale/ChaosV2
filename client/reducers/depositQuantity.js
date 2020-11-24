import { SET_DEPOSIT_QUANTITY } from '../actions'


const initialState = "Unspecified"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DEPOSIT_QUANTITY:
            return action.depositQuantity
        default:
            return state
    }
}

export default reducer