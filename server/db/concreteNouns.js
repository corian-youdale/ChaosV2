const connection = require('./connection')

function getConcreteNouns (db = connection) {
  return db('concreteNouns').select()
}

module.exports = {
  getConcreteNouns
}
