import React, { Component } from "react";
import "../../up_load/upload_header_img/upload_header_img.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";



class Upload_header_img2 extends Component {
    constructor(props) {
      super(props)
}


    render() {
        return (
            <React.Fragment>
                {this.props.menus.map(menu =>      
                    <div className="container d-flex">
                    <div className="upload_header container">
                        <from>
                            <input className="header" placeholder="食譜名稱"/>
                            <img className="chicken_img" src={require(`./img/${menu.menu_img}.jpg`)} alt="" />
                            <input type="file" className="upload_img" />
                        </from>
                    </div>
                    <div className="upload_Introduction container">
                        <p>
                            123456
                        </p>
                    </div>
                </div>
                )}
            </React.Fragment>
        );
    }
}

export default Upload_header_img2;
