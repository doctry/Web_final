import React, { Component } from 'react';
import { Col } from "antd"
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

            <div className="author-list">
                <Col className="author" xs={{ span: 5, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                    <h1>吳建翰</h1>
                </Col>
                <Col className="author" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <h1>楊千毅</h1>
                </Col>
                <Col className="author" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <h1>趙彥安</h1>
                </Col>
            </div>
        </div>
        );
    }
}

export default About;