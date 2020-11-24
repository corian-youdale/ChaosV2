import request from 'superagent'

export function getConcreteNounsAPI () {
  return request.get('api/v1/concreteNouns')
    .then(res => {
      return res.body.concreteNouns
    })
}

export function addConcreteNounsAPI (currentState) {
  console.log('we got to the api with a post')
  const newNoun = {
    name: currentState.depositType
  }
  return request.post('api/v1/concreteNouns').send(newNoun)
    .then(response => response.body)
}
