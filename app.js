const express = require('express')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
const path = require('path')

const app = express();
// Use body parser to
app.use(express.urlencoded({extended:false}))
app.engine('hbs', hbs.create({
    extname: 'hbs',
    defaultLayout: 'main'
}).engine)

app.set('view engine','.hbs')

//routes
app.use('/auth',require('./routes/auth'))
app.use('/stories',require('./routes/stories'))

app.use(express.static(path.join(__dirname,'public')))
const PORT =  process.env.PORT || 4001

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode in ${PORT}`))