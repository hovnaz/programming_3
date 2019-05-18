// //random
// function rand(n, e) {
// 	// Variable 
// 	var i,
// 		rand = 0;
// 	// function for random number
// 	function randInt(min, max) {
// 		return Math.floor(Math.random() * (max - min + 1)) + min;
// 	}
// 	if (arguments.length == 0) {
// 		rand = Math.random();
// 	}
// 	// if arguments length = 1 then random number 0 to n number
// 	else if (arguments.length == 1) {
// 		rand = randInt(0, n);
// 	}
// 	// else if arguments length = 2 then random number n to e
// 	else if (arguments.length == 2) {
// 		rand = randInt(n, e);
// 	}
// 	// else arguments length 3 <= number  then so choose random value from argument
// 	else {
// 		for (i = 0; i < arguments.length; i++) {
// 			rand = arguments[randInt(0, i)];
// 		}
// 	}
// 	return rand;
// }


// constructor global varibel 

// for move  0 = up , 1 = left , 2 = right , 3 = bown : default = 0 
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
