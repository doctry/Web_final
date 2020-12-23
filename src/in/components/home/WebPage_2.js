import React, { useState } from "react";
const request = require("request");
const cheerio = require('cheerio');

const myurl = "https://osa_activity.ntu.edu.tw/board/index/tab/10";

function WebPage_2() {
	const [board, setBoard] = useState([{
		"type": "置頂公告",
		"href": "https://larrylu.blog/nodejs-request-cheerio-weather-414e33f45c7d",
		"title": 666666,
		"color": {backgroundColor: "gray"},
		"date": "YYYY-MM--DD"
	},
	{
		"type": "社團資訊",
		"href": "https://larrylu.blog/nodejs-request-cheerio-weather-414e33f45c7d",
		"title": 666666,
		"color": {backgroundColor: "green"},
		"date": "YYYY-MM--DD"
	}]);
	const [stop, setStop] = useState(false);

	var interval = setTimeout(() => {request({
		url: "https://cors-anywhere.herokuapp.com/" + myurl,
		method: "GET"
		}, function(error, response, body) {
			if (error || !body) {
				console.log("Pien~ QQ");
			} else {
				console.log("Yabi~ HA↑ HA↓ HA↑ HA↓");
				let store = [];
				const $ = cheerio.load(body);
				$(".col-md-12 ul .normal-item").each(function(i, elem) {
					let n = elem.children[3].children[1].children[0].data.length;
					let nn = elem.children[7].children[2].data.length;
					if (elem.children[1].children[0].data === "社團資訊")
						store.push({
							"type": "社團資訊",
							"href": elem.children[3].children[1].attribs.href,
							"title": elem.children[3].children[1].children[0].data.substring(41, n - 36),
							"color": {backgroundColor: "green"},
							"date": elem.children[7].children[2].data.substring(37, nn - 32)
						});
					else
						store.push({
							"type": "置頂公告",
							"href": elem.children[3].children[1].attribs.href,
							"title": elem.children[3].children[1].children[0].data.substring(41, n - 36),
							"color": {backgroundColor: "gray"},
							"date": elem.children[7].children[2].data.substring(37, nn - 32)
						});
				})
				setBoard(store);
				setStop(true);
				console.log(store)
			}
		}
	)}, 100);

	if (stop) {
		console.log("stop getting");
		clearTimeout(interval);
	};

	return (
		<div>
			<h1 className="WebPage_h1">click here to: <a href={myurl} target="_blank" className="WebPage_a1">台大社團資訊</a></h1>
			<ul className="WebPage_ul">
				{board.map((item, index) => {
					return (
						<li key={index} className="WebPage_li">
							<h2 className="WebPage_h2" style={item.color}>{item.type}</h2>
							<a href={item.href} target="_blank" className="WebPage_a2">{item.title}</a>
							<h3 className="WebPage_h3">{item.date}</h3>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default WebPage_2;