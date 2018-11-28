import React, { Component } from "react";
import "../content.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Upload_header_img2 from "./upload_header_img";

class Test extends Component {
    constructor(props) {
        super(props)
        this.initState = {
            id:"",
            menu:"",
            menu_img:"",
            Introduction:"",
        }
        this.state = {
            menus: [],
            menu: this.initState,
            type: 'add',
        }
    }

    componentDidMount() {
        console.log(this.props.match);
        // 用Link-Route去連線傳送資料特性去抓傳送的id -> path="/page/:id"
        let id = this.props.match.params.id
        this.getUpdate(id);
    }

    //食譜內容頁單筆 map function
    getUpdate(id) {
        fetch("http://localhost:3000/update/menu/"+id)
            .then(res => res.json())
            .then(menus => this.setState({
                menus: menus,
                menu:this.initState,
                type:"add"
            }))
    };
    
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div>
                        <Upload_header_img2 menus={this.state.menus}/>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Test;
