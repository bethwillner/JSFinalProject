const express = require('express');
const path = require('path');

const { getCollection, ObjectId } = require('./db.js');

const app = express();
const port = process.env.PORT || 3001;

const root = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static('public'));



app.get('/api/menu', async (request, response) => {

})

app.post('/api/menu', async (request, response) => {
    
})

app.put('/api/menu/:id', async (request, response) => {
    
})

app.delete('/api/menu/:id', async (request, response) => {
    
})

app.get('/api/events', async (request, response) => {
    
})

app.get('/api/events/:id', async (request, response) => {
    
})


app.post('/api/events', async (request, response) => {
    
})

app.put('/api/events/:id', async (request, response) => {
    
})

app.delete('/api/events/:id', async (request, response) => {
    
})

