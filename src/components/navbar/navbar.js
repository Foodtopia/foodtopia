import React, { Component } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <Link class="navbar-brand logo" to="#">Foodtopia</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link class="nav-link" to="/">首頁<span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/">美味食譜</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/">生鮮食材</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/">關於我們</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0 ml-auto">
                            <Link to="/blog"><img src={require("./icon/heart.png")} class="icon" alt="" /></Link>
                            <img src={require("./icon/profile.png")} class="icon" alt="" />
                            <img src={require("./icon/shopping-bag.png")} class="icon" alt="" />
                                <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" />
                                <img src={require("./icon/Group 13.png")} class="icon group" alt="" />
                            </form>
                        </div>
                    </nav>
                </div> 
            </React.Fragment>
        );
    }
}

export default Navbar;
