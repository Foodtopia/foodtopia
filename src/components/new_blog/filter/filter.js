import React, { Component } from "react";
import "./filter.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
class Filter extends Component {
    constructor(props) {
      super(props)
      
}

componentDidMount(){
    $(".filter_option").hover(function(){
        $(this).find(".content_menu").parent().find("ul").toggleClass("active1");
    });
}

    render() {     
        return (
            <React.Fragment>
                <div className="filter d-flex">
                    <div className="filter_option col-4">
                        <div className="ani_line">
                            <h2>近期食譜</h2>
                            <br />
                            <h3>Recent Recipes</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul class="content_menu">
                                <li>123</li>
                                <li>456</li>
                                <li>789</li>
                                <li>123</li>    
                            </ul>
                        </div>
                    </div>
                    <div className="filter_option col-4 filter_option_line">
                        <div className="ani_line">
                            <h2>食譜彙整</h2>
                            <br />
                            <h3>Recipe Collection</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul class="content_menu">
                                <li>123</li>
                                <li>456</li>
                                <li>789</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter_option col-4 filter_option_line">
                        <div className="ani_line">
                            <h2>熱烈迴響</h2>
                            <br />
                            <h3>Recent repercussions</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul class="content_menu">
                                <li>123</li>
                                <li>456</li>
                                <li>789</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Filter;