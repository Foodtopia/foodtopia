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
          <main className="head_bg">
            <header className=" container d-flex">
                <img className="main_pic" src={require('./images/western_2_main.jpg')}/>
                <div className="main_text">
                    <h1>大蒜奶油沙朗牛排佐帕瑪森起司馬鈴薯</h1>
                    <h4>大蒜、香草、奶油溶入牛排中，帶出豐富有層次的口感，這種晚餐將會是一種享受。</h4>
                    <div className="cook_info_wrap d-flex">
                        <div className="cook_info ">
                            <img className="info_icon time" src={require('./images/clock.svg')}/>
                            <h3>40min</h3>
                        </div>
                        <div className=" cook_info ">
                            <img className="info_icon level" src={require('./images/chef.svg')}/>
                            <h3>容易</h3>
                        </div>
                        <div className=" cook_info ">
                            <img className="info_icon portion" src={require('./images/dinner.svg')}/>
                            <h3>2人份</h3>
                        </div>
                    </div>
                </div>
            </header>
          </main>

          <main className="ingredients_wrap">
            <h1>所需食材</h1>
            {/* <span >共2人份</span> */}
            <div className="ingredients">
              <div className="ingredient d-flex">
                <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                <div className="i_text">
                  <h5 className="i_name">花椰菜</h5>
                  <p className="i_qty"> 180克</p>
                </div>
              </div>
            </div>

          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Recipe_page;