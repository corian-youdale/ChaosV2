import { SET_NOUNS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOUNS:
      return action.concreteNouns
    default:
      return state
  }
}

export default reducer
