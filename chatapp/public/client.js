//Initializing socket, connection to server
const socket = io.connect('http://localhost:7777');
socket.on('connect', (data) => {
    socket.emit('join', "Hello server from client");
});

//listener for 'thread' event, this updates messages
socket.on('thread', (data) => {
    $('#thread').append('<li><p class="text-item">'+ data + '</p></li>');
});

//send messages to the server, resets & prevents default form action
$('form').submit(function() {
    const message = $('#message').val();
    socket.emit('messages', message);
    this.reset();
    return false;
})