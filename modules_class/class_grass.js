module.exports = class Grass {
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