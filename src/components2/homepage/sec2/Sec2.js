import React from "react";
import { Link } from "react-router-dom";
import './Sec2.scss';



class Sec2 extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="sec2">
        <div className="b_container">
          <h2>生鮮食材</h2>
          <nav className="nav nav-pills nav-justified bnav">
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="../image/test7.jpg" alt />
              {/* 圖檔要讀在App.js那層的圖檔資料夾 不同其他子元件才有辦法共用 */}
              新鮮水果
            </Link>

            <Link className="bnav-link" to="/ingridient_listpage/vegetable">
              <img src="../image/test7.jpg" alt />
              新鮮蔬菜
            </Link>
           
            <Link className="bnav-link" to="/ingridient_listpage/meat">
              <img src="../image/test7.jpg" alt />
              肉類
            </Link>
            
            <Link className="bnav-link" to="/ingridient_listpage/dairy">
              <img src="../image/test7.jpg" alt />
               乳製品
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/seafood">
              <img src="../image/test7.jpg" alt />
                海鮮
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/other">
              <img src="../image/test7.jpg" alt />
                食物櫃
            </Link>             
          </nav>
        </div>
      </div>
      </React.Fragment>
    )
  }

}

export default Sec2;