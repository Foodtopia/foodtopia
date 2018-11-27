import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.scss";
import Cart from "../cart/Cart.js";


class Nav extends Component {
  constructor(props) {
    super(props);
  }
  // clickHandler(){
  //   var lightBox = document.getElementById('lightBox');
  //     lightBox.style.display = 'flex';
  //     setTimeout(function(){
  //       lightBox.style.opacity = '1';
  //     },100)
  // }
  cartToggle() {
    let cart = document.querySelector('#cart');
    cart.classList.toggle("openCart");
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/homePage">Foodtopia</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link class="nav-link" to="/homePage">首頁<span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/">美味食譜</Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/ingridient_hompage">新鮮食材</Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/">關於我們</Link>
                </li>
              </ul>
              <img src={require('./icons/like.png')} />
              <Link to="/register">
                <img id='members' onClick={this.clickHandler} src={require('./icons/profile.png')} />
              </Link>
              <img src={require('./icons/shopping-bag.png')} onClick={this.cartToggle} />
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" />
                <img src={require('./icons/Group 13.png')} />
              </form>
            </div>
          </div>
        </nav>
        <Cart />
        <div className='p-5'></div>
      </React.Fragment>
    );
  }
  componentDidMount() {
  }
   
}

export default Nav;
