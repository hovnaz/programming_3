//  class Man

module.exports = class Man {
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