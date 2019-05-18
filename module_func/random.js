module.exports = function rand(n, e) {
	// Variable 
	var i,
		rand = 0;
	// function for random number
	function randInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	// return float number
	if (arguments.length == 0) {
		rand = Math.random();
	}
	// if arguments length = 1 then random number 0 to n number
	if (arguments.length == 1) {
		rand = randInt(0, n);
	}
	// else if arguments length = 2 then random number n to e
	else if (arguments.length == 2) {
		rand = randInt(n, e);
	}
	// else arguments length 3 <= number  then so choose random value from argument
	else {
		for (i = 0; i < arguments.length; i++) {
			rand = arguments[randInt(0, i)];
		}
	}
	// return random number
	return rand;
}