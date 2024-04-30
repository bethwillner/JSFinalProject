const express = require('express');
const path = require('path');

const {MongoClient, ObjectId} = require('mongodb')
const {url} = process.env.MONGODB_URL || require('./secrets/mongo.json');

const getCollection = async (dbName, collectionName) => {
    await client.connect();
    return client.db(dbname).collection(collectionName);
}

const app = express();
const port = process.env.PORT || 3001;

const root = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static('public'));

