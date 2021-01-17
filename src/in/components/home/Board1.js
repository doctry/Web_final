const request = require("request");
const cheerio = require('cheerio');

const url_1 = "https://osa_activity.ntu.edu.tw/board/index/tab/10";

function Board1(setBoard) {
    request({
        url: "https://cors-anywhere.herokuapp.com/" + url_1,
        method: "GET"
        }, function(error, response, body) {
            if (error || !body) {
                console.log("Board1 Pien~ QQ");
            } else {
                console.log("Board1 Yabi~ HA↑ HA↓ HA↑ HA↓");
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
                setBoard(store)
                console.log(store)
            }
        }
    );
}

export {Board1, url_1};