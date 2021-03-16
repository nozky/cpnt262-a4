const express = require('express')
const path = require('path')
const cors = require('cors')

const index = require('./routes/index')
const v0 = require('./routes/api/v0')

// init
const app = express()
app.use(cors())

// setting view engine
app.set('view engine','ejs')

// setting static folder
app.use(express.static(path.join(__dirname,'public')))

// routing to index
app.use('/',index)

// routing to api/v0
app.use('/api/v0',v0)

// error
app.use((req, res) => {
  res.status(404)
  res.render('pages/404')
});


const PORT = process.env.Port || 3000
app.listen(PORT, ()=> { console.log(`Listening on port ${PORT}`) })