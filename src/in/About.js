import React, { Component } from 'react';
import "./About.css"
import department from "./components/img/about_us.png"

class About extends Component {
    render () {
        return (
        <div className="about-us">
            <section className="department">
                <img src={department} alt="department"/>
                <p>我們是一群電機系的夥伴</p>
                <p>在這裡共同打造 一個屬於自己的天地</p>
                
            </section>
        </div>
        );
    }
}

export default About;