//random
function rand(n, e) {
	// Variable 
	var i,
		rand = 0;
	// function for random number
	function randInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	if (arguments.length == 0) {
		rand = Math.random();
	}
	// if arguments length = 1 then random number 0 to n number
	else if (arguments.length == 1) {
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
	return rand;
}



class Grass {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		// weather tact
		this.tact_weather = 4;
		this.tact_weather_boolean = true;
		this.multiply_tact_weather = 0;
		this.multiply = 0;
	}
	newDirections() {
		this.directions = [

			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]

		];
	}
	chooseCell(character) {
		this.newDirections()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];

			if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character) {
					found.push(this.directions[i]);
				}
			}

		}
		return found;
	}
	mul() {
		this.multiply_tact_weather++;
		// ______________________weather 
		// spring
		if (this.multiply_tact_weather >= 0) {
			// tact grass 4
			this.tact_weather = 6;
			this.tact_weather_boolean = true;

		}
		// summer
		if (this.multiply_tact_weather >= 25) {
			// tact grass 12
			this.tact_weather = 18;
			this.tact_weather_boolean = true;
		}
		// autumn
		if (this.multiply_tact_weather >= 50) {
			// tact grass 16
			this.tact_weather = 24;
			this.tact_weather_boolean = true;
		}
		// winter
		if (this.multiply_tact_weather >= 75) {
			this.tact_weather_boolean = false;
			// tact grass 0
			this.tact_weather = 50;
		}
		if (this.multiply_tact_weather == 100) {
			this.multiply_tact_weather = 0;
			this.tact_weather_boolean = true;
		}

		this.multiply++;
		var emptyCells = this.chooseCell(0);
		var newCell = random(emptyCells);
		if (newCell && this.multiply >= this.tact_weather && this.tact_weather_boolean == true) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = this.index;
			var newGrass = new Grass(newX, newY, this.index)
			grassArr.push(newGrass);
			this.multiply = 0;
		}
	}
}
class GrassEater {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.energy = 8;
		this.multiply = 0;
		this.bazm = 0;
		this.aragucrun = 0;
		this.multiply_tact_weather = 0;
		this.tact_weather = 2;

		this.tact_die = 6;
		this.tact_mul = 6;

		// tact_weather_boolean
		this.tact_weather_move_boolean = true;
		this.tact_weather_mul_boolean = true;
	}
	newDirections() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]

		];
	}
	chooseCell(character) {
		this.newDirections()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];

			if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character) {
					found.push(this.directions[i]);
				}
			}

		}
		return found;
	}
	move() {
		var
			emptyCord = this.chooseCell(0),
			cord = random(emptyCord);

		if (cord) {
			var
				x = cord[0],
				y = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[y][x] = this.index;
			this.x = x;
			this.y = y;
		}
	}
	die(x, y) {
		matrix[this.y][this.x] = 0;
		for (var i in grassEaterArr) {
			if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
				grassEaterArr.splice(i, 1);
				this.bazm = 0;
			}
		}
	}
	mul() {
		var
			emptyCord = this.chooseCell(0),
			cord = random(emptyCord);
		if (cord) {

			var
				x = cord[0],
				y = cord[1];
			var eater = new GrassEater(x, y, this.index);
			grassEaterArr.push(eater);
			matrix[this.y][this.x] = 0;
			matrix[y][x] = this.index;
			this.multiply = 0;
		}
	}

	eat() {

		var emptyCord = this.chooseCell(1),
			cord = random(emptyCord);
		this.aragucrun++;



		this.multiply_tact_weather++;
		// ______________________weather 
		// spring
		if (this.multiply_tact_weather >= 0) {
			// tact grass 4
			this.tact_weather = 2;
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = true;
			this.tact_die = 8;
			this.tact_mul = 6;
		}
		// summer
		if (this.multiply_tact_weather >= 25) {
			// tact grass 2
			this.tact_weather = 3;
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = false;
			this.tact_die = 9;
			this.tact_mul = 6;
		}
		// autumn
		if (this.multiply_tact_weather >= 50) {
			// tact grass 16
			this.tact_weather = 6;
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = true;
			this.tact_die = 14;
			this.tact_mul = 6;
		}
		// winter
		if (this.multiply_tact_weather >= 75) {
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = false;
			// tact grass 0
			this.tact_weather = 0;
			this.tact_die = 3;
			this.tact_mul = 8;
		}
		if (this.multiply_tact_weather == 100) {
			this.multiply_tact_weather = 0;
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = true;
			this.tact_die = 3;
			this.tact_mul = 6;
		}



		if (this.aragucrun >= this.tact_weather && this.tact_weather_move_boolean == true) {
			this.aragucrun = 0;

			if (cord) {
				var x = cord[0],
					y = cord[1];

				matrix[y][x] = this.index;
				matrix[this.y][this.x] = 0;

				this.x = x;
				this.y = y;

				for (var i in grassArr) {
					if (x == grassArr[i].x && y == grassArr[i].y) {
						grassArr.splice(i, 1);
						this.multiply++;
						if (this.multiply == this.tact_mul) {
							if (this.tact_weather_mul_boolean) {
								this.mul();
							}
							this.bazm = 0;
						}
					}
				}
			} else {

				this.move();
				this.bazm++;
				if (this.bazm == this.tact_die) {
					this.die(this.x, this.y);
				}


			}
		}
	}

}



class preadtor {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.energy = 8;
		this.multiply = 0;
		this.bazm = 0;
		this.aragucrun = 0;

		this.multiply_tact_weather = 0;
		this.tact_move = 4;

		this.tact_die = 6;
		this.tact_mul = 6;

		// tact_weather_boolean
		this.tact_weather_move_boolean = true;
		this.tact_weather_mul_boolean = true;
		this.eat_wolves = false;


	}
	newDirections() {
		this.directions = [
			[this.x - 2, this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x, this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 2],

			[this.x - 2, this.y - 1],
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x + 2, this.y - 1],

			[this.x - 2, this.y],
			[this.x - 1, this.y],
			[this.x, this.y],
			[this.x + 1, this.y],
			[this.x + 2, this.y],

			[this.x - 2, this.y + 1],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1],
			[this.x + 2, this.y + 1],

			[this.x - 2, this.y + 2],
			[this.x - 1, this.y + 2],
			[this.x, this.y + 2],
			[this.x + 1, this.y + 2],
			[this.x + 2, this.y + 2],
		];
	}
	chooseCell(character) {
		this.newDirections()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];

			if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character) {
					found.push(this.directions[i]);
				}
			}

		}
		return found;
	}


	move() {
		var emptyCord0 = this.chooseCell(0),
		 emptyCord2 = this.chooseCell(2),

		 emptyCordMan = this.chooseCell('man'),
		 emptyCordConcat1 = emptyCord0.concat(emptyCordMan),
		 emptyCord = emptyCordConcat1.concat(emptyCord2),
		 cord = random(emptyCord);

		if (cord) {
			var
				x = cord[0],
				y = cord[1];
			matrix[this.y][this.x] = matrix[y][x];
			matrix[y][x] = this.index;
			this.x = x;
			this.y = y;
		}
	}


	die(x, y) {
		matrix[this.y][this.x] = 0;
		for (var i in wolfArr) {
			if (x == wolfArr[i].x && y == wolfArr[i].y) {
				wolfArr.splice(i, 1);
				this.bazm = 0;
			}
		}
	}
	mul() {
		var
			emptyCord = this.chooseCell(0),
			cord = random(emptyCord);
		if (cord) {
			var
				x = cord[0],
				y = cord[1];
			var eater = new preadtor(x, y, this.index, this.tact);
			wolfArr.push(eater);
			matrix[this.y][this.x] = matrix[y][x];
			matrix[y][x] = this.index;
			this.multiply = 0;
		}
	}

	eat() {
		var emptyCord2 = this.chooseCell(2),
			emptyCordMan = this.chooseCell('man'),
			emptyCord = emptyCord2.concat(emptyCordMan),
			cord = random(emptyCord);



		this.multiply_tact_weather++;
		// ______________________weather 
		// spring
		if (this.multiply_tact_weather >= 0) {
			// tact grass 4
			this.tact_move = 3;
			this.tact_weather_move_boolean = true;

			this.tact_weather_mul_boolean = true;
			this.eat_wolves = false;
			this.tact_die = 15;
			this.tact_mul = 16;
		}
		// summer
		if (this.multiply_tact_weather >= 25) {
			// tact grass 2
			this.tact_move = 4;
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = false;
			this.eat_wolves = false;
			this.tact_die = 25;
			this.tact_mul = 15;
		}
		// autumn
		if (this.multiply_tact_weather >= 50) {
			// tact grass 16
			this.tact_move = 4;
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = true;
			this.eat_wolves = false;
			this.tact_die = 18;
			this.tact_mul = 10;
		}
		// winter
		if (this.multiply_tact_weather >= 75) {
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = false;
			this.eat_wolves = false;
			// tact grass 0
			this.tact_move = 0;
			this.tact_die = 6;
			this.tact_mul = 8;
		}

		if (this.multiply_tact_weather == 100) {

			this.multiply_tact_weather = 0;
			this.tact_move = 6;

			this.tact_die = 5;
			this.tact_mul = 6;

			// tact_weather_boolean
			this.tact_weather_move_boolean = true;
			this.tact_weather_mul_boolean = true;
			this.eat_wolves = false;
		}

		this.aragucrun++;
		if (this.aragucrun >= this.tact_move &&
			this.tact_weather_move_boolean == true) {
			this.aragucrun = 0;

			if (cord) {
				var x = cord[0],
					y = cord[1];

				matrix[y][x] = this.index;
				matrix[this.y][this.x] = 0;



				for (var i in ManArr) {
					if (x == ManArr[i].x && y == ManArr[i].y) {
						ManArr.splice(i, 1);
						this.multiply++;
						alert('GAME OVER');
						if (this.multiply == this.tact_mul) {
							if (this.tact_weather_mul_boolean) {
								this.mul();
							}
							this.bazm = 0;
						}
					}
				}
				for (var i in grassEaterArr) {
					if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
						grassEaterArr.splice(i, 1);
						this.multiply++;
						if (this.multiply == this.tact_mul) {
							if (this.tact_weather_mul_boolean) {
								this.mul();
							}
							this.bazm = 0;
						}
					}
				}
				this.x = x;
				this.y = y;


			} else {
				this.move();
				this.bazm++;
				if (this.bazm == this.tact_die) {
					this.die(this.x, this.y);
				}
			}
		}
		// else if (this.eat_wolves == true) {
		// 	console.log("All OK!!!");
		// }
	}

}



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

//  class Man

class Man {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;


	}
	newDirections() {
		// directions man move

		// D = can walk
		// x = can not walk
		// M = man
		/*
		xDx
		DMD
		xDx

		*/
		this.directions = [

			[this.x, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x, this.y + 1],
			[this.x, this.y]

		];
	}
	// if character_move == 0 up,
	chooseCell(character_move) {
		this.newDirections()
		var found = [];
		var x = this.directions[character_move][0];
		var y = this.directions[character_move][1];

		if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
			if (matrix[y][x] == 0 || matrix[y][x] == 1) {
				found.push(this.directions[character_move]);
			}

		}
		return found;
	}



	newDirections_animals() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x + 1, this.y - 1],

			[this.x - 1, this.y + 1],
			[this.x + 1, this.y + 1],
		];
	}
	chooseCell_animals(character) {
		this.newDirections_animals()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];

			if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character) {
					found.push(this.directions[i]);
				}
			}

		}
		return found;
	}



	move_event() {
		document.getElementById('grass_id').innerHTML = backpack_for_man['animals']['grass'];
		document.getElementById('preadtor_id').innerHTML = backpack_for_man['animals']['preadtor'];
		document.getElementById('GrassEater_id').innerHTML = backpack_for_man['animals']['GrassEater'];

		document.getElementById('waterBullets_gift_id').innerHTML = backpack_for_man['bullets']['waterBullets'];
		document.getElementById('ordinaryBullets_gift_id').innerHTML = backpack_for_man['bullets']['ordinaryBullets'];

		document.getElementById('food_gift_id').innerHTML = backpack_for_man['food']['gift_food'];
		document.getElementById('life_id').innerHTML = energe_man;



		document.addEventListener('keydown', move_man_event);

		function move_man_event(e) {
			// if e == undefined : found_move = default = 0 = up
			if (e == undefined) {
				return found_move;
			}
			// if click to arrows	
			if (e.keyCode == 37) { // move to left 37, 65
				found_move = 1;
			} else if (e.keyCode == 38) { // move to top
				found_move = 0;
			} else if (e.keyCode == 39) { // move to  right 
				found_move = 2;
			} else if (e.keyCode == 40) { // move to down
				found_move = 3;
			} else if (e.keyCode == 75) {
				found_move = 4;
			}
			// console.log(e.keyCode);
			return found_move;

		}

		// return function value(0,1,2,3)
		return move_man_event();
	}

	die() {

		matrix[this.y][this.x] = 0;
		for (var i in ManArr) {
			if (this.x == ManArr[i].x && this.y == ManArr[i].y) {
				ManArr.splice(i, 1);
			}
		}
	}


	// shoot man one click one shoot
	shoot() {
		// if click to space then shoot
		document.addEventListener('keydown', shoot_man_event);

		function shoot_man_event(e) {
			var arr = [];
			if (e == undefined) {
				return true;
			}
			if (e, keyCode == 81) {
				if (water_Bullets === true && ordinary_Bullets === false) {
					water_Bullets = false;
					ordinary_Bullets = true;
				}
			} else if (e.keyCode == 69 && ordinary_Bullets === true) {
				if (water_Bullets === false) {
					water_Bullets = true;
					ordinary_Bullets = false;
				}
			} else if (e.keyCode == 32) { // move to down
				if (water_Bullets === true && one_click_shoot === true) {
					one_click_shoot = false;
					Bullets_definitely = true;
					water_Bullets_pcs--;
				}
				if (ordinary_Bullets === true && one_click_shoot === true) {
					one_click_shoot = false;
					Bullets_definitely = true;
					ordinary_Bullets_pcs--;
					console.log(ordinary_Bullets_pcs);
				}
			} else if (e.keyCode == 49 && one_click_shoot_animals === true) {
				one_click_shoot_animals = false;
				Bullets_definitely_animals = true;

				animals_mul = 'grass';
			} else if (e.keyCode == 50 && one_click_shoot_animals === true) {
				one_click_shoot_animals = false;
				Bullets_definitely_animals = true;

				animals_mul = 'grassEater';
			} else if (e.keyCode == 51 && one_click_shoot_animals === true) {
				one_click_shoot_animals = false;
				Bullets_definitely_animals = true;

				animals_mul = 'preadtor';
			}
			// console.log(water_Bullets_pcs);
			// console.log(e.keyCode);
			// return boolean (true or false) permission
			arr.push(ordinary_Bullets);
			arr.push(water_Bullets);
			arr.push(animals_mul);
			return arr;
		}


		// return functioon shoot_man_event(true,false)
		// console.log(shoot_man_event(''));
		return shoot_man_event('');

	}


	mul(sendTo) {
		var
			emptyCord = this.chooseCell(sendTo),
			cord = random(emptyCord);



		var shoot_man = this.shoot();
		// console.log(shoot_man);
		if (cord) {
			var
				x = cord[0],
				y = cord[1];

			if (shoot_man[1] === true) {
				var W_Bullets = new Water_Bullets(x, y, 'water_Bullets', sendTo);
				water_BulletsArr.push(W_Bullets);

				water_Bullets_pcs += backpack_for_man['bullets']['waterBullets'];
				document.getElementById('waterBullets_id').innerHTML = water_Bullets_pcs;
			}
			if (shoot_man[0] === true) {
				var O_Bullets = new Ordinary_Bullets(x, y, 'ordinary_Bullets', sendTo);
				ordinary_BulletsArr.push(O_Bullets);
				ordinary_Bullets_pcs += backpack_for_man['bullets']['ordinaryBullets'];
				document.getElementById('ordinaryBullets_id').innerHTML = ordinary_Bullets_pcs;
			}
			matrix[this.y][this.x] = matrix[y][x];
			matrix[y][x] = this.index;



			// this.multiply = 0;
		}
	}
	mul_animals() {
		var shoot_man = this.shoot(),

			emptyCells_animals = this.chooseCell_animals(0),
			newCell_animals = random(emptyCells_animals);

		if (shoot_man[2] == 'grass') {
			if (newCell_animals) {
				var newX = newCell_animals[0];
				var newY = newCell_animals[1];
				matrix[newY][newX] = 1;
				var newGrass = new Grass(newX, newY, 1)
				grassArr.push(newGrass);
				backpack_for_man['animals']['grass']--;
			}
		} else if (shoot_man[2] == 'grassEater') {
			if (newCell_animals) {
				var newX = newCell_animals[0];
				var newY = newCell_animals[1];
				matrix[newY][newX] = 2;
				var newGrassEater = new GrassEater(newX, newY, 2)
				grassEaterArr.push(newGrassEater);
				backpack_for_man['animals']['GrassEater']--;
			}
		} else if (shoot_man[2] == 'preadtor') {
			if (newCell_animals) {
				var newX = newCell_animals[0];
				var newY = newCell_animals[1];
				matrix[newY][newX] = 3;
				var newPredator = new preadtor(newX, newY, 3)
				wolfArr.push(newPredator);
				backpack_for_man['animals']['preadtor']--;
			}
		}
	}

	move() {
		var emptyCord_move = this.move_event();
		var emptyCord = this.chooseCell(emptyCord_move);
		var shoot_man = this.shoot();
		// console.log(shoot_man[1]);
		one_click_shoot = true;
		one_click_shoot_animals = true;
		var cord = random(emptyCord);
		if (cord) {
			var
				x = cord[0],
				y = cord[1];
			matrix[this.y][this.x] = matrix[y][x];
			matrix[y][x] = this.index;
			this.x = x;
			this.y = y;
		}
		if (shoot_man[1] === true && Bullets_definitely === true && water_Bullets_pcs >= 0) {
			// ete emptyCord_move ==  lini 4-i apa kykangni mardy 
			if (emptyCord_move == 4) {
				emptyCord_move = 0;
			}
			// boolean ete Bullets_definitely == false: apa chikareli krakel hakarak depkum kareli e
			// mul functian bac e toghnum krak isk muli meji argument-y da krakelu ughuceunyn e
			// verevum e (0,1,2,3,4) verevum ka bacatruceuny 
			// nueny takum ugharki urish pampushty
			this.mul(emptyCord_move);

			Bullets_definitely = false;
		}
		if (shoot_man[0] === true && Bullets_definitely === true && ordinary_Bullets_pcs >= 0) {
			if (emptyCord_move == 4) {
				emptyCord_move = 0;
			}
			this.mul(emptyCord_move);
			Bullets_definitely = false;
		}
		if (((shoot_man[2] == 'grass' || shoot_man[2] == 'grassEater' || shoot_man[2] == 'preadtor') && Bullets_definitely_animals === true)) {
			Bullets_definitely_animals = false;
			if (backpack_for_man['animals']['grass'] > 0 && shoot_man[2] == 'grass') {
				this.mul_animals()
			} else if (backpack_for_man['animals']['GrassEater'] > 0 && shoot_man[2] == 'grassEater') {
				this.mul_animals()
			} else if (backpack_for_man['animals']['preadtor'] > 0 && shoot_man[2] == 'preadtor') {
				this.mul_animals()
			}


		}



		// if energe <= 0, Game over
		// ete energe-in hasni 0-i apa xaghy kyverjana
		// energe_man - global
		if (energe_man <= 0) {
			this.die();
			alert('Game Over');

		}

	}
}
// jri krakoc
class Water_Bullets {
	constructor(x, y, index, route) {
		this.x = x;
		this.y = y;
		this.index = index;
		// krakoci ughuceuny skzbnakan
		this.route = route
		this.multiply = 0;
	}

	newDirections() {
		this.directions = [

			[this.x, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x, this.y + 1],

		];
	}
	chooseCell(character_move) {



		this.newDirections()
		var found = [];
		var x = this.directions[character_move][0];
		var y = this.directions[character_move][1];

		if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
			if (matrix[y][x] == 0 || matrix[y][x] == 1) {
				found.push(this.directions[character_move]);
			}
			// spanel 1 -n
			// ete pampushty kpni 'Lava'-in apa kyashxati tvial kody
			if (matrix[y][x] == 'Lava') {



				// nver lavan vochnchacnelu hamar
				var backpack_gift = rand(
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

					backpack_for_man['animals']['grass'] += rand(1, 2, 3, 4, 2, 5, 6, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
					backpack_for_man['animals']['preadtor'] += rand(0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
					backpack_for_man['animals']['GrassEater'] += rand(0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),

					backpack_for_man['bullets']['waterBullets'] += rand(1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
					backpack_for_man['bullets']['ordinaryBullets'] += rand(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),

					backpack_for_man['food']['gift_food'] += rand(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
				);

				// cuec e talis arcunqnery
				// animals



				// 'Lava'-i vra kangneluc ayd lavai teghy darnum e 0
				matrix[y][x] = 0;
				matrix[this.y][this.x] = 0;
				// kangnecnel tvial lavai qaelery
				for (var i in LavaArr) {
					LavaArr.splice(i, 1);
				}
				// pampushti mahy
				this.die();
				this.x = x;
				this.y = y;

			}
		}
		// veradardnum e datark vandaknery
		return found;
	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in water_BulletsArr) {
			if (this.x == water_BulletsArr[i].x && this.y == water_BulletsArr[i].y) {
				water_BulletsArr.splice(i, 1);
				this.multiply = 0;
			}
		}
	}

	shoot() {

		var emptyCord_man_move = this.route;
		this.multiply++;

		var emptyCord = this.chooseCell(emptyCord_man_move);
		// console.log(shoot_man);
		// one_click_shoot = true;

		var cord = random(emptyCord);
		if (cord) {
			var
				x = cord[0],
				y = cord[1];
			matrix[this.y][this.x] = matrix[y][x];
			matrix[y][x] = this.index;
			this.x = x;
			this.y = y;
		}
		// pampushti maximal Ճanapary
		if (this.multiply == 8) {
			this.die();
		}
	}
}
// nuen comentnery verevum
class Ordinary_Bullets {
	constructor(x, y, index, route) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.route = route
		this.multiply = 0;
	}

	newDirections() {
		this.directions = [

			[this.x, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x, this.y + 1],

		];
	}
	chooseCell(character_move) {
		this.newDirections()
		var found = [];
		var x = this.directions[character_move][0];
		var y = this.directions[character_move][1];

		if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
			if (matrix[y][x] == 0 || matrix[y][x] == 1) {
				found.push(this.directions[character_move]);
			}
			// spanel 1 -n
			if (matrix[y][x] == 3) {
				matrix[y][x] = 0;
				matrix[this.y][this.x] = 0;

				for (var i in wolfArr) {
					wolfArr.splice(i, 1);
				}
				this.die();
				this.x = x;
				this.y = y;

			} else if (matrix[y][x] == 2) {
				energe_man--;

				matrix[y][x] = 0;
				matrix[this.y][this.x] = 0;

				for (var i in grassEaterArr) {
					grassEaterArr.splice(i, 1);
				}
				this.die();
				this.x = x;
				this.y = y;

			}
		}
		return found;
	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in ordinary_BulletsArr) {
			if (this.x == ordinary_BulletsArr[i].x && this.y == ordinary_BulletsArr[i].y) {
				ordinary_BulletsArr.splice(i, 1);
				this.multiply = 0;
			}
		}
	}


	shoot() {

		var emptyCord_man_move = this.route;
		this.multiply++;

		var emptyCord = this.chooseCell(emptyCord_man_move);
		// console.log(shoot_man);
		// one_click_shoot = true;

		var cord = random(emptyCord);
		if (cord) {
			var
				x = cord[0],
				y = cord[1];
			matrix[this.y][this.x] = matrix[y][x];
			matrix[y][x] = this.index;
			this.x = x;
			this.y = y;
		}

		if (this.multiply == 3) {
			this.die();
		}
	}
}



class Lava_source {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.multiply = 0;
		// ete dzmer sksvi apa kydarna false :apa elchibazmana lavan
		this.mul_boolean = true;
		this.energe = 10;
	}
	newDirections() {
		this.directions = [

			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]

		];
	}
	chooseCell() {
		this.newDirections()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];

			if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == 0) {
					found.push(this.directions[i]);

				} else if (matrix[y][x] == 1) {
					found.push(this.directions[i]);
					for (var b in grassArr) {
						if (this.x == grassArr[b].x && this.y == grassArr[b].y) {
							grassArr.splice(b, 1);
						}
					}
				} else if (matrix[y][x] == 2) {
					found.push(this.directions[i]);
					for (var b in grassEaterArr) {
						if (this.x == grassEaterArr[b].x && this.y == grassEaterArr[b].y) {
							grassEaterArr.splice(b, 1);
						}
					}
				} else if (matrix[y][x] == 3) {
					found.push(this.directions[i]);
					for (var b in wolfArr) {
						if (this.x == wolfArr[b].x && this.y == wolfArr[b].y) {
							wolfArr.splice(b, 1);
						}
					}
				} else if (matrix[y][x] == 'man') {
					found.push(this.directions[i]);
					for (var b in ManArr) {
						if (this.x == ManArr[b].x && this.y == ManArr[b].y) {
							ManArr.splice(b, 1);
							alert("GAME OVER");
						}
					}
				}
			}



		}
		return found;
	}

	mul() {

		this.multiply++;
		var emptyCells = this.chooseCell();
		var newCell = random(emptyCells);
		if (newCell && this.multiply >= 5) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = this.index;
			var newLava = new Lava(newX, newY, 'Lava');
			LavaArr.push(newLava);
			this.multiply = 0;
		}
	}
}

class Lava {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		// ete eghav true apa karogh e bazmanl
		this.mul_boolean = true;
		// tach mul
		this.mul_boolean_tack = 5;
		this.multiply_tact_weather = 0;
		this.multiply = 0;
	}
	newDirections() {
		this.directions = [

			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],

			[this.x - 1, this.y],
			[this.x + 1, this.y],

			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]

		];
	}



	chooseCell() {
		this.newDirections()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];

			if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == 0) {
					found.push(this.directions[i]);

				} else if (matrix[y][x] == 1) {
					found.push(this.directions[i]);
					for (var b in grassArr) {
						if (this.x == grassArr[b].x && this.y == grassArr[b].y) {
							grassArr.splice(b, 1);
						}
					}
				} else if (matrix[y][x] == 2) {
					found.push(this.directions[i]);
					for (var b in grassEaterArr) {
						if (this.x == grassEaterArr[b].x && this.y == grassEaterArr[b].y) {
							grassEaterArr.splice(b, 1);
						}
					}
				} else if (matrix[y][x] == 3) {
					found.push(this.directions[i]);
					for (var b in wolfArr) {
						if (this.x == wolfArr[b].x && this.y == wolfArr[b].y) {
							wolfArr.splice(b, 1);
						}
					}
				} else if (matrix[y][x] == 'man') {
					found.push(this.directions[i]);
					for (var b in ManArr) {
						if (this.x == ManArr[b].x && this.y == ManArr[b].y) {
							ManArr.splice(b, 1);
							alert("GAME OVER");
						}
					}
				}
			}



		}
		return found;
	}



	mul() {

		this.multiply++;
		var emptyCells = this.chooseCell();
		var newCell = random(emptyCells);
		if (newCell && this.multiply >= 10) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = this.index;
			var newLava = new Lava(newX, newY, this.index);
			LavaArr.push(newLava);
			this.multiply = 0;
		}
	}
}