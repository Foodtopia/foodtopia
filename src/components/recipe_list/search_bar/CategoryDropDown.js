import React, { Component } from 'react';
import Categories from './category.json';
import "./categoryDropDown.scss";

class CategoryDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:1
        }
    }
    change = (event) => {
        this.props.changeHandler(event.target.value);
        this.setState({value: event.target.value});
    }
  render() {
    return (
      <React.Fragment>
        {/* <div className="dropdown">
            <select onChange={this.change} value={this.state.value} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                大分類
            </select>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {Categories.map((category)=>{
                    let opt = <option key={category.category_id} value={category.category_id} className="dropdown-item" >
                            {category.category}
                            </option>;               
                    return opt;
                })} 
            </div>
        </div> */}
        
        {/* 王老師原始碼 */}
        <select onCh ange={this.change} value={this.state.value} className="select_box">
            {Categories.map((category)=>{
                let opt = <option key={category.category_id} value={category.category_id} className="select_options">
                        {category.category}
                        </option>;               
            return opt;
            })}  
        </select> 
       {/* <p>{this.state.value}</p> */}

      </React.Fragment>
    );
  }
}

export default CategoryDropDown;