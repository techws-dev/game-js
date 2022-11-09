const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
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

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })
})

server.listen(port, () => {
    console.log(`App listening on port ${port}`)
})