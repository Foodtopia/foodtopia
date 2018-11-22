import React, { Component } from "react";
import "./food_recipe.scss";
import { Link } from "react-router-dom";
import $ from 'jquery';


class Food_recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
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
    fetch("http://localhost:3000/foodtopia/menu/" + page)
      .then(res => res.json())
      .then(menu => {
        this.setState({
          menus: menu.datas,
          totalPage: Math.ceil(menu.TotalCount / this.state.perPage), //計算出總共幾頁
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
        return (
            <React.Fragment>
                <div className="recipe_diary row d-flex">
                    {this.props.uploads.map(upload =>  //menu -> 資料庫名稱
                        <div className="col-4">
                            <div className="food_recipe">
                                <div className="recipe_img">
                                    <img src={require(`./img/${upload.menu_img}.jpg`)} alt="" />
                                    <div className="blog_recipe">
                                        <div className="blog_btn d-flex">
                                            <Link className="food_btn" to="/"><div className="change_btn"><p className="color">修改</p></div></Link>
                                            <Link className="food_btn" to="/"><div className="change_btn ml-3"><p className="color">刪除</p></div></Link>
                                        </div>
                                    </div>
                                </div>
                                <h6>{upload.menu}</h6>
                                <p className="line"></p>
                                <p className="introduction">{upload.Introduction}</p>
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Food_recipe;