import React, { Component } from 'react';
import { Row, Col } from "antd"
import "./About.css"
import department from "./components/img/about_us.png"

class About extends Component {
    render () {
        return (
        <div className="about-us">
            <div className="department">
                <img src={department} alt="department"/>
                <p>我們是一群電機系的夥伴</p>
                <p>在這裡共同打造 一個屬於自己的天地</p>
            </div>

            <div className="author">
                <div>
                    Author 1
                </div>
                <div>Author 2</div>
                <div>Author 3</div>
            </div>
        </div>
        );
    }
}

export default About;