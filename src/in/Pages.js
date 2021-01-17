import Main from "./Main"
import Home from "./Home"
import Schedule from "./Schedule"
import Contact from "./Contact"
import Reservation from "./Reservation"

const Main_page = () => {
    return <Main/>;
}

const Home_page = (props) => {
    return <Home 
                board0={props.board0} url0={props.url0} name0={props.name0}
                board1={props.board1} url1={props.url1} name1={props.name1}
            />
}

const Schedule_page = () => {
    return <Schedule/>
}

const Contact_page = () => {
    return <Contact/>
}

const Reservation_page = () => {
    return <Reservation/>
}

export { Main_page, Home_page, Schedule_page, Contact_page, Reservation_page };