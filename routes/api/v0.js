const express = require('express')
const router = express.Router()

// import data
const gallery = require('../../data/gallery')

// serve json data
router.get('/gallery',(req,res)=>{
  res.status(200).json(gallery)
})

module.exports = router