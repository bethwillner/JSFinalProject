/*const { MongoClient, ObjectId } = require('mongodb')
const { url } = process.env.MONGODB_URI || require('./secrets/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
    await client.connect();
    return client.db(dbName).db.collection(collectionName);
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

//C
router.put('/menu/:id', async (request, response) => {

})

//B
router.delete('/menu/:id', async (request, response) => {

})


//C
router.get('/events', async (request, response) => {

})


//B
router.get('/events/:id', async (request, response) => {

})

//C
router.post('/events', async (request, response) => {

})

//B
router.put('/events/:id', async (request, response) => {

})

//C
router.delete('/events/:id', async (request, response) => {

})





module.exports = router;