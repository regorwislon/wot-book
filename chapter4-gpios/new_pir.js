

var gpio = require('rpi-gpio');
gpio.on('change', function(channel, value) {
        console.log('Channel ' + channel + ' value is now ' + value);
});
gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH, pause);

function pause() {
	setTimeout(closePins, 20000);
}

function closePins() {
	gpio.destroy(function() {
		console.log('Times up! Pin 7 unexported');
	});
}

