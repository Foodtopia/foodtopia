import React from "react";
import './main.css';

class Se1 extends React.Component {
  render() {
    return <div className="b_container">
  <img className="main_img" src="./image/igr_main.jpg" />
  <div className="topic_sec">
    <div className="daily_active">
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
    </div>;
  }

}

export default Se1;