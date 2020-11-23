const express = require('express')

const db = require('../db/concreteNouns')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('getNouns route firing')
  db.getConcreteNouns()
    .then(results => {
        console.log('route firing')
      res.json({ concreteNouns: results.map( concreteNouns => concreteNouns.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong with the GET route' })
    })
})

router.post('/', (req,res) => {
  console.log('postNoun route firing')
  db.postConcreteNouns(req.body)
    .then(newNoun => {
      res.json({newNoun})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong with the POST route' })
    })
})


module.exports = router
