import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./day_rank.scss";



class Day_rank extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="rank_wrap">
                    <div className="rank_title">
                        <span>熱門排行榜</span>
                    </div>
                
                    <div className="rank_items d-flex flex-column justify-content-center align-items-center">
                        <div className="rank_item">
                            <span className="rank_num ">01</span>
                            <div className="rank_item_txt">
                                <div className="rank_item_title">蒜香牛小排</div>
                                <div className="item_text">15分鐘完成一道健康美味又簡單的料理!</div>
                            </div>
                            <div>
                                <img className="rank_thumbnail" src={require('./images/rank_thumbnail.jpg')}/>
                            </div>
                        </div>
                        <div className="rank_item">
                            <span className="rank_num ">02</span>
                            <div className="rank_item_txt">
                                <div className="rank_item_title">蒜香牛小排</div>
                                <div className="item_text">15分鐘完成一道健康美味又簡單的料理!</div>
                            </div>
                                <div>
                                    <img className="rank_thumbnail" src={require('./images/rank_thumbnail.jpg')}/>
                                </div>
                        </div>
                        <div className="rank_item">
                            <span className="rank_num ">03</span>
                            <div className="rank_item_txt">
                                <div className="rank_item_title">蒜香牛小排</div>
                                <div className="item_text">15分鐘完成一道健康美味又簡單的料理!</div>
                            </div>
                                <div>
                                    <img className="rank_thumbnail" src={require('./images/rank_thumbnail.jpg')}/>
                                </div>
                        </div>
                        
                    </div>

                </div>
            </React.Fragment>
        );
      }
    }

export default Day_rank;