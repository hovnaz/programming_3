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