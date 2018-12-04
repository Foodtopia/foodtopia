import React, { Component } from 'react';
import './Ingredient_active.scss';

class Ingredient_active extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="sec6">
        <div className="sec6_flex">
          <div className="sec6_left_content">
            <h2>活動名稱</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore?</p>
            <button type="button" class="btn btn-info">Info</button>
          </div>
          <div className="sec6_right_img">
            {/* <img src="./image/test12.jpg" alt />  設background*/}
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_active;