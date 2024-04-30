const express = require('express')
const path = require('path')

const { getCollection, ObjectId } = require('./db.js')

const app = express();
const port = process.env.PORT || 3001

const root = path.join(__dirname, 'public')

app.use(express.json())
app.use(express.static('public'))


app.get('/api/menu', (request, response)=> {
    const collection = getCollection('Final-API', 'menu')
    const menu = collection.find().toArray()
    response.json(menu)
})