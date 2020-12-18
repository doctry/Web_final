import React, {useState} from "react";
import links from "./links";
import X from "./img/x.png";
import ShowLinks from "./ShowLinks";



function Weblink() {
	const [linkBoard, setLinkBoard] = useState(links);
	const [show, setShow] = useState(true);

	const click_whichshow = () => {
		setShow(!show);
	}

	return (
		<div className="place_Weblink">
			<h1 className="Weblink_h1">Weblinks</h1>
			{show? 
				<h1 className="Weblink_h2" onClick={click_whichshow}>add link</h1> : 
				<h1 className="Weblink_h2" onClick={click_whichshow}>return</h1>
			}
			{show? <ShowLinks linkboard={linkBoard}/> : <h1 className="Weblink_h1">Weblinks</h1>}
		</div>
	);
}

export default Weblink;