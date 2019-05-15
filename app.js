var random = require("./modulesMy/function.js");
var Grass = require("./modules_class/class_grass.js");
var GrassEater = require("./modules_class/class_GrassEater.js");
var preadtor = require("./modules_class/class_preadtor.js");
var Man = require("./modules_class/class.man.js");
var Water_Bullets = require("./modules_class/class.Water_Bullets.js");
var Ordinary_Bullets = require("./modules_class/class.Ordinary_Bullets.js");
var Lava_source = require("./modules_class/class_Lava_source.js");
var Lava = require("./modules_class/class_lava.js");

// Varibles for class js

var found_move = 4,
	energe_man = 2,
	animals_mul = 'grass',
	// permission shoot: default = false 
	Bullets_definitely = false,
	Bullets_definitely_animals = false;
// choose the weapon default = ordinary_Bullets = true and water_Bullets = false

water_Bullets = false,
	ordinary_Bullets = true,
	// Bullets_pcs
	water_Bullets_pcs = 100,
	ordinary_Bullets_pcs = 50,
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
	},
	// for one shoot one click
	one_click_shoot_animals = true,
	one_click_shoot = true;




var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.get('/', function (req, res) {
   res.redirect('public/index.html');
});
server.listen(3000);


var matrix = 5;


io.on('connection', function (socket) {
  socket.emit("matrix", function (matrix) {
      io.sockets.on("return matrix default", matrix);
  });
});















// var
// 	weather = "garun",
// 	count = 0,

// 	fps = 3,
// 	matrix = [],
// 	size_box = 20,
// 	heightY = 25,
// 	widthX = 25,
// 	all_sum_percent = 20;

// var percent_grass_eater = Math.ceil((all_sum_percent * 30) / 100);

// all_sum_percent -= percent_grass_eater;

// var percent_wolf = Math.ceil((all_sum_percent * 10) / 100);

// all_sum_percent -= percent_wolf;

// var
// 	count_grass = all_sum_percent + 50,
// 	count_grass_eater = percent_grass_eater,
// 	count_wolf = percent_wolf,
// 	count_man = 1,
// 	count_Lava_source = 2,
// 	count_man_water_Bullets = 1,

// 	grassArr = [],
// 	grassEaterArr = [],
// 	wolfArr = [],
// 	ManArr = [],
// 	water_BulletsArr = [],
// 	ordinary_BulletsArr = [],

// 	Lava_sourceArr = [],
// 	LavaArr = [];

// if (count_man > 1) {
// 	count_man = 1;
// }
// if (all_sum_percent > 25) {
// 	all_sum_percent = 25;
// }
// if (all_sum_percent < 3) {
// 	all_sum_percent = 3
// }



// function setup() {


// 	for (var i = 0; i < heightY; i++) {
// 		matrix[i] = [];
// 		for (var k = 0; k < widthX; k++) {
// 			matrix[i].push(0);
// 		}
// 	}
// 	// random cordinates x y
// 	// Grass
// 	while (count_grass > 0) {
// 		var y = Math.floor(random(heightY));
// 		var x = Math.floor(random(widthX));
		
// 		if (matrix[y][x] == 0) {
// 			matrix[y][x] = 1;
// 			count_grass--;
// 		}
// 	}
// 	while (count_grass_eater > 0) {
// 		var y = Math.floor(random(heightY));
// 		var x = Math.floor(random(widthX));
// 		if (matrix[y][x] == 0) {
// 			matrix[y][x] = 2;
// 			count_grass_eater--;
// 		}
// 	}
// 	while (count_wolf > 0) {
// 		var y = Math.floor(random(heightY));
// 		var x = Math.floor(random(widthX));
// 		if (matrix[y][x] == 0) {
// 			matrix[y][x] = 3;
// 			count_wolf--;
// 		}
// 	}
// 	while (count_man > 0) {
// 		var y = Math.floor(random(heightY));
// 		var x = Math.floor(random(widthX));
// 		if (matrix[y][x] == 0) {
// 			matrix[y][x] = 'man';
// 			count_man--;
// 		}
// 	}

// 	matrix[0][Math.floor(random(matrix.length))] = 'LavaSource';

// 	// matrix[Math.floor(random(matrix.length))][0] = 'LavaSource';

// 	// matrix[Math.floor(random(matrix.length))][matrix.length - 1] = 'LavaSource';


// 	// matrix[matrix.length - 1][Math.floor(random(matrix.length))] = 'LavaSource';



// 	// water_BulletsArr
// 	for (var y = 0; y < heightY; y++) {
// 		for (var x = 0; x < widthX; x++) {
// 			if (matrix[y][x] == 1) {
// 				var grass_variable = new Grass(x, y, 1);
// 				grassArr.push(grass_variable);
//       } 
//       // else if (matrix[y][x] == 2) {
// 			// 	var GrassEater_variable = new GrassEater(x, y, 2);
// 			// 	grassEaterArr.push(GrassEater_variable);
// 			// } else if (matrix[y][x] == 3) {
// 			// 	var wolf_variable = new preadtor(x, y, 3);
// 			// 	wolfArr.push(wolf_variable);
// 			// } else if (matrix[y][x] == 'man') {
// 			// 	var man_variable = new Man(x, y, 'man');
// 			// 	ManArr.push(man_variable);

// 			// } else if (matrix[y][x] == 'water_Bullets') {
// 			// 	var Man_Water_Bullets_variable = new Water_Bullets(x, y, 'water_weapon', 0);
// 			// 	water_BulletsArr.push(Man_Water_Bullets_variable);
// 			// } else if (matrix[y][x] == 'ordinary_Bullets') {
// 			// 	var Man_ordinary_Bullets_variable = new Ordinary_Bullets(x, y, 'ordinary_Bullets', 0);
// 			// 	ordinary_BulletsArr.push(Man_ordinary_Bullets_variable);
// 			// } else if (matrix[y][x] == 'LavaSource') {
// 			// 	var lavaSource_variable = new Lava_source(x, y, 'Lava');
// 			// 	Lava_sourceArr.push(lavaSource_variable);
// 			// } else if (matrix[y][x] == 'Lava') {
// 			// 	var lava_variable = new Lava(x, y, 'Lava');
// 			// 	LavaArr.push(lava_variable);
//       // }
      
// 		}
// 	}
// }



// function draw() {
// 	count++;
// 	if (count == 0) {
// 		weather = "garun";
// 		// console.log('Hi');
// 	} else if (count == 25) {
// 		weather = "amar";
// 	} else if (count == 50) {
// 		weather = 'ashun';
// 	} else if (count == 75) {
// 		weather = 'dzmer';
// 	}
// 	if (count == 100) {
// 		count = 0;
//   }
  
// 	for (var i in grassArr) {
// 		grassArr[i].mul();
// 	}
// 	// for (var i in grassEaterArr) {
// 	// 	grassEaterArr[i].eat();
// 	// }
// 	// for (var i in wolfArr) {
// 	// 	wolfArr[i].eat();
// 	// }
// 	// for (var i in ManArr) {
// 	// 	ManArr[i].move();
// 	// }
// 	// for (var i in water_BulletsArr) {
// 	// 	water_BulletsArr[i].shoot();
// 	// }
// 	// for (var i in ordinary_BulletsArr) {
// 	// 	ordinary_BulletsArr[i].shoot();
// 	// }
// 	// for (var i in Lava_sourceArr) {
// 	// 	Lava_sourceArr[i].mul();
// 	// }
// 	// for (var i in LavaArr) {
// 	// 	LavaArr[i].mul();
// 	// }
// }

// // 5 fps
// var time = (1000 / 5);

// setInterval( draw, time);