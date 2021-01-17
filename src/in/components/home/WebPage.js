function WebPage(props) {
	return (
		<div>
			{console.log(props.board)}
			<h1 className="WebPage_h1">前往: <a href={props.url} target="_blank" className="WebPage_a1">{props.name}</a></h1>
			{props.board.length ?
				<ul className="WebPage_ul">
					{props.board.map((item, index) => {
						return (
							<li key={index} className="WebPage_li">
								<h2 className="WebPage_h2" style={item.color}>{item.type}</h2>
								<a href={item.href} target="_blank" className="WebPage_a2">{item.title}</a>
								<h3 className="WebPage_h3">{item.date}</h3>
							</li>
						)
					})}
				</ul>
			: 	<h2>載入中...</h2>
			}
		</div>
	);
}

export default WebPage;