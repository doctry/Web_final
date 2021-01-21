import Main from "./Main"
import Home from "./Home"
import Schedule from "./Schedule"
import About from "./About"
import Reservation from "./Reservation"

const MainPage = () => {
    return <Main/>;
}

const HomePage = (props) => {
    return <Home 
                board0={props.board0} url0={props.url0} name0={props.name0}
                board1={props.board1} url1={props.url1} name1={props.name1}
                board2={props.board2} url2={props.url2} name2={props.name2}
            />
}

const SchedulePage = () => {
    return <Schedule/>
}

const AboutPage = () => {
    return <About/>
}

const ReservationPage = () => {
    return <Reservation/>
}

export { MainPage, HomePage, SchedulePage, AboutPage, ReservationPage };