import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_head.scss";

import Head_slider from '../recipe_list/head_slider/head_slider.js';
import Search_bar from '../recipe_list/search_bar/search_bar';
// import Recipe_page from './recipe_page/recipe_page.js';



class Recipe_head extends Component {
  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>
          <div className="fadeIn head_slider">
            <Head_slider />   
          </div>
          <div className="search_bar">
            <Search_bar />
          </div>
          
          
        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Recipe_head;