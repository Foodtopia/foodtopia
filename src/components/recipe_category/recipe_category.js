import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./recipe_category.scss";
// import menus from "../recipe.json";

// import Head_slider from '../head_slider/head_slider.js';
// import InfiniteScroll from 'react-infinite-scroller';
import React_search from '../recipe_list/search_bar/react-search';




class Recipe_category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // menus: menus //設定初始值menus為引入的menus json檔
            menus: []
          }
    }
    
  render() {
    return (
    //   <BrowserRouter>
        <React.Fragment>

        <React_search/> 
        <div className="category_wrap container">
            <div className="c_category_title ">中式料理</div>
            <div className="cards d-flex flex-wrap">
                {this.state.menus.map(menu =>  
                    <div className="p_card">
                        <div className="upper_card">
                            <img className="card_pic" src ={require(`../recipe_list/product_slider/images/${menu.menu_img}.jpg`)} alt="" />
                            <div className="rate title2">4.2</div>
                        </div>
                        <div className="lower_card">
                            <div className="card_title title2">{menu.menu}</div>
                            <div className="card_text text ">{menu.Introduction}</div>
                            <img className="like_btn" src={require("./images/like.svg")}/>
                            <img className="share_btn" src={require("./images/share.svg")}/>
                        </div> 
                    </div>
                )}
                
            </div>
        </div> 
          
        </React.Fragment>
    //   </BrowserRouter>
    );
  }
  componentDidMount(){
    // let id = this.props.match.params.id

    this.getMenus();
  }
  //call restful api
  getMenus(){
    fetch("http://localhost:3000/api/recipe/")
    .then(res=>res.json())
    .then(menus => this.setState({
        menus: menus
    }))
  }
}

export default Recipe_category;