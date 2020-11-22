const express = require('express')

const db = require('../db/concreteNouns')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('route firing')
  db.getConcreteNouns()
    .then(results => {
        console.log('route firing')
      res.json({ concreteNouns: results.map( concreteNouns => concreteNouns.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
