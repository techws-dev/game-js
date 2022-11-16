const express = require('express')
const cors = require('cors')
const historyApiFallback = require('connect-history-api-fallback')
const config = require('./src/config')
const app = express()
const port = config.server.port
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

app.use(cors())

app.use(express.static('public'))

// Handle API routes
app.use('/api', require('./src/routes'))

// Handle history API fallback
app.use(historyApiFallback())

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })

    socket.on('message:send', (message) => {
      console.log(`message received: ${message}`)

      io.emit('message:new', message)
    })
})

server.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
