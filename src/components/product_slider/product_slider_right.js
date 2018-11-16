import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./product_slider.scss";



class Product_slider_right extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <React.Fragment>
            <div className="p_slider_wrap container d-flex align-items-center">
                <div className="category_wrap container">
                    <div className="category_title title1">異國料理</div>
                    <div className="cards d-flex">
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category_pic">
                    <img src={require("./images/category.jpg")}/>
                </div>
                
                
            </div>
          </React.Fragment>
        );
      }
    }

export default Product_slider_right;