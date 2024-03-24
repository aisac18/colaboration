const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routerPerson = require('./routes/person.routes')

const app = express()

app.set('port', 3000)

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(routerPerson)

app.listen(app.get('port'), e=> console.log('escuchando puerto'))
