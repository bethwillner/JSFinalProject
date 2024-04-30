/*const { MongoClient, ObjectId } = require('mongodb')
const { url } = process.env.MONGODB_URL || require('./secrets/mongodb.json')
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
    await client.connect();
    return client.db(dbName).collection(collectionName);
}


module.exports = { getCollection, ObjectId };*/


const router = require('express').Router();

const { get } = require('http');
const { MongoClient, ObjectId } = require('mongodb')

const url = process.env.MONGODB_URL || require('./secrets/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).collection(collectionName)
}

router.get('/menu', async (_, response) => {
    const collection = await getCollection('Final-API', 'menu');
    const menu = await collection.find().toArray();
    response.json(menu)
})

router.post('/menu', async (request, response) => {

})

router.put('/menu/:id', async (request, response) => {

})

router.delete('/menu/:id', async (request, response) => {

})

router.get('/events', async (request, response) => {

})

router.get('/events/:id', async (request, response) => {

})

router.post('/events', async (request, response) => {

})

router.put('/events/:id', async (request, response) => {

})

router.delete('/events/:id', async (request, response) => {

})





module.exports = router;