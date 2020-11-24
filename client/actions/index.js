// import { getFruits } from '../apis/fruits'

// export const SET_FRUITS = 'SET_FRUITS'

// export function setFruits (fruits) {
//   return {
//     type: SET_FRUITS,
//     fruits
//   }
// }

// // getFruits is the API that gets the fruits from the DB via the route, which is dispatched into the store (into the state: fruits) by setFruits
// export function fetchFruits () {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }

import { getConcreteNounsAPI } from '../apis/concreteNouns'

export const SET_NOUNS = 'SET_NOUNS'
export const SET_DEPOSIT_QUANTITY = 'SET_DEPOSIT_QUANTITY'
export const SET_DEPOSIT_TYPE = 'SET_DEPOSIT_TYPE'

export function setNouns (concreteNouns) {
  return {
    type: SET_NOUNS,
    concreteNouns
  }
}

export function fetchNouns() {
  return dispatch => {
    return getConcreteNounsAPI()
      .then(concreteNouns => {
        dispatch(setNouns(concreteNouns))
        return null
    })
  }
}


export function setDepositType(depositType){
  return {
    type: SET_DEPOSIT_TYPE,
    depositType: depositType
  }
}

export function setDepositQuantity(depositQuantity) {
  return {
    type: SET_DEPOSIT_QUANTITY,
    depositQuantity: depositQuantity
  }
}