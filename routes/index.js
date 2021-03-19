// front end routes

const express = require('express')
const router = express.Router()


router.get('/',(req, res)=>{
  res.render('pages/index',{pageTitle: 'Gallery'})
})

router.get('login',(req,res)=>{
  res.render('pages/login',{pageTitle: 'Login'})
})

router.get('/register',(req,res)=> {
  res.render('/pages/register',{pageTitle: 'Register'})
})



module.exports = router