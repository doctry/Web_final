import React, {useState} from "react";
import links from "./links";
import ShowLinks from "./ShowLinks";
import Add_link from "./Add_link";



function Weblink() {
	const [linkBoard, setLinkBoard] = useState(links);
	const [show, setShow] = useState(true);

	const click_whichshow = () => {
		setShow(!show);
	}

	const click_img = (id) => {
		setLinkBoard(linkBoard.filter(item => item.id !== id));
	}

	const last_id = () => {
		if (linkBoard.length === 0) 
			return "0"
		else 
			return linkBoard[linkBoard.length - 1].id
	}

	const add_newlink = (newLink) => {
		let newlinks = linkBoard;
		newlinks.push(newLink)
		setLinkBoard(newlinks)
		click_whichshow()
	}

	return (
		<div className="place_Weblink">
			<h1 className="Weblink_h1">書籤列</h1>
			{show? 
				<h1 className="Weblink_h2" onClick={click_whichshow}>增加連結</h1> : 
				<h1 className="Weblink_h2" onClick={click_whichshow}>返回書籤列</h1>
			}
			{
				show? <ShowLinks linkboard={linkBoard} click_img={click_img}/> : <Add_link last_id={last_id} add_link={add_newlink}/>
			}
		</div>
	);
}

export default Weblink;