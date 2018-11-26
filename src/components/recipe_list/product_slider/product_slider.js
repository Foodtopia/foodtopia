import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./product_slider.scss";
// 引入json檔資料，並取名叫做menus
import menus from "../../recipe_list.json";
import $ from 'jquery';

import Recipe_category from "../../recipe_category/recipe_category"



class Product_slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: menus //設定初始值menus為引入的menus json檔
          }
    }
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div className="p_slider_wrap container d-flex align-items-center">
                    <Route path="recipe_head/recipe_category" component={Recipe_category} />
                        <Link to="/recipe_head/recipe_category">
                            <div className="category_pic">
                                <img src={require("./images/category.jpg")}/>
                            </div>
                        </Link>
                        <div className="category_wrap container">
                            <div className="category_title title1">異國料理</div>
                            <div className="cards d-flex">
                                {this.state.menus.map(menu =>  //menu -> 資料庫名稱
                                    
                                    <div className="p_card">
                                        {/* <Link to='/recipe_page'> */}
                                            <div className="upper_card">
                                                <img className="card_pic" src ={require(`./images/${menu.menu_img}.png`)} alt="" />
                                                <div className="rate title1">4.2</div>
                                            </div>
                                            
                                            <div className="lower_card">
                                                <div className="card_title title2">{menu.menu}</div>
                                                <div className="card_text text ">{menu.Introduction}</div>
                                                <img className="like_btn" src={require("./images/like.svg")}/>
                                                <img className="share_btn" src={require("./images/share.svg")}/>
                                            </div> 
                                        {/* </Link> */}
                                    </div>
                                    
                                )}
                                
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
      }
    //   可以改成CSS3
      componentDidMount = () => {
        // console.log("didMount");
        $('.category_pic').hover(function(){
            $(this).fadeTo(500,0.3)
           },function(){
            $(this).fadeTo(500,1)
           })
      }

    }

export default Product_slider;