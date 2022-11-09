var socket = io('http://localhost:3000/')

var messages = document.getElementById('messages')
var form = document.getElementById('message-form')
var input = document.getElementById('message-input')

input.focus()

form.addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message:send', input.value)
    input.value = ''
    input.focus()
  }
})

socket.on('message:new', message => {
  var item = document.createElement('p')
  item.textContent = message
  messages.appendChild(item)
})
