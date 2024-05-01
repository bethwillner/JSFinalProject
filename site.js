

const express = require('express')
const app = express()
const path = require('path')

const root = path.join(__dirname, 'public')

const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.static('public'))
app.use('/api', require('./foodtruckdb'));


app.get('/', (_, response) => {
	response.sendFile('home.html', { root })
})


const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))