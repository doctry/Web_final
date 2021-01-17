const request = require("request");
const cheerio = require('cheerio');

const url_2 = "http://www.active.ntu.edu.tw/board/index/tab/0";

function Board2(setBoard) {
    request({
        url: "https://cors-anywhere.herokuapp.com/" + url_2,
        method: "GET"
        }, function(error, response, body) {
            if (error || !body) {
                console.log("Board2 Pien~ QQ");
            } else {
                console.log("Board2 Yabi~ HA↑ HA↓ HA↑ HA↓");
                let store = [];
				const $ = cheerio.load(body);
				$(".main ul .announcement-item").each(function(i, elem) {
					let n = elem.children[1].children[2].data.length;
                    store.push({
                        "type": "學務處",
                        "href": elem.children[3].children[1].attribs.href,
                        "title": elem.children[3].children[1].children[0].data,
                        "color": {backgroundColor: "purple"},
                        "date": elem.children[1].children[2].data.substring(39, n - 34)
                    });
                })
                setBoard(store)
                console.log(store)
            }
        }
    );
}

export {Board2, url_2};