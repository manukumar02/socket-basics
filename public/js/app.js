var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name, '  ', room);
var socket = io();

$('.room-title').text(room);

socket.on('connect', function() {
	console.log('Connected to socket.io server!!');
	socket.emit('joinRoom', {
		name: name,
		room: room,
	});
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	var $messages = $('.messages');
	var $message = $('<li class="list-group-item"></li>')

	console.log('New Message: ');
	console.log(message.text);
	$message.append('<p><strong>'+ message.name +' '+ momentTimestamp.local().format('h:mm a') +'</strong></p>')
	$message.append('<p>' + message.text + '</P>')
	$messages.append($message);
});

var $form = $('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name="message"]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');
})