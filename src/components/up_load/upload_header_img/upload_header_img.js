import React, { Component } from "react";
import "./upload_header_img.scss";




class Upload_header_img extends Component {
    constructor(props) {
      super(props)
}


    render() {
        return (
            <React.Fragment>
                <div className="container d-flex">
                    <div className="upload_header container">
                        <from>
                            <input className="header" placeholder="食譜名稱"/>
                            <img className="chicken_img" src={require("./img/th.jpg")} alt="" />
                            <input type="file" className="upload_img" />
                        </from>
                    </div>
                    <div className="upload_Introduction container">
                        <from>
                            <input className="introduction" />
                        </from>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Upload_header_img;
