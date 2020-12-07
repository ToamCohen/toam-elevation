class Chart {
	constructor() {
		this.matrix = [];
		this.releventData = [];
		this.matrixRows = [];
		this.matrixCols = [];
	}
	async matrixFunction() {
		let data = await $.get("/chartConnects");
		this.releventData.push(...data);
		console.log(this.releventData)
	}

	async fetchData() {
		let data = await $.get("/stock");
		let rowsNum = this.findLargeNumber(data) / 5;
		rowsNum = Math.round(rowsNum);
		let sum = 0;

		$("body").append(style.body());
		$("#chart-mega-container").append(style.chartMegaContainerChartContainer());
		for (let i = 0; i < 6; i++) {
			$("#chart-container").append(style.chartContainerContent(sum));
			$("#chart-container").append(style.chartContainerMainContainer(rowsNum));
			sum += rowsNum;
		}
		$("#chart-mega-container").append(style.chartMegaContainer_Y_Line());
		for (let i = 0; i < 12; i++) {
			$("#y-line").append(style.Y_LineSpen(data[1][i]));
			// array[i] = data[0][i];
		}
		// this.matrixFunction(rowsNum, this.matrixCols.length);
	}

	findLargeNumber(data) {
		let largNumber = 0;
		for (let i = 0; i < data[0].length; i++) {
			if (largNumber < data[0][i]) {
				largNumber = data[0][i];
			}
		}
		return largNumber;
	}
}

const chart = new Chart();
chart.matrixFunction()
// chart.fetchData();

class Style {
	body() {
		return `<div id="chart-mega-container"></div>`;
	}

	chartMegaContainerChartContainer() {
		return `<div id="chart-container" style="display:grid; grid-template-columns:2% 98%; grid-template-rows: repeat(2 ,1fr);"></div>`;
	}

	chartContainerContent(sum) {
		return `<div class="content" style=" display:grid; justify-content: center; align-content: center; height:4em;  center; background-color: rgba(54,113,114,0.4); ">${sum}</div>`;
	}

	chartContainerMainContainer(rowsNum) {
		return `<div id="main-container" style="display:grid;  grid-template-columns:repeat(12,1fr); grid-template-rows:repeat(${rowsNum},1fr);" ></div>`;
	}

	chartMegaContainer_Y_Line() {
		return `<div id="y-line" style="display:grid; grid-template-columns:repeat(12,1fr); background-color: rgba(54,113,114,0.4); width:98%; float: right;"></div>`;
	}

	Y_LineSpen(data) {
		return `<span style="text-align:center">${data}</span>`;
	}
}

const style = new Style();


