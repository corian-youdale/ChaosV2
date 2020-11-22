import request from 'superagent'

export function getConcreteNounsAPI () {
  return request.get('api/v1/concreteNouns')
    .then(res => {
      return res.body.concreteNouns
    })
}
