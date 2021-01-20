import Main from "./Main"
import Home from "./Home"
import Schedule from "./Schedule"
import About from "./About"
import Reservation from "./Reservation"

const Main_page = () => {
    return <Main/>;
}

const Home_page = (props) => {
    return <Home 
                board0={props.board0} url0={props.url0} name0={props.name0}
                board1={props.board1} url1={props.url1} name1={props.name1}
                board2={props.board2} url2={props.url2} name2={props.name2}
            />
}

const Schedule_page = () => {
    return <Schedule/>
}

const About_page = () => {
    return <About/>
}

const Reservation_page = () => {
    return <Reservation/>
}

export { Main_page, Home_page, Schedule_page, About_page, Reservation_page };