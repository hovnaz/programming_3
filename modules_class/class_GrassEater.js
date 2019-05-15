module.exports = class GrassEater {
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

		];random
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