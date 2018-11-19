import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_page.scss";




class Recipe_page extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="head_bg">
            <div className="container d-flex">
                <img className="main_pic" src={require('./images/western_2_main.jpg')}/>
                <div className="main_text">
                    <h1>大蒜奶油沙朗牛排佐帕瑪森起司馬鈴薯</h1>
                    <h4>大蒜、香草、奶油溶入牛排中，帶出豐富有層次的口感，這種晚餐將會是一種享受。</h4>
                    <div className="cook_info_wrap d-flex">
                        <div className="cook_info ">
                            <img className="time " src={require('./images/clock.svg')}/>
                            {/* <p>40min</p> */}
                        </div>
                        <div className="cook_info level"></div>
                        <div className="cook_info portion"></div>
                    </div>
                    


                </div>


            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Recipe_page;