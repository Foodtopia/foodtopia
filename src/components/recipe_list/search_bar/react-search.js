import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'

import recipes from './recipe_data'
import "./react_search.scss";
import { isThisSecond } from 'date-fns';
// import menus from "../../recipe.json";



class React_search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      menus: [],
      filteredRecipes:[]  
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  keyUp = (evt) => {
    //alert(evt.target.value)
   // console.log(this.state.menus)
    let filteredRecipes = this.state.menus.filter(function (product) {
      return product.menu.indexOf(evt.target.value) !== -1;
    });
    this.setState({
      filteredRecipes: filteredRecipes      
     // filteredRecipes:this.state.menus.filter(createFilter(evt.target.value, this.state.menus))
    })
  }
 
  render () {
   // const KEYS_TO_FILTERS = this.state.menus;
  //  const filteredRecipes = this.state.menus; //.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
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

        <div className="cards d-flex flex-wrap">
          {this.state.filteredRecipes.map(menu => {
            return (
              <div className="p_card">
                <div className="upper_card">
                  <img className="card_pic" src={require(`../product_slider/images/${menu.menu_img}.jpg`)} />
                </div>  
                
                <div className="lower_card">
                   <div className="search_result card_title title2">{menu.menu}</div>
                   <div className="card_text text ">{menu.Introduction}</div>
                  
                  
                 </div>
               </div>
          
          )
        })}
        </div>
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({
      searchTerm: term      
    })
  }
  componentDidMount(){
    this.getMenus();
  }
  //call restful api
  getMenus(){
    fetch("http://localhost:3000/api/recipe/")
    .then(res=>res.json())
    .then(menus => this.setState({
      menus:menus,
      filteredRecipes: menus      
    }))
  }
}

export default React_search;