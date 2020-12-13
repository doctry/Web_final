import React, { useState } from "react";

function CreateItem(props) {
	return (
		<li key={props.id} className="create_item__item">
			<h1 className="create_item-detail">{props.item + " "}</h1>
			<input id = {props.id} type="text" placeholder={props.inner_text} />
		</li>
	);
}

export default CreateItem;