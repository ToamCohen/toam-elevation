class Model {
	constructor() {
		this.matrix = [];
		this.largeAndMin = {};
	}

	creatMatrix(rowNum, colNum) {
		for (let i = 0; i < rowNum; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < colNum; j++) {
				this.matrix[i][j] = "";
			}
		}
		console.log(this.matrix);
		return this.matrix;
	}

	findLageAndMinNumber(releventData) {
		this.largeAndMin.min = Math.min(...releventData);
		this.largeAndMin.max = Math.max(...releventData);
		return this.largeAndMin;
	}

	
}
						
const model = new Model();

// model.creatMatrix(25, 12);
const array = [1, 2, 3];
model.findLageAndMinNumber(array);
console.log(model.largeAndMin);

