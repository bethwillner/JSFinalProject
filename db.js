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

router.get('/api/menu', async (_, response) => {
    const collection = await getCollection('Final-API', 'menu');
    const menu = await collection.find().toArray();
    response.json(menu)
})



module.exports = router;