
import React from "react";

class Sec5 extends React.Component {
  render() {
    return(
    <React.Fragment>
      <div className="sec5">
      <div className="b_container">
        <h2>產地直送</h2>
        <div className="sec5_card_sec">
          <div className="sec5_card_item">
            {/* 圖檔要讀在App.js那層的圖檔資料夾 */}
            <a href><img src="../image/test17.jpeg" alt /></a>
            <a href><h3>項目名稱</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src="../image/test10.jpg" alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <a href><img src="../image/test17.jpeg" alt /></a>
            <a href><h3>項目名稱</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src="../image/test10.jpg" alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <a href><img src="../image/test17.jpeg" alt /></a>
            <a href><h3>項目名稱</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src="../image/test10.jpg" alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <a href><img src="../image/test17.jpeg" alt /></a>
            <a href><h3>項目名稱</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src="../image/test10.jpg" alt />
              <p>1280</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
    )
  }

}

export default Sec5;