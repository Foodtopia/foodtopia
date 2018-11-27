import React from "react";
import './main.scss';

class Se1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sec1">
        <div className="b_container">
        <img className="bmain_img" src="./image/igr_main.jpg" alt=""/>
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
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Se1;