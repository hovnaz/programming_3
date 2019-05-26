module.exports = class preadtor {
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
		 cord = Random(emptyCord);

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
				break;
			}
		}
	}
	mul() {
		var
			emptyCord = this.chooseCell(0),
			cord = Random(emptyCord);
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
			cord = Random(emptyCord);



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
						console.log('GAME OVER');
						game = false;
						if (this.multiply == this.tact_mul) {
							if (this.tact_weather_mul_boolean) {
								this.mul();
							}
							this.bazm = 0;
						}
						break;
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
						break;
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