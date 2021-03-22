// front end routes

const express = require('express')
const router = express.Router()

// Using dayjs to calculate the last time page has been updated. 
const days = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
days.extend(relativeTime)
days().locale('en-ca')

router.get('/',(req, res)=>{
  res.render('pages/index',{pageTitle: 'Gallery', lastUpdate: days('2021/3/18').fromNow()})
})

router.get('/login',(req,res)=>{
  res.render('pages/login',{pageTitle: 'Login', lastUpdate: days('2021/3/18').fromNow()})
})

router.get('/register',(req,res)=> {
  res.render('pages/register',{pageTitle: 'Register',lastUpdate: days('2021/3/18').fromNow()})
})

module.exports = router