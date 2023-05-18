const express = require('express')
const router = express.Router()  

// description = /show add pagec
// route  = GET
router.get('/add',(req,res) => {
    
    res.render("stories/add")
})

// description = /show single story
// route  = GET
router.get('/:id', (req,res) => {
    res.render('stories/details')    
})

// description = /show user stories
// route  = GET
router.get('/user/:userId', (req,res) => {
   res.render('stories/index')
})


router.post('/',(req,res) => {
    res.render('auth/dashboard')
})

// description = stories
// route  = GET /stories

router.get('/',(req,res)=>{
    res.render('stories/index')    
    
})

// description = stories edit
// route  = GET /dashboard

router.get('/edit/:id',async(req,res)=>{
    
    res.render('stories/edit')
})

// description = stories edit
// route  = Delete /stories:id

router.post('/delete/:id',async(req,res)=>{
    res.redirect('/auth/dashboard')
})


// uPDATE STORIES
router.put('/:id',async(req,res) => {
    
    // res.render("stories/add")
})




module.exports = router