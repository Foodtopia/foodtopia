import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_list.scss";

// import Head_slider from './head_slider/head_slider.js';
import Recommend from './recommend/recommend.js';
import Day_rank from './rank/day_rank.js';
import Product_slider from './product_slider/product_slider.js';
import Product_slider_right from './product_slider/product_slider_right.js';
// import Search_bar from './search_bar/search_bar';
import Recipe_page from '../recipe_page/recipe_page.js';
import Recipe_category from "../recipe_category/recipe_category"
import SimpleSlider from '../SimpleSlider/simpleSlider';



class Recipe_list extends Component {
  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>
          {/* <div className="fadeIn head_slider">
            <Head_slider />   
          </div>
          <div className="search_bar">
            <Search_bar />
          </div> */}
          {/* <Route path="recipe_head/recipe_category" component={Recipe_category} /> */}
          {/* <Route path="/recipe_page" component={Recipe_page} /> */}
          <div className="middle_section container d-flex justify-content-center ">
          {/* <Link to="/recipe_page"> */}
            <Recommend />
            
          {/* </Link> */}
            <Day_rank />
          </div>
          <div className="product_slider">
            <Product_slider/>
          </div>
          <div className="product_slider">
            <Product_slider_right/>
          </div>
          <div className="product_slider">
            <Product_slider/>
          
          </div>
          {/* <SimpleSlider/> */}
        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Recipe_list;