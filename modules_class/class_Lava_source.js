module.exports = class Lava_source {
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