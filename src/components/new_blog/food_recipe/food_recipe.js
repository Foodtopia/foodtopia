import React, { Component } from "react";
import "./food_recipe.scss";
import { Link } from "react-router-dom";
import $ from 'jquery';


class Food_recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            id:"",
            totalPage: 0,
            currentPage: 1,
            perPage: 6,  //一次6筆資料
            upperPageBound: 3,  //設定每組最高的分頁數字
            lowerPageBound: 0,  //設定每組最低的分頁數字
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3 //設定每組會有幾個分頁數字
          }
    }

//按下...計算下一組要產生的分頁數字
btnIncrementClick = () => {
    this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.getProducts(listid)
}

//按下...計算上一組要產生的分頁數字
btnDecrementClick = () => {
    this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.getProducts(listid)
}
//上一頁按鈕
btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
       });
    }
    let listid = this.state.currentPage - 1;
    this.getProducts(listid)
}
//下一頁按鈕
btnNextClick = () => {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
        this.setState({ 
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
        });
    }
    let listid = this.state.currentPage + 1;
    this.getProducts(listid)
}

componentDidMount() {
    this.getProducts(1);  //顯示頁面1
}

componentDidUpdate() {  //頁面按鈕顯示狀態   componentDidUpdate -> 更新發生後立即調用
    $(".page_button.active").removeClass('active');
    $('.page_button#'+this.state.currentPage).addClass('active');
}

paging = e => {  //顯示頁數資料
    e.preventDefault();
    this.getProducts($(e.target).text())
}

getProducts(page) {
    fetch("http://localhost:3000/foodtopia/menu/" + page, {method: 'GET',mode: "cors",
    credentials: 'include'})
      .then(res => res.json())
      .then(menus => {
        this.setState({
          menus: menus.datas ,
          totalPage: Math.ceil(menus.TotalCount / this.state.perPage), //計算出總共幾頁
          currentPage: page
        })

        //計算 prev next 按鈕是否出現
        this.setState({isNextBtnActive: 'disabled'}); //button 禁用 -> disabled
        this.setState({isPrevBtnActive: 'disabled'});

        //按鈕啟用條件
        if (this.state.totalPage === parseInt(page) && this.state.totalPage > 1) {
          this.setState({ isPrevBtnActive: '' });
        }
        else if (parseInt(page) === 1 && this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
        }
        else if (this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
          this.setState({ isPrevBtnActive: '' });
        }

    })

}

    render() {
        const { totalPage, currentPage, perPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

        //產生頁碼
        const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
          pageNumbers.push(i);
        }
    
        //產生數字的分頁按鈕
        const renderPageNumbers = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                  <div key={number} className='page_button active' id={number}><a href='javascript:void(0)' className="page_text_button" id={number} onClick={this.paging}><p>{number}</p></a></div>
                )
              }
              else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                  <div key={number} id={number} className='page_button'><a href='javascript:void(0)' className="page_text_button" id={number} onClick={this.paging}><p>{number}</p></a></div>
                )
              }
            });
    
        //按下...產生下一組分頁數字
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
        pageIncrementBtn = <div className="page_button"><a href='javascript:void(0)' className="page_text_button" onClick={this.btnIncrementClick}><p>&hellip;</p></a></div>
        }
        //按下...產生上一組分頁數字
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
        pageDecrementBtn = <div className="page_button"><a href='javascript:void(0)' className="page_text_button" onClick={this.btnDecrementClick}><p>&hellip;</p></a></div>
        }

        //判斷是否產生prev按鈕
        let renderPrevBtn = null;
        if (isPrevBtnActive !== 'disabled') {    
        renderPrevBtn = <div className="page_button"><a className="page_text_button" href='javascript:void(0)' id="btnPrev" onClick={this.btnPrevClick}><p>←</p></a></div>
        }

        //判斷是否產生next按鈕
        let renderNextBtn = null;
        if (isNextBtnActive !== 'disabled') {
        renderNextBtn = <div className="page_button"><a className="page_text_button" href='javascript:void(0)' id="btnNext" onClick={this.btnNextClick}><p>→</p></a></div>
        }


        return (
            <React.Fragment>
                <div className="recipe_diary row d-flex">
                    {this.state.menus.map(menu =>  
                        <div key={menu.id} className="col-lg-4 col-sm-6 col-12">
                            <div className="food_recipe">
                                <div className="recipe_img">
                                    <Link to={`/page/${menu.id}`} ><img src={require(`./img/${menu.menu_img}`)} alt="" /></Link>
                                </div>
                                <h6>{menu.menu}</h6>
                                <p className="line"></p>
                                <p className="introduction">{menu.Introduction}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="change_page_button">
                    <div className="pagination container">
                        <ul className="pagination_button d-flex">
                            {renderPrevBtn}
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}
                            {renderNextBtn}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Food_recipe;