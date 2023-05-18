const express = require('express')
const router = express.Router()

// login
router.get('/login',(req,res) =>{
    res.render('auth/login',{
        layout:'auth'
    })
})

// register
router.get('/register',(req,res) =>{
    res.render('auth/register',{
        layout:'auth'
    })
})

// dashboard
router.get('/dashboard',(req,res) =>{
    res.render('auth/dashboard',{
        layout:'main'
    })
})

// logout
router.get('/logout',(req,res)=>{
    res.redirect('/home')
})

module.exports = router