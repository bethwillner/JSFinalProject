
const router = require('express').Router();

const { get } = require('http');
const { MongoClient, ObjectId } = require('mongodb')

const url = process.env.MONGODB_URL || require('./secrets/mongodb.json').url
const client = new MongoClient(url)


//define collection
const getCollection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).collection(collectionName)
}


//get all menu items
router.get('/menu', async (_, response) => {
    const collection = await getCollection('Final-API', 'menu');
    const menu = await collection.find().toArray();
    response.json(menu)
})


//B
router.post('/menu', async (request, response) => {
    const { name, description, price } = request.body;
    const collection = await getCollection('Final-API', 'menu');
    const newItem = await collection.insertOne({name, description, price});
    response.json(newItem);
})

//C-update menu item
router.put('/menu/:id', async (request, response) => {
    const {body, params} = request
    const {id} = params
    const { name, description, price } = body
    const item = { name, description, price }

    const collection = await getCollection('Final-API', 'menu')
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: item })
    response.send(result)
})

//B
router.delete('/menu/:id', async (request, response) => {
    const {id} = request.params;
    const collection = await getCollection('Final-API', 'menu')
    await collection.deleteOne({ _id: new ObjectId(id) })
    const message = "Successfully Deleted!"
    response.send(message);
})


//C-return only event id, name and date
router.get('/events', async (request, response) => {
    const collection = await getCollection('Final-API', 'events')
    const event = await collection.find().toArray()
    const eventDetails = event.map(event => ({
        _id: event._id,
        name: event.name,
        dates: event.dates
    }))
    response.json(eventDetails)
})


//B
router.get('/events/:id', async (request, response) => {
    const {id} = request.params;
    const collection = await getCollection('Final-API', 'events');
    const event = await collection.findOne({"_id": new ObjectId(id)})
    response.json(event);
})

//C-add new event 
router.post('/events', async (request, response) => {
    const { body } = request
    const { name, location, hours, dates } = body
    const event = { name, location, hours, dates }

    const collection = await getCollection('Final-API', 'events')
    const result = await collection.insertOne(event)
    response.send(result)
})

//B
router.put('/events/:id', async (request, response) => {
    const {body, params} = request
    const {id} = params;
    const {name, location, hours, dates} = body
    const event = {name, location, hours, dates}

    const collection = await getCollection('Final-API', 'events')
    const Updatedevent = await collection.updateOne({_id: new ObjectId(id)}, {$set: event})
    response.json(Updatedevent);
})

//C-delete an event 
router.delete('/events/:id', async (request, response) => {
    const {id} = request.params
    const collection = await getCollection('Final-API', 'events')
    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    response.send(result)
})

module.exports = router;