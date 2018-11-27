import React from "react";
import { Link } from "react-router-dom";


class Sec2 extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="sec2">
        <div className="b_container">
          <h2>生鮮食材</h2>
          <nav className="nav nav-pills nav-justified bnav">
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="./image/test7.jpg" alt />
              新鮮水果
            </Link>

            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="./image/test7.jpg" alt />
              新鮮水果
            </Link>
           
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="./image/test7.jpg" alt />
              新鮮水果
            </Link>
            
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="./image/test7.jpg" alt />
              新鮮水果
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="./image/test7.jpg" alt />
              新鮮水果
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src="./image/test7.jpg" alt />
              新鮮水果
            </Link>             
          </nav>
        </div>
      </div>
      </React.Fragment>
    )
  }

}

export default Sec2;