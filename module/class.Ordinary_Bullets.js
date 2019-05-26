module.exports = class Ordinary_Bullets {
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
					break;
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
					break;
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
				break;
			}
		}
	}


	shoot() {

		var emptyCord_man_move = this.route;
		this.multiply++;

		var emptyCord = this.chooseCell(emptyCord_man_move);
		// console.log(shoot_man);
		// one_click_shoot = true;

		var cord = Random(emptyCord);
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