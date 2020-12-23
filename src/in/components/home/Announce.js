import React, { useState } from "react";
import WebPage_1 from "./WebPage_1";	// 經費補助
import WebPage_2 from "./WebPage_2";	// 社團資訊


function Announce() {
	const [showPage1, setShowPage1] = useState(true);
	const [showPage0, setShowPage0] = useState(false);

	const show_page1 = () => {
		setShowPage1(true);
		setShowPage0(false);
	}

	const show_page2 = () => {
		setShowPage1(false);
		setShowPage0(true);
	}

	const show_page3 = () => {
		setShowPage1(false);
		setShowPage0(false);
	}
	
	return (
		<div className="place_Announce">
			<h1 className="Announce_h1">
				<button className="Announce_button" onClick={show_page1}>經費補助</button> 
				<button className="Announce_button" onClick={show_page2}>社團資訊</button> 
				<button className="Announce_button" onClick={show_page3}>我想一下</button>
			</h1>
			{
				showPage1? <WebPage_1 /> : showPage0 ? <WebPage_2 /> : <WebPage_1 />
			}
		</div>
	);
}

export default Announce;