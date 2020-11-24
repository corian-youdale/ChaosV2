// import { combineReducers } from 'redux'

// import fruits from './fruits'

// export default combineReducers({
//   fruits
// })

import { combineReducers } from 'redux'

import depositQuantity from './depositQuantity'
import depositType from './depositType'
import concreteNouns from './concreteNouns'

export default combineReducers({
  concreteNouns,
  depositQuantity,
  depositType,

})