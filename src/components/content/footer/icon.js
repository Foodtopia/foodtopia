import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class Icon extends Component {
    constructor(props) {
      super(props);
        this.state = {
            id: "",
            facebook:"",
            instagram:"",
            google_plus:"",
            youtube:"",
            email:""
        }
    }

    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
    }
    update = (evt) => {
        this.props.update(this.state);
        evt.preventDefault();
    }
    add = (evt) => {
        this.props.add(this.state);
        evt.preventDefault();
    }
    static getDerivedStateFromProps(props, state) {
        if (props.modifyData.id !== state.id) {
            return {
                id: props.modifyData.id,
                facebook: props.modifyData.facebook,
                instagram: props.modifyData.instagram,
                google_plus: props.modifyData.google_plus,
                youtube: props.modifyData.youtube,
                email: props.modifyData.email
            }
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <div className="blog_footer_icon container d-flex">
                    <div className="footer_icon d-flex justify-content-between">
                        <a className="link_black" href={(`${this.state.facebook}`)}><i class="icon fab fa-facebook col-2"></i></a>
                        <a className="link_black" href={(`${this.state.instagram}`)}><i class="icon fab fa-instagram col-2"></i></a>
                        <a className="link_black" href={(`${this.state.google_plus}`)}><i class="icon fab fa-google-plus-g col-2"></i></a>
                        <a className="link_black" href={(`${this.state.youtube}`)}><i class="icon fab fa-youtube col-2"></i></a>
                        <a className="link_black" href={(`${this.state.email}`)}><i class="icon far fa-envelope col-2"></i></a>
                    </div>
                    <button type="button" className="btn btn-primary set_up_button" data-toggle="modal" data-target="#exampleModal">
                        設定
                    </button>
                </div>
                {/* 更動icon連結的Modal */}
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">設定個人社群頁面</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="facebook_link input_br">
                                <span>Facebook：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.facebook} onChange={this.handleChange} id="facebook" placeholder="facebook社群"/>
                                </div>
                            </div>
                            <div className="instagram_link input_br">
                                <span>Instagram：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.instagram} onChange={this.handleChange} id="instagram" placeholder="個人instagram"/>
                                </div>
                            </div>
                            <div className="google+_link input_br">
                                <span>Google+：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.google_plus} onChange={this.handleChange} id="google_plus" placeholder="個人google+"/>
                                </div>
                            </div>
                            <div className="youtube_link input_br">
                                <span>Youtube：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.youtube} onChange={this.handleChange} id="youtube" placeholder="youtube頻道"/>
                                </div>
                            </div>
                            <div className="email_link input_br">
                                <span>Email：</span>
                                <div className="">
                                    <input type="email" className="input" value={this.state.email} onChange={this.handleChange} id="email" placeholder="個人email"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {this.props.modifyType === "add" ? 
                            <button type="button" onClick={this.add} className="btn btn-primary">
                            新增
                            </button>
                            : <button type="button" onClick={this.update} className="btn btn-secondary">
                                修改
                            </button>}
                        </div>
                        </div>
                    </div>
                </div>     
            </React.Fragment>
        );
    }
}


export default Icon;