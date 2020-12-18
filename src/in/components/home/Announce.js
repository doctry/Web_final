import React, { useState } from "react";
const request = require("request");
const cheerio = require('cheerio');
const CrawlingWeb = require('./CrawlingWeb.js');

const myurl = "https://osa_activity.ntu.edu.tw/board/index/tab/13";

function Announce() {
	const [board, setBoard] = useState([{
		"type": "置頂公告",
		"href": "https://larrylu.blog/nodejs-request-cheerio-weather-414e33f45c7d",
		"title": 666666,
		"color": {backgroundColor: "gray"},
		"date": "YYYY-MM--DD"
	},
	{
		"type": "經費補助",
		"href": "https://larrylu.blog/nodejs-request-cheerio-weather-414e33f45c7d",
		"title": 666666,
		"color": {backgroundColor: "red"},
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
					if (elem.children[1].children[0].data === "經費補助")
						store.push({
							"type": "經費補助",
							"href": elem.children[3].children[1].attribs.href,
							"title": elem.children[3].children[1].children[0].data.substring(41, n - 36),
							"color": {backgroundColor: "red"},
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
		<div className="place_Announce">
			<h1 className="Announce_h1">click here to: <a href={myurl} target="_blank" className="Announce_a1">台大社團經費補助</a></h1>
			<ul className="Announce_ul">
				{board.map((item, index) => {
					return (
						<li key={index} className="Announce_li">
							<h2 className="Announce_h2" style={item.color}>{item.type}</h2>
							<a href={item.href} target="_blank" className="Announce_a2">{item.title}</a>
							<h3 className="Announce_h3">{item.date}</h3>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default Announce;