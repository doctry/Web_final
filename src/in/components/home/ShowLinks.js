import React from "react";
import X from "./img/x.png";


function ShowLints(props) {
	return (
		<div className="showlink">
			<ul className="Weblink_ul">
				{props.linkboard.map((item, index) => {
					return (
						<li key={index} className="Weblink_li">
							<a href={item.href} target="_blank" className="Weblink_a">{item.title}</a>
							<img src={X} alt="Delete" className="Weblink-x" onClick={() => {}} />
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default ShowLints;