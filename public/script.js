
// function main() {


// 	function handleMessage() {
// 		var p = document.createElement('p');
// 		p.innerText = msg;
// 		chatDiv.appendChild(p);
// 		input.value = "";
// 	}

// }




// var socket = io();

// var
// 	weather = "garun",
// 	count = 0,

// 	fps = 3,
// 	size_box = 20,
// 	heightY = 25,
// 	widthX = 25,
// 	all_sum_percent = 20;




// console.log('grass ' + count_grass);
// console.log('grass_eater ' + count_grass_eater);
// console.log('wolf ' + count_wolf);

// function setup() {
// 	createCanvas(size_box * widthX, size_box * heightY);
// 	background('#acacac');
// 	frameRate(fps);
// 	noStroke();

// 	function return_matrix(matrix_){
// 		matrix = matrix_;
// 	}
// 	socket.emit("matrix");
// 	socket.on('return matrix default', return_matrix);

// }

// function draw() {

// 	for (var y = 0; y < matrix.length; y++) {
// 		for (var x = 0; x < matrix[y].length; x++) {

// 			if (matrix[y][x] == 1) {
// 				fill('green');

// 			} else if (matrix[y][x] == 2) {
// 				fill('yellow');

// 			} else if (matrix[y][x] == 3) {
// 				fill('red');

// 			} else if (matrix[y][x] == 'man') {
// 				fill('blue');

// 			} else if (matrix[y][x] == 'water_Bullets') {
// 				fill('#03a9f4');

// 			} else if (matrix[y][x] == 'ordinary_Bullets') {
// 				fill('#cd7f32')

// 			} else if (matrix[y][x] == 'LavaSource') {
// 				fill('#702727');

// 			} else if (matrix[y][x] == 'Lava') {
// 				fill('pink');
// 			}
// 			else if (matrix[y][x] == "G") {
// 				fill('#fff');
// 			} else if (matrix[y][x] == "B") {
// 				fill('#000');
// 			}
// 			if (matrix[y][x] == 0) {
// 				if (weather == "garun") {
// 					fill('#c8f1b8');
// 				} else if (weather == "amar") {
// 					fill('#ffefa8');
// 				} else if (weather == "ashun") {
// 					fill('#ffa856');
// 				} else if (weather == "dzmer") {
// 					fill('#adc9f7');
// 				}

// 			}
// 			rect(size_box * x, size_box * y, size_box, size_box);
// 		}
// 	}
// }




function main() {
	var socket = io();

	socket.emit("matrix");

	function handleMessage(msg) {
		console.log(msg);
	}

	socket.on('return matrix default', handleMessage);
} // main closing bracket

window.onload = main;