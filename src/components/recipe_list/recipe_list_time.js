import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SearchInput, {createFilter} from 'react-search-input';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_list.scss";
import "./search_bar/react_search.scss";
import $ from 'jquery';
// import Head_slider from './head_slider/head_slider.js';
import Recommend from './recommend/recommend.js';
import Day_rank from './rank/day_rank.js';




class Recipe_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe_subs:[],
      recipe_lists:[],
      menus: [],
      searchTerm: '',
      filteredRecipes:[],
      id: this.props.id
    }
    this.searchUpdated = this.searchUpdated.bind(this)
    
  }
  // componentDidMount(){
  //   // 
  // }
  subRecipe_lists = (id) => {
    fetch('http://localhost:3000/api/time/'+id)
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
  keyUp = (evt) => {
    let recipe_lists = this.state.menus.filter(function (product) {
      return product.menu.indexOf(evt.target.value) !== -1;
    });
    this.setState({
      recipe_lists: recipe_lists
    })
  }
  render() {
    let random_rate= (Math.random() * 5)+4;
    let final_rate= random_rate.toFixed(1);
    console.log(this.state.menus) //menu01
    return (
      // <BrowserRouter>
        <React.Fragment>
          <div className="middle_part container d-flex justify-content-center ">
            <Recommend />
            <Day_rank />
          </div>
          <div  className="container d-flex justify-content-center mt-5">
            <Link to="/country" className="category_link col-2">異國料理</Link>
            <Link to="/serving" className="category_link col-2">選擇人數</Link>
            <Link to="/occasion" className="category_link col-2">場合料理</Link>
            <Link to="/difficult" className="category_link col-2">烹飪難度</Link>
            <Link to="/time" className="category_link col-2 link_active">烹調時間</Link>
            
          </div >
          <main className="subCate_nav container d-flex justify-content-center">
            <div className="m-3 sub_link" to="/time/1" onClick={this.on_subRecipe_lists}  key="1" data-recipe_sub="1">15分鐘</div>
            <div className="m-3 sub_link" to="/time/2" onClick={this.on_subRecipe_lists}  key="2" data-recipe_sub="2">30分鐘</div>
            <div className="m-3 sub_link" to="/time/3" onClick={this.on_subRecipe_lists}  key="3" data-recipe_sub="3">45分鐘</div>
            <div className="m-3 sub_link" to="/time/4" onClick={this.on_subRecipe_lists}  key="4" data-recipe_sub="4">60分鐘</div>
          </main>
          {/* <div className="container d-flex justify-content-center mt-5">
            {CategoryList.map((category)=>{
                return <Link className="category_link col-2" to={`/recipe_category/${category.category_id}`}  key={category.category_id}>{category.category}</Link>
            })}         
            
          </div> */}
           <div className="container">
            <SearchInput
                type="text"
                className="form-control search-input"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onFocus={this.searchUpdated}
                onKeyUp = {this.keyUp}
                placeholder="請輸入食譜關鍵字"
                />
          </div>
           {/* 單一食譜 */}
           <div className="category_wrap container">
            <div className="cards d-flex flex-wrap">
              {this.state.recipe_lists.map(recipe_list =>  //menu -> 資料庫名稱
                <div className="p_card">
                    <div className="upper_card">
                      <Link to={`/page/${recipe_list.id}`} >
                        <img className="card_pic" src ={require(`./product_slider/images/${recipe_list.menu_img}.jpg`)} alt="" />
                      </Link>
                        <div className="rate title2">{recipe_list.rating}</div>
                    </div>
                    <div className="lower_card">
                        <div className="recipe_title">{recipe_list.menu}</div>
                        <div className="recipe_text ">{recipe_list.Introduction}</div>
                        <Link to={`/new_blog_member/${recipe_list.member_id}`}className="card_author">作者: {recipe_list.nick_name}</Link>
                        <img className="like_btn1" src={require("./product_slider/images/like.svg")}/>
                        <img className="share_btn1" src={require("./product_slider/images/share.svg")}/>
                        <img className="liked_btn" src={require("./product_slider/images/liked.svg")}/>
                        <img className="shared_btn1" src={require("./product_slider/images/shared.svg")}/>
                    </div> 
                </div> 
              )}
              </div>
            </div>
            {/* 全部食譜 */}
            <div className="all_recipies category_wrap container">
            {/* <div className="c_category_title ">異國料理</div> */}
              <div className="cards d-flex flex-wrap">
                  {this.state.menus.map(menu =>  
                      <div className="p_card">
                          <div className="upper_card">
                          <Link to={`/page/${menu.id}`} >
                            <img className="card_pic" src ={require(`./product_slider/images/${menu.menu_img}`)} alt="" />
                          </Link>
                              <div className="rate title2">{menu.rating}</div>
                          </div>
                          <div className="lower_card">
                              <div className="recipe_title">{menu.menu}</div>
                              <div className="recipe_text">{menu.Introduction}</div>
                              <Link to={`/new_blog_member/${menu.member_id}`} className="card_author">作者: Foodtopia</Link>
                              <img className="like_btn1" src={require("./product_slider/images/like.svg")}/>
                              <img className="share_btn1" src={require("./product_slider/images/share.svg")}/>
                              <img className="liked_btn" src={require("./product_slider/images/liked.svg")}/>
                              <img className="shared_btn1" src={require("./product_slider/images/shared.svg")}/>
                          </div> 
                      </div>
                  )}
              </div>
          </div>

        </React.Fragment>
    );
  }
  searchUpdated (term) {
    this.setState({
      searchTerm: term      
    })
  }
  componentDidMount(){
    // console.log(this.state.menus)
    this.getMenus();
    // window.scrollTo(0, 250);
    $(".category_link").click(function(){
      $(this).css({"border-bottom": "2px solid red", "color": "red", "font-weight": "700"});
    })
    $(".sub_link").click(function(){
      $(".all_recipies").css("display", "none");
    });
  }
  getMenus(){
    fetch("http://localhost:3000/api/recipe")
    .then(res=>res.json())
    .then(menus=>this.setState({
      menus: menus,
      filteredRecipes: menus
    }))
  }
}

export default Recipe_list;