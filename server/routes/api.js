const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/stock", async (req, res) => {
	let data = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=LM7XGMA9Y0GJNTFF`)
	let array = []
	let arrayX = []
	let arrayY = []
		for(let key in data.data['Time Series (5min)']){
			arrayX.unshift(key)
			arrayY.unshift(data.data['Time Series (5min)'][key]["1. open"])
		}
	array.push(arrayX)
	array.push(arrayY)
	res.send(array)
});

router.get("/chartConnects", async (req, res) => {
	let data = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=SDHC3CQNC5HMM6FY`)
	let array = []
	for(let key in data.data['Time Series (5min)']){
		array.unshift({
			time:key,
			price:data.data['Time Series (5min)'][key]["1. open"],
		})
	}
	res.send(array)

})

module.exports = router;


