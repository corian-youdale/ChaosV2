const connection = require('./connection')

function getConcreteNouns (db = connection) {
  return db('concreteNouns').select()
}

function postConcreteNouns (name, db = connection) {
  return db('concreteNouns').insert(name)
}

module.exports = {
  getConcreteNouns,
  postConcreteNouns,
}
