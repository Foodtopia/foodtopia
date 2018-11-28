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
        <select  className="select_box">
            <option value="0">烹飪時間</option>
            <option value="1">15min</option>
            <option value="2">30min</option>
            <option value="3">45min</option>
            <option value="4">60min</option>
            
        </select> 
       {/* <p>{this.state.value}</p> */}

      </React.Fragment>
    );
  }
}

export default CategoryDropDown;
