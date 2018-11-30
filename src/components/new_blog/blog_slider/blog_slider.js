import React, { Component } from "react";
import "./blog_slider.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class New_blog extends Component {
    constructor(props) {
      super(props)
}
    render() {
        return (
            <React.Fragment>
                {/* Header */}
                <div className="background">
                    <img src={require("./img/background1.png")} class="background_img" alt="" />
                </div>
                {/* 歡迎語 */}
                <div className="background_text">
                    <h2>歡迎來到使用者の分享天地</h2>
                    <p>這裡主要都是分享西式料理居多，歡迎大家一起與我一起分享。</p>
                </div>
            </React.Fragment>
        )
    }
}

export default New_blog;