const express = require('express');
const path = require('path');

const { getCollection, ObjectId } = require('./db.js');

const app = express();
const port = process.env.PORT || 3001;

const root = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static('public'));