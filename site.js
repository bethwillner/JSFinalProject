/*const express = require('express');
const path = require('path')

const { getCollection, ObjectId } = require('./db')
const express = require('express')
const path = require('path')


const app = express();
const port = process.env.PORT || 3001

const root = path.join(__dirname, 'public')

app.use(express.json());
app.use(express.static('public'));


app.get('/', (request, response) => {
    response.sendFile('/home.html', {root});
})


app.listen(port, () => console.log(`Server is running http://localhost:${port}`))*/


const express = require('express')
const app = express()
const path = require('path')

const root = path.join(__dirname, 'public')

const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.static('public'))
app.use('/api', require('./db'));


app.get('/', (_, response) => {
	response.sendFile('home.html', { root })
})


const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))