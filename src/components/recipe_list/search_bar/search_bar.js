import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./search_bar.scss";
import $ from 'jquery';
import Sectors from './sector.json';
import Categories from './category.json';
import SectorDropDown from './SectorDropDown';
import CategoryDropDown from './CategoryDropDown';
import Reactstrap_dropdown from './reactstrap';
import Reactstrap_dropdown_section from './reactstrap_section';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RS_time_dropdown from './timeDropDown';



class Search_bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:1
    }
  }

  categoryChangeHandler = (id) => {
    //alert("category：" + id);
    this.setState({
      id:id
    })
  }
  sectorChangeHandler = (id) => {
    alert("sector:" + id)
  }

  render() {
    return (
      <React.Fragment>
        <section className="container search_wrap">
          <main className="select_items_wrap d-flex">
            <CategoryDropDown changeHandler = {this.categoryChangeHandler} />
            <SectorDropDown changeHandler = {this.sectorChangeHandler} categoryId={this.state.id} />
            <select  className="select_box">
              <option className="select_options" value="0">所需時間</option>
              <option className="select_options" value="1">15min</option>
              <option className="select_options" value="2">30min</option>
              <option className="select_options" value="3">45min</option>
              <option className="select_options" value="4">60min</option>
            </select>
            <select  className="select_box">
              <option className="select_options" value="0">烹飪方法</option>
              <option className="select_options" value="1">蒸</option>
              <option className="select_options" value="2">煮</option>
              <option className="select_options" value="3">炒</option>
              <option className="select_options" value="4">炸</option>
              <option className="select_options" value="5">烤</option>
              <option className="select_options" value="6">熬</option>
              
            </select>
            <select  className="select_box">
              <option className="select_options" value="0">食材篩選</option>
              <option className="select_options" value="1">蔬菜</option>
              <option className="select_options" value="2">肉類</option>
              <option className="select_options" value="3">海鮮</option>
              <option className="select_options" value="4">乳製品</option>
              <option className="select_options" value="5">水果</option>
              <option className="select_options" value="6">米</option>
              <option className="select_options" value="7">麵</option>
              <option className="select_options" value="8">蛋</option>
            </select>
          
          </main>
          <main className="select_items_wrap d-flex input-group-lg">
            <input
              type="text"
              className="form-control search_input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"/>
            <div className="search_button btn  ml-5">搜尋食譜</div>
          </main>

          {/* 動態選單 */}
          {/* <CategoryDropDown changeHandler = {this.categoryChangeHandler} />
          <SectorDropDown changeHandler = {this.sectorChangeHandler} categoryId={this.state.id} /> */}

          {/* <Reactstrap_dropdown changeHandler = {this.categoryChangeHandler}/>
          <Reactstrap_dropdown_section changeHandler = {this.sectorChangeHandler} categoryId={this.state.id}/> */}
         
        </section>
      </React.Fragment>
    );
  }
  componentDidMount(){
    
      
   
    
  }
}

export default Search_bar;
