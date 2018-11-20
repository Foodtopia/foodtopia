import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./product_slider.scss";



class Product_slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
          }
    }
    render() {
        return (
          <React.Fragment>
            <div className="p_slider_wrap container d-flex align-items-center">
                <div className="category_pic">
                    <img src={require("./images/category.jpg")}/>
                </div>
                <div className="category_wrap container">
                    <div className="category_title title1">異國料理</div>
                    <div className="cards d-flex">
                        {/* {this.state.menus.map(menu =>  //menu -> 資料庫名稱
                            <div className="p_card">
                                <div className="upper_card">
                                    <img className="card_pic" src ={require(`./images/${menu.menu_img}.jpg`)} alt="" />
                                    <div className="rate title1">4.2</div>
                                </div>
                                <div className="lower_card">
                                    <div className="card_title title2">{menu.menu}</div>
                                    <div className="card_text text">{menu.Introduction}</div>
                                    <img className="like_btn" src={require("./images/like.svg")}/>
                                    <img className="share_btn" src={require("./images/share.svg")}/>
                                </div>
                            </div>
                        )} */}
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
                
                
                
            </div>
          </React.Fragment>
        );
      }
    }

export default Product_slider;