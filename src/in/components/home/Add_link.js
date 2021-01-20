import React, {useState} from "react";


function Addlink(props) {

    const click_enter = () => {
        let text0 = document.getElementById("link_input0").value;
        let text1 = document.getElementById("link_input1").value;
        if (text0 === "")
            alert("Name has not been input");
        else if (text1 === "")
            alert("Hyperlink has not been input");
        else {
            props.add_link({title: text0, href: text1, link_id:"link_ "+ (Number(props.last_id().substring(5)) + 1).toString()})
        }
    }

	return (
		<ul>
			<li key="link_list0" className="Add_link_li">
                <h1 className="">{"連結名稱: "}</h1>
                <input id="link_input0" type="text" placeholder="連結名稱" />
            </li>
			<li key="link_list1" className="Add_link_li">
                <h1 className="">{"超連結: "}</h1>
                <input id="link_input1" type="text" placeholder="網址" />
            </li>
            <button className="Add_link_button" onClick={click_enter}>輸入</button>
		</ul>
	);
}

export default Addlink;