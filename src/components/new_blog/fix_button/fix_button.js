import React, { Component } from "react";
import "./fix_button.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';

class Fix_button extends Component {
    constructor(props) {
      super(props)
      
}

click(){
    $(".fix_div").toggleClass("open");
    $(".fix_div").toggleClass("close");
    
}

    render() {
        return (
            <React.Fragment>
                <div className="fix_div close">
                    <div className="fix_div_modify ">
                        <input type="text" className="header_modify" placeholder="請編輯歡迎用語" /><br />
                        <div className="btn_modify">修改</div>
                    </div>
                    <div className="fix_div_modify_2 ">
                        <textarea type="text" className="header_modify" placeholder="請編輯部落格簡介" /><br />
                        <div className="btn_modify">修改</div>
                    </div>
                    <div className="btn_3 d-flex ">
                        <div className="btn_modify_3">上傳食譜</div>
                        <div className="btn_modify_3">更換圖片</div>
                    </div>
                    <div className="btn_3 d-flex ">
                        <div className="btn_modify_3">修改食譜</div>
                        <div className="btn_modify_3">設定社群</div>
                    </div>
                </div>
                <div className="fix_button" onClick={this.click}>
                    <p>管理</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Fix_button;