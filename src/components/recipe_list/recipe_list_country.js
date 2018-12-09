import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_list.scss";

// import Head_slider from './head_slider/head_slider.js';
import Recommend from './recommend/recommend.js';
import Day_rank from './rank/day_rank.js';
import Product_slider from './recipe_filter/recipe_list_country/product_slider.js';
import Product_slider_right from './recipe_filter/recipe_list_country/product_slider_right.js';
import Product_slider_buttom from './recipe_filter/recipe_list_country/product_slider_buttom.js';
// import Search_bar from './search_bar/search_bar';
import Recipe_page from '../recipe_page/recipe_page.js';
import Recipe_category from "../recipe_category/recipe_category"
import SimpleSlider from '../SimpleSlider/simpleSlider';
import CategoryList from './search_bar/category.json';



class Recipe_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe_subs:[],
      recipe_lists:[],
      id: this.props.id
    }
    console.log(this.state)
  }

  subRecipe_lists = (id) => {
    fetch('http://localhost:3000/api/country/'+id)
        .then(res=>res.json())
        .then(recipe_lists=>{
            console.log(recipe_lists)
            this.setState({
                recipe_lists: recipe_lists
            })
        })
  }
  on_subRecipe_lists =(evt) =>{
      var id = evt.target.dataset.recipe_sub
      this.subRecipe_lists(id);
  }
  
  render() {
    let random_rate= (Math.random() * 5)+4;
    let final_rate= random_rate.toFixed(1);
    
    return (
      // <BrowserRouter>
        <React.Fragment>
          <div className="middle_part container d-flex justify-content-center ">
            <Recommend />
            <Day_rank />
          </div>
          <div  className="container d-flex justify-content-center mt-5">
            <Link to="/country" className="category_link col-2" >異國料理</Link>
            <Link to="/serving" className="category_link col-2" >選擇人數</Link>
            <Link to="/occasion" className="category_link col-2" >場合料理</Link>
            <Link to="/difficult" className="category_link col-2" >烹飪難度</Link>
            <Link to="/time" className="category_link col-2" >烹調時間</Link>
            
          </div >
          {/* {this.state.recipe_subs.map(recipe_sub=>
                <div className="category_link col-2" key={recipe_sub.id} data-recipe_sub={recipe_sub.id} onClick={this.on_subRecipe_lists}>{recipe_sub.category}</div>
            )} */}
          <main className="subCate_nav container d-flex justify-content-center">
            <div className="m-3 sub_link" to="/country/1" onClick={this.on_subRecipe_lists}  key="1" data-recipe_sub="1">日韓料理</div>
            <div className="m-3 sub_link" to="/country/2" onClick={this.on_subRecipe_lists}  key="2" data-recipe_sub="2">中式料理</div>
            <div className="m-3 sub_link" to="/country/3" onClick={this.on_subRecipe_lists}  key="3" data-recipe_sub="3">台灣料理</div>
            <div className="m-3 sub_link" to="/country/4" onClick={this.on_subRecipe_lists}  key="4" data-recipe_sub="4">西式料理</div>
            <div className="m-3 sub_link" to="/country/5" onClick={this.on_subRecipe_lists}  key="5" data-recipe_sub="5">東南亞料理</div>
          </main> 
          
          {/* 單一食譜 */}
          <div className="subRecipes_wrap container d-flex flex-wrap">
            {this.state.recipe_lists.map(recipe_list =>  //menu -> 資料庫名稱

                <div className="p_card">
                    <div className="upper_card">
                        <img className="card_pic" src ={require(`./product_slider/images/${recipe_list.menu_img}.jpg`)} alt="" />
                        <div className="rate title1">{final_rate}</div>
                    </div>
                    <div className="lower_card">
                        <div className="card_title title2">{recipe_list.menu}</div>
                        <div className="card_text text ">{recipe_list.Introduction}</div>
                        <img className="like_btn" src={require("./product_slider/images/like.svg")}/>
                        <img className="share_btn" src={require("./product_slider/images/share.svg")}/>
                    </div> 
                </div> 
            )}
            </div>
          
          {/* <div className="product_slider">
            <Product_slider/>
          </div>
          <div className="product_slider">
            <Product_slider_right/>
          </div>
          <div className="product_slider">
            <Product_slider_buttom/>
          
          </div> */}
          {/* <SimpleSlider/> */}
        </React.Fragment>
    );
  }
  componentDidMount(){
    // window.scrollTo(0, 400);
    // this.getCountry_subs();
  }
  // getCountry_subs(){
  //   fetch("http://localhost:3000/api/country/:id")
  //   .then(res=>res.json())
  //   .then(console.log(this.state.recipe_subs))
  //   .then(recipe_subs => this.setState({
  //     recipe_subs: recipe_subs
  //   }))
  // }
}

export default Recipe_list;