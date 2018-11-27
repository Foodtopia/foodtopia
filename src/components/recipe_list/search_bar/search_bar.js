import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./search_bar.scss";
import $ from 'jquery';

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

          {/* 動態選單 */}
          {/* <form>
            <p>請選擇分類</p>
            <select id="category-list" onchange="changeCategory(this.selectedIndex)"></select>
            <br/>
                  <br/>
                  <p>選擇子分類</p>
            <select id="sector-list"></select>
          </form> */}
        </section>
      </React.Fragment>
    );
  }
  componentDidMount(){
    // var categories=['異國料理','食材','烹調時間','烹飪方法'];
    // var categorySelect=document.getElementById("category-list");
    // var inner="";
    // for(var i=0; i<categories.length; i++){
    //   inner=inner+'<option >'+categories[i]+'</option>';
    // }
    // categorySelect.innerHTML=inner;
    
    
    // var sectors=new Array();
    // sectors[0]=['日韓料理 ',' 中式料理' ,'台灣料理' ,'西式料理' ,'東南亞料理' ];
    // sectors[1]=['蔬菜','肉類','海鮮','乳製品','水果','米','麵','蛋'];	
    // sectors[2]=['15分鐘以內' ,'30分鐘','45分鐘','60分鐘以上'];	
    // sectors[3]=['蒸','煮','烤','炸','熬'];
    
    // function changeCategory(index){
    //   var Sinner="";
    //   // for(var i=0;i<sectors[index].length;i++){
    //   for(var i=0; i<sectors[index].length; i++){
    //     Sinner=Sinner+'<option >'+sectors[index][i]+'</option>';
    //   }
    //   var sectorSelect=document.getElementById("sector-list");
    //   sectorSelect.innerHTML=Sinner;
    // }
    // changeCategory(document.getElementById("category-list").selectedIndex);
      
   
    
  }
}

export default Search_bar;
