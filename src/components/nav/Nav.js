import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.scss";
import Cart from "../cart/Cart.js";
import $ from 'jquery';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    }
  }
  // clickHandler(){   var lightBox = document.getElementById('lightBox');
  // lightBox.style.display = 'flex';     setTimeout(function(){
  // lightBox.style.opacity = '1';     },100) }
  handleHover = () => {
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      credentials: 'include'
    }).then(function (res) {
      console.log(res);
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        console.log(a.nickname);
        var sMenu = document.getElementById('sMenu');
        sMenu.style.height = '90px';
        this.setState({ userName: a.nickname });
        console.log(this.state.userName);
        var q = document.getElementById('q');
        q.style.display = 'none';
        // var blog = document.getElementById('blog');
        // blog.style.display = 'block';
      } else {
        var sMenu = document.getElementById('sMenu');
        var q = document.getElementById('q');
        q.style.display = 'block';
        sMenu.style.height = '60px';
        // return false;
        
      }
    })
      .catch(function (err) {
        console.log(err);
        //alert(err);
      })
    // var sMenu = document.getElementById('sMenu');
    // sMenu.style.height = '60px';
  }
  handleOut() {
    // alert('ok')
    var sMenu = document.getElementById('sMenu');
    sMenu.style.height = '0px';
    // setTimeout(function(){
    //   sMenu.style.height = '0px';
    // },500)
  }
  //收藏登入判定
  love = () => {
    console.log("123")
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        window.location.assign('/love');
      } else {
        window.location.assign('/login');
      }
    })
  }

  render() {
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      credentials: 'include'
    }).then(function (res) {
      console.log(res);
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        console.log('已經登入');
        var blog = document.getElementById('blog');
        blog.style.display = 'block';
      } else {
        console.log('未登入');
      }
    })

    const cartNum = () => {
      if (this.props.products.length < 1){
        return 'cartNum d-none'
      } else {
        return 'cartNum'
      }
    }
    return (
      <React.Fragment>
        <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-emptyNav fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/homePage">Foodtopia</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link class="nav-link" to="/homePage">首頁<span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/recipe_head/recipe_list">美味食譜</Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/ingridient_hompage">生鮮食材</Link>
                </li>
                <li id='blog' className="nav-item" style={{display:'none'}}>
                  <Link class="nav-link" to="/new_blog">食譜部落格</Link>
                </li>

              </ul>
              <img src={require('./icons/like.png')} onClick={this.love}/>
              <div>
                <a href="http://localhost:3000/session/login">
                  <img
                    id='members'
                    // onClick={this.clickHandler}
                    src={require('./icons/profile.png')} onMouseOver={this.handleHover} onMouseOut={this.handleOut} />
                </a>
                <div className='sMenu' id='sMenu' onMouseOver={this.handleHover} onMouseOut={this.handleOut}>
                  <div id='q'>
                    <p>尚未登入</p>
                    <p ><a href="http://localhost:3000/session/login" >登入 / 註冊</a></p>
                  </div>
                  <p>{this.state.userName + ' 歡迎回來'}</p>
                  <p><a href="http://localhost:3000/session/login" >會員中心</a></p>
                  <p><a href='http://localhost:3000/session/logout' >登出</a></p>
                </div>
              </div>
              <div className='cartBox'>
              <img src={require('./icons/shopping-bag.png')} onClick={this.props.cartToggle} />
              <div key={this.props.products} id='cartNum' className={cartNum()} >{this.props.products.length}</div>
              </div>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder=""
                  aria-label="Search" />
                <img src={require('./icons/Group 13.png')} />
              </form>
            </div>
          </div>
        </nav>
        <div className='p-5'></div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // session 使否已經登入判斷 用來讀取資料用
    // fetch('http://localhost:3000/session/info', {
    //   method: 'GET',
    //   credentials: 'include'
    // }).then(function (res) {
    //   console.log(res);
    //   return res.json();
    // }).then((a) => {
    //   if (a.login == 1) {
    //     console.log('已經登入');
    //   } else {
    //     console.log('未登入');
    //   }
    // })
    // // nav下滑消失
    var scrollLast = 0
        $(window).scroll(function () {
            let scrollNow = $(this).scrollTop();
            // console.log(scrollNow)
            if (scrollNow > scrollLast) {
                $('.navbar').addClass('hide_nav');
                // $('.progress').addClass('hide_nav');
            } else {
                $('.navbar').removeClass('hide_nav');
                // $('.progress').removeClass('hide_nav');
            }
            scrollLast = scrollNow
        })
    // nav下滑消失
    // nav特效開始
    // $(window).scroll(function () {
    //   let scrollNow = $(this).scrollTop();
    //   if (scrollNow != 0) {
    //     $('nav').addClass('bg-light');
    //     $('nav').removeClass('bg-transparent');
    //   } else {
    //     $('nav').addClass('bg-transparent');
    //     $('nav').removeClass('bg-light');
    //   }
    // })
    // $('nav').mouseover(function () {
    //   $('nav').addClass('bg-light');
    //   $('nav').removeClass('bg-transparent');
    // })
    // $('nav').mouseout(function () {
    //   $('nav').addClass('bg-transparent');
    //   $('nav').removeClass('bg-light');
    // })
    // nav特效結束
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.products.length !== this.props.products.length) {
      let cartNum = document.querySelector('#cartNum');
    }}
    componentWillUpdate(){
      
    }
    componentDidUpdate() {
      let cartNum = document.querySelector('#cartNum');
      cartNum.classList.remove('rubberBandNum');
      cartNum.classList.add('rubberBandNum');
    }
}

export default Nav;
