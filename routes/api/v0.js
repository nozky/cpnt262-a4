const express = require('express')
const router = express.Router()

// import data
const gallery = require('../../data/gallery')
// const gallery = require('gallery')


// serve json data
router.get('/gallery',(req,res)=>{
  res.status(200)
  res.json(gallery)
})

module.exports = router