//knchum enq socket.io ev haytarum en side canvasi hamar
var size_box = 20;
var socket = io();

var
	weather = "garun",
	count = 0,

	heightY = 25,
	widthX = 25;

 //setup
 function setup() {
  	createCanvas(widthX * size_box , heightY * size_box);
	background('#acacac');
	noStroke();
 }
 
 //nuyn draw functiony uxaki serveric ekac matrixi hashvin 
 function drawMatrix(matrix) {
	count++;
	if (count == 0) {
		weather = "garun";
		// console.log('Hi');
	} else if (count == 25) {
		weather = "amar";
	} else if (count == 50) {
		weather = 'ashun';
	} else if (count == 75) {
		weather = 'dzmer';
	}
	if (count == 100) {
		count = 0;
	}

	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {

			if (matrix[y][x] == 1) {
				fill('green');
			} 
			else if (matrix[y][x] == 2) {
				fill('yellow');
			} 
			else if (matrix[y][x] == 3) {
				fill('red');

			} else if (matrix[y][x] == 'man') {
				fill('blue');

			} else if (matrix[y][x] == 'water_Bullets') {
				fill('#03a9f4');

			} else if (matrix[y][x] == 'ordinary_Bullets') {
				fill('#cd7f32')

			} else if (matrix[y][x] == 'LavaSource') {
				fill('#702727');

			} else if (matrix[y][x] == 'Lava') {
				fill('pink');
			}
			else if (matrix[y][x] == "G") {
				fill('#fff');
			}else if(matrix[y][x] == "B"){
				fill('#000');
			}
			if (matrix[y][x] == 0) {
				if (weather == "garun") {
					fill('#c8f1b8');
				} else if (weather == "amar") {
					fill('#ffefa8');
				} else if (weather == "ashun") {
					fill('#ffa856');
				} else if (weather == "dzmer") {
					fill('#adc9f7');
				}

			}

			rect(size_box * x, size_box * y, size_box, size_box);
		}
	}
	$('#weather').text(weather);
}


//yndunuma serveric matrixy ev kanchuma drawMatrix
socket.on("matrix", drawMatrix);






document.addEventListener('keydown', event);

function event(e) {
	socket.emit("send event keydown", e.keyCode);
}

function hgr(backpack,energe_man,Bullets_pcs){
	
	document.getElementById('grass_id').innerHTML = backpack['animals']['grass'];
	document.getElementById('preadtor_id').innerHTML = backpack['animals']['preadtor'];
	document.getElementById('GrassEater_id').innerHTML = backpack['animals']['GrassEater'];

	document.getElementById('waterBullets_gift_id').innerHTML = backpack['bullets']['waterBullets'];
	document.getElementById('ordinaryBullets_gift_id').innerHTML = backpack['bullets']['ordinaryBullets'];

	document.getElementById('food_gift_id').innerHTML = backpack['food']['gift_food'];
	document.getElementById('life_id').innerHTML = energe_man;

	document.getElementById('waterBullets_id').innerHTML = Bullets_pcs[0];
	document.getElementById('ordinaryBullets_id').innerHTML = Bullets_pcs[1];
	
}



socket.on('statistika backpack_for_man', hgr);