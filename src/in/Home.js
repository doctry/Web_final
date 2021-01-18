import Announce from "./components/home/Announce"
import Weblink from "./components/home/Weblink"

import "./Home.css"

function Home(props) {
    return (
        <div className="home">
            <Announce 
                board0={props.board0} url0={props.url0} name0={props.name0}
                board1={props.board1} url1={props.url1} name1={props.name1}
                board2={props.board2} url2={props.url2} name2={props.name2}
            />
            <Weblink />
        </div>
    );
}

export default Home