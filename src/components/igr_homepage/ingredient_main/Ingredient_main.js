import React, { Component } from 'react';
import './Ingredient_main.scss';

class Ingredient_main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div className="topicSec">
            <div className="daily_active ">
              <h3>搶鮮活動</h3>
              <p>此為搶先活動內容</p>
            </div>
            <div className="daily_recipies">
              <h3>本日推薦食譜</h3>
            </div>
            <div className="ingridient_promo">
              <h3>搶鮮特價食材</h3>
            </div>
          </div>

          <img className="bmain_img" src={require('./image/igr_main.jpg')} alt=""/>
        </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_main;