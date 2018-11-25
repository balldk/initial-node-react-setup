// ===============Library===============
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

// ===============Partials===============

// ===============Config===============
const app = express()
const api = express.Router()
const PORT = process.env.PORT || 3000

// ===============Middlewares===============
app.use('/api', api)
app.use(express.static(`${__dirname}/../client/dist`))
app.use(favicon(__dirname + '/favicon.png'))
api.use(bodyParser.json())

// ===============Routes===============
// Client
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
		if (err) {
			res.status(500).send(err)
		}
	})
})

// Server
api.get('/', (req, res) => {
    res.send('App is running...')
})

// ===============Listen===============
app.listen(PORT, () => {
    console.log(`Magic is happening on port ${PORT}...`)
})