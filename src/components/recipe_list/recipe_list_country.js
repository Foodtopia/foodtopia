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
  componentWillMount(){
    window.scrollTo(0, 400);
  }
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
    // console.log(this.state)
  }

  // 抓單一食譜
  subRecipe_lists = (id) => {
    fetch('http://localhost:3000/api/country/'+id)
        .then(res=>res.json())
        .then(recipe_lists=>{
            // console.log(recipe_lists)
            this.setState({
                recipe_lists: recipe_lists
            })
        })
  }
  on_subRecipe_lists =(evt) =>{
      var id = evt.target.dataset.recipe_sub
      this.subRecipe_lists(id);
  }

  // 搜尋功能
  keyUp = (evt) => {
    let recipe_lists = this.state.menus.filter(function (product) {
      return product.menu.indexOf(evt.target.value) !== -1;
    });
    this.setState({
      recipe_lists: recipe_lists
    })
  }

  //確認收藏
  getConfirmLove =(id)=>{
    fetch("http://localhost:3000/love/love/"+id, {  
      method: 'GET',
      mode:"cors",
      credentials: 'include',})
      .then(res => res.json())
      .then(function(confirmloves){
        if(!confirmloves.length){
          $(`.liked_btn${id}`).removeClass("open_liked");
        }else{
          $(`.liked_btn${id}`).addClass("open_liked");
        }
    })
  }
  //加入收藏
  getLove =(evt)=>{
    evt.preventDefault();
    var id= evt.target.dataset.menuid
    console.log(id)
    fetch("http://localhost:3000/love/love", {  
      method: 'POST',
      mode:"cors",
      credentials: 'include',
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
      body: JSON.stringify({recipe_id: id}) 
    })
    .then(res => res.json())
    // .then(this.getConfirmLove(this.state.recipe_id))
    
    // console.log(id)
  }
  
  render(evt) {
    let random_rate= (Math.random() * 5)+4;
    let final_rate= random_rate.toFixed(1);
    let random_author=Math.floor((Math.random() * 3)+2);
    let author=['Yvonne','Wilson','Brain','A-Ming'];
    // console.log(random_author)
    
    // console.log(id)
    return (
        <React.Fragment>
          <div className="middle_part container d-flex justify-content-center ">
            <Recommend />
            <Day_rank />
          </div>
          <div  className="container d-flex justify-content-center mt-5">
            <Link to="/country" className="category_link col-2 link_active">異國料理</Link>
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
          
          {/* <React_search/> */}
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
              {this.state.recipe_lists.map(recipe_list =>
                <div className="p_card">
                    <div className="upper_card">
                    <Link to={`/page/${recipe_list.id}`} >
                        <img className="card_pic" src ={(`http://localhost:3000/upload/${recipe_list.menu_img}`)} alt="" />
                    </Link>
                        <div className="rate title2">{recipe_list.rating}</div>
                    </div>
                    <div className="lower_card">
                        <div className="recipe_title">{recipe_list.menu}</div>
                        <div className="recipe_text ">{recipe_list.Introduction}</div>
                         <div className="card_bottom d-flex  ">
                          <Link to={`/new_blog_member/${recipe_list.member_id}`} className="card_author">作者: {recipe_list.nick_name}</Link>
                          {/* 收藏 */}
                          <div onClick={this.getLove} className="like_wrap" data-menuid={recipe_list.id} >
                            {/* <div id="likeeed"> */}
                              <img className="like_btn1" src={require("./product_slider/images/like.svg")} data-menuid={recipe_list.id}/>
                              <img className={`liked_btn${recipe_list.id} liked_btn`} src={require("./product_slider/images/liked.svg")} data-menuid={recipe_list.id}/>
                            {/* </div> */}
                          </div>
                          <img className="share_btn1" src={require("./product_slider/images/share.svg")}/>
                          <img className="shared_btn1" src={require("./product_slider/images/shared.svg")}/>
                        </div>
                    </div> 
                </div> 
              )}
              </div>
            </div>
            {/* 全部食譜 */}
            <div className="all_recipies category_wrap container">
              {/* <div className="c_category_title ">全部料理</div> */}
              <div className="cards d-flex flex-wrap">
                  {this.state.menus.map(menu => 
                      <div className="p_card">
                        {this.getConfirmLove(menu.id)}
                          <div className="upper_card">
                          <Link to={`/page/${menu.id}`} >
                            <img className="card_pic" src ={(`http://localhost:3000/upload/${menu.menu_img}`)} alt="" />
                          </Link>
                              <div className="rate title2">{menu.rating}</div>
                          </div>
                          <div className="lower_card">
                              <div className="recipe_title">{menu.menu}</div>
                              <div className="recipe_text">{menu.Introduction}</div>
                              
                              <div className="card_bottom d-flex  ">
                                <Link to={`/new_blog_member/${menu.member_id}`} className="card_author">作者: Foodtopia</Link>
                                {/* 收藏 */}
                                <div onClick={this.getLove} className="like_wrap" data-menuid={menu.id} >
                                  {/* <div id="likeeed"> */}
                                    <img className="like_btn1" src={require("./product_slider/images/like.svg")} data-menuid={menu.id}/>
                                    <img className={`liked_btn${menu.id} liked_btn`} src={require("./product_slider/images/liked.svg")} data-menuid={menu.id}/>
                                  {/* </div> */}
                                </div>
                                <img className="share_btn1" src={require("./product_slider/images/share.svg")}/>
                                <img className="shared_btn1" src={require("./product_slider/images/shared.svg")}/>
                              </div>
                          </div> 
                      </div>
                  )}
                </div>
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
  searchUpdated (term) {
    this.setState({
      searchTerm: term      
    })
  }
  componentDidMount(){
    // window.scrollTo(0, 100);
    // this.getCountry_subs();
    this.getMenus();

    //食譜單筆資料
    let id = this.props.match.params.id
    this.setState({recipe_id:this.props.match.params.id})
    this.getConfirmLove();
    // console.log(id)

    // 收藏
    // $("liked_btn").on("click",function(){
    //   // $(this).toggleClass("open_liked");
    //   // console.log(this)
    //   alert('hi liked w r u!!!')
    // });
    $(document).ready(function(){
      $(".liked_btn").click(function(){
      // alert("add to love list!");
      $(this).toggleClass("open_liked");
     });
    });
    
    //食譜隱藏
    $(".category_link").click(function(){
      $(this).css({"border-bottom": "2px solid #FF4343", "color": "#FF4343", "font-weight": "700"});
    })
    $(".sub_link").click(function(){
      $(".all_recipies").css("display", "none");
    });
    
  }

  //call restful api
  getMenus(){
    fetch("http://localhost:3000/api/recipe")
    .then(res=>res.json())
    .then(menus => this.setState({
        menus: menus,
        filteredRecipes: menus
    }))
  }
}

export default Recipe_list;