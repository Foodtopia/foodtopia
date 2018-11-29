import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'

import recipes from './recipe_data'
import "./react_search.scss";
import menus from "../../recipe.json";

const KEYS_TO_FILTERS = ['recipe.name']

class React_search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      // menus: menus //設定初始值menus為引入的menus json檔
      // menus: menus
      
      
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    const filteredRecipes = recipes.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput
              type="text"
              className="form-control search-input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.searchUpdated}
              placeholder="請輸入食譜關鍵字"
              />

        <div className="cards d-flex flex-wrap">
          {/* <SearchInput className="search-input" onChange={this.searchUpdated} /> */}
          {filteredRecipes.map(recipes => {
            return (
              // <div className="p_card">
              //   <div className="upper_card">
              //   <img className="card_pic" />
              //   </div>  
                
              //   <div className="lower_card">
                  <div className="search_result card_title title2">{recipes.recipe.name}</div>
              //     <div className="card_text text ">{menus.Introduction}</div>
                  
                  
              //   </div>
              // </div>
          
          )
        })}
        </div>
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default React_search;