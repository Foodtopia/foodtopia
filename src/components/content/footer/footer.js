import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Icon from "./icon";

class Footer extends Component {
    constructor(props) {
      super(props);
      this.initState = {
        id:'',
        total_time:'',
    }

    this.initState2 = {
        id: "",
        facebook: "",
        instagram: "",
        google_plus: "",
        youtube:"",
        email:"",
    }

    this.state = {
        uploads:[],
        upload:this.initState,
        members: [],
        member: this.initState2,
        type: 'add',
    }
    }

    componentDidMount() {
        this.getuploads();  
        this.getMembers();
    }
    //月份 map function
    getuploads(){
        fetch("http://localhost:3000/upload/upload_date/")
        .then(res => res.json())
        .then(uploads => this.setState({ 
            uploads: uploads,
            upload:this.initState,
            type:'add'
        }))
    }
    //社群icon讀傳資料
    getMembers() {
        fetch("http://localhost:3000/api/community")
            .then(res => res.json())
            .then(members => this.setState({ 
                members: members,
                member:this.initState2,
                type:'add'
            }))
    }
    update = (member) => {
        fetch('http://localhost:3000/api/community' + member.id, {
            method: 'PUT',
            body: JSON.stringify(member),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message);
                this.getMembers();

            })
    }
    add = (member) => {
        delete member.id;
        fetch('http://localhost:3000/api/community', {
            method: 'POST',
            body: JSON.stringify(member),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message);
                this.getMembers();
            })
    }

    //分類月份
    month = (evt) =>{
        let month = evt.target.dataset.month;
        this.props.month(month);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="container d-flex footer_width" id="food_recipe_none">
                        <div className="col-4 new_topia">
                            <div className="blog_title">近期食譜</div>
                            {this.props.updates.map(update => 
                                <div className="update_article_border">
                                    <Link className="update_article" to="/">{update.menu}<br /></Link>
                                </div>
                            )}
                        </div>
                        <div className="col-4 new_topia">
                            <div className="blog_title">分享彙整</div>
                            {this.state.uploads.map(upload => 
                                <div className="update_article_border">
                                    <div className="update_article" data-month={upload.id} onClick={this.month}>{upload.total_time}<br /></div>
                                </div>
                            )}
                        </div>
                        <div className="col-4 new_topia">
                            <div className="blog_title">最新迴響</div>
                            {this.props.updates.map(update => 
                                <div className="update_article_border">
                                    <Link className="update_article" to="/"><br /></Link>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* 社群icon */}
                    <Icon modifyType={this.state.type} modifyData={this.state.member} update={this.update} add={this.add}/>
                </div>
            </React.Fragment>
        );
    }
}


export default Footer;