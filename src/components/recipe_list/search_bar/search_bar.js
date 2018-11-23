import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./search_bar.scss";

class Search_bar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <section className="container search_wrap">
          <main className="select_items_wrap d-flex">
            {/* <div className="select_item col-2 mr-5 d-flex justify-content-between">
                    <span className="select_title">大分類</span>
                    <span className="select_btn">v</span>
                  </div> */}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle select_item mr-5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                大分類        
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  異國料理
                </a>
                <a className="dropdown-item" href="#">
                  場合分類
                </a>
                <a className="dropdown-item" href="#">
                  烹調方法
                </a>
                <a className="dropdown-item" href="#">
                  食材分類
                </a>
              </div>
            </div>
            {/* <div className="select_item col-2 mr-5 d-flex justify-content-between">
              <span className="select_title">子分類</span>
              <span className="select_btn">v</span>
            </div> */}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle select_item mr-5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                子分類        
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  中式料理
                </a>
                <a className="dropdown-item" href="#">
                  日韓料理
                </a>
                <a className="dropdown-item" href="#">
                  西式料理
                </a>
                <a className="dropdown-item" href="#">
                  台灣料理
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle select_item mr-5 "
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                料理時間        
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  15分鐘以下
                </a>
                <a className="dropdown-item" href="#">
                  約30分鐘
                </a>
                <a className="dropdown-item" href="#">
                  約45分鐘
                </a>
                <a className="dropdown-item" href="#">
                  60分鐘以上
                </a>
              </div>
            </div>
            {/* <div className="select_item col-2 mr-5 d-flex justify-content-between">
              <span className="select_title">烹調時間</span>
              <span className="select_btn">v</span>
            </div> */}
          </main>
          <main className="select_items_wrap d-flex input-group-lg">
            {/* <input className="search_input" placeholder="請輸入食譜名稱"></input> */}
            <input
              type="text"
              className="form-control search_input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"/>
            <div className="search_button btn  ml-5">搜尋食譜</div>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Search_bar;
