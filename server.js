var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
	res.redirect('index.html');
});
server.listen(3000, function () {
	console.log("port is runninng")

});

//stex kapum en mer classery
// my random function for int and float numbers
var rand = require("./module_func/random.js");

var Grass = require("./module/class_grass.js");
var GrassEater = require("./module/class_GrassEater.js");
var preadtor = require("./module/class_preadtor.js");
var Man = require("./module/class.man.js");
var Water_Bullets = require("./module/class.Water_Bullets.js");
var Ordinary_Bullets = require("./module/class.Ordinary_Bullets.js");
var Lava_source = require("./module/class_Lava_source.js");
var Lava = require("./module/class_lava.js");
	
const fs = require('fs');





// varible for class man and down

// for move  0 = up , 1 = left , 2 = right , 3 = bown : default = 0 
found_move = 4;

energe_man = 2;
animals_mul = 'grass';
// permission shoot: default = false 
Bullets_definitely = false;
Bullets_definitely_animals = false;	

// choose the weapon default = ordinary_Bullets = true and water_Bullets = false

water_Bullets = false;
ordinary_Bullets = true;
// Bullets_pcs
water_Bullets_pcs = 100;
ordinary_Bullets_pcs = 50;

backpack_for_man = {
	animals: {
		grass: 0,
		preadtor: 0,
		GrassEater: 0,
	},
	bullets: {
		waterBullets: 0,
		ordinaryBullets: 0,
	},
	food: {
		meat: 0,
		gift_food: 0,
	}
};
// for one shoot one click
one_click_shoot_animals = true;
one_click_shoot = true;





// sranq chgitem inchu aranc var i e petq grel ???????????????????????????????????????????????????????????????????????
grassArr = [];
grassEaterArr = [];
ManArr = [];
wolfArr = [];
water_BulletsArr = [];
ordinary_BulletsArr = [];
Lava_sourceArr = [];
LavaArr = [];

// sa im eventi hamar e aes 75 y da k taryn e 
// aes eventy kangnelu tivn e
var event_keydown = 75;



// sranq aveli shat front i hamar e nerqevinery

// tokosnerov miqich voch nman tokosneri baec aveli lav dzevov
// aespes em arel qani vor amenmekic shat shat er talis
// 
var
	weather = "garun",
	count = 0,
	size_box = 20,
	heightY = 25,
	widthX = 25,
	all_sum_percent = 20,
	fps = 1000; // petq e banadzvov anel

var percent_grass_eater = Math.ceil((all_sum_percent * 30) / 100);

all_sum_percent -= percent_grass_eater;

var percent_wolf = Math.ceil((all_sum_percent * 10) / 100);

all_sum_percent -= percent_wolf;

var
	count_grass = all_sum_percent + 50,
	count_grass_eater = percent_grass_eater,
	count_wolf = percent_wolf,
	count_man = 1,
	count_Lava_source = 2,
	count_man_water_Bullets = 1;

if (count_man > 1) {
	count_man = 1;
}
if (all_sum_percent > 25) {
	all_sum_percent = 25;
}
if (all_sum_percent < 3) {
	all_sum_percent = 3
}



function genMatrix(w, h) {
	var matrix = [];
	for (var y = 0; y < h; y++) {
		matrix[y] = [];
		for (var x = 0; x < w; x++) {
			matrix[y].push(0);
		}
	}
	while (count_grass > 0) {
		var y = rand(heightY-1);
		var x = rand(widthX-1);
		if (matrix[y][x] == 0) {
			matrix[y][x] = 1;
			count_grass--;
		}
	}
	while (count_grass_eater > 0) {
		var y = rand(heightY-1);
		var x = rand(widthX-1);
		if (matrix[y][x] == 0) {
			matrix[y][x] = 2;
			count_grass_eater--;
		}
	}
	while (count_wolf > 0) {
		var y = rand(heightY-1);
		var x = rand(widthX-1);
		if (matrix[y][x] == 0) {
			matrix[y][x] = 3;
			count_wolf--;
		}
	}
	while (count_man > 0) {
		var y = rand(heightY-1);
		var x = rand(widthX-1);
		if (matrix[y][x] == 0) {
			matrix[y][x] = 'man';
			count_man--;
		}
	}
	matrix[0][Math.floor(rand(matrix.length))] = 'LavaSource';

	// matrix[Math.floor(rand(matrix.length))][0] = 'LavaSource';

	// matrix[Math.floor(rand(matrix.length))][matrix.length - 1] = 'LavaSource';


	// matrix[matrix.length - 1][Math.floor(rand(matrix.length))] = 'LavaSource';

	return matrix;
}   

//stexcum en zangvacic patahakan andam tvox function
Random = function (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

//kanchum en genMatrix functiony ev talis en matrix popoxakanin
matrix = genMatrix(widthX, heightY);

//stex pptvum en matrix-i mejov u stexcum en objectnery
for (var y = 0; y < matrix.length; y++) {
	for (var x = 0; x < matrix[y].length; x++) {

		if (matrix[y][x] == 1) {
			grassArr.push(new Grass(x, y, 1));
		}
		else if (matrix[y][x] == 2) {
			grassEaterArr.push(new GrassEater(x, y, 2));
		}
		else if (matrix[y][x] == 3) {
			wolfArr.push(new preadtor(x, y, 3));
		}
		else if (matrix[y][x] == 'man') {
		    ManArr.push(new Man(x, y, 'man'));
		}
		else if (matrix[y][x] == 'water_Bullets') {
		        water_BulletsArr.push(new Water_Bullets(x, y, 'water_weapon', 0));
		    } 
		    else if (matrix[y][x] == 'ordinary_Bullets') {
		        ordinary_BulletsArr.push(new Ordinary_Bullets(x, y, 'ordinary_Bullets', 0));
		    } 
		else if (matrix[y][x] == 'LavaSource') {
		        Lava_sourceArr.push(new Lava_source(x, y, 'Lava'));
		    } else if (matrix[y][x] == 'Lava') {
		        LavaArr.push(new Lava(x, y, 'Lava'));
		    }
	}
}


//stexcum en function vor kkanchi objecteri methodnery ev kuxark matrixi masin datan script.js
function drawserever() {
	for (var i in grassArr) {
		grassArr[i].mul();
	}
	for (var i in grassEaterArr) {
		grassEaterArr[i].eat();
	}
	for (var i in wolfArr) {
		wolfArr[i].eat();
	}
	for (var i in ManArr) {
		ManArr[i].move(event_keydown);
	}
	for (var i in water_BulletsArr) {
		water_BulletsArr[i].shoot();
	}
	for (var i in ordinary_BulletsArr) {
		ordinary_BulletsArr[i].shoot();
	}
	for (var i in Lava_sourceArr) {
		Lava_sourceArr[i].mul();
	}
	for (var i in LavaArr) {
		LavaArr[i].mul();
	}

	//matrixy uxarkum en clientin
	io.sockets.emit("matrix", matrix);
}

// function data_time(){
// 	let backpack_data = JSON.stringify(backpack_for_man_default);
// 	fs.writeFile('data/backpack.json', backpack_data, (err) => {  
//     	if (err) throw err;
//     	console.log('Data written to file backpack');
// 	});
// }







io.on('connection', function (socket) {
	socket.on("send event keydown", function (event) {
		event_keydown = event;
		io.sockets.emit("statistika backpack_for_man", backpack_for_man,energe_man,[water_Bullets_pcs,ordinary_Bullets_pcs]);
	});
});

setInterval(drawserever, fps);
// setInterval(data_time, 5000);







