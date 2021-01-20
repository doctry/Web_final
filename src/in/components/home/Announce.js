import React, { useState } from "react";
import WebPage from "./WebPage";	


function Announce(props) {
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
			<div className="Announce_div">
				<button className="Announce_button" onClick={show_page1}>經費補助</button> 
				<button className="Announce_button" onClick={show_page2}>社團資訊</button> 
				<button className="Announce_button" onClick={show_page3}>學生活動管理處</button>
			</div>
			{
				showPage1? 
					<WebPage board={props.board0} url={props.url0} name={props.name0}/> 
					: showPage0 ? 
						<WebPage board={props.board1} url={props.url1} name={props.name1}/>
						: <WebPage board={props.board2} url={props.url2} name={props.name2}/>
			}
		</div>
	);
}

export default Announce;