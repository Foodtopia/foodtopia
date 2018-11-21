import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class Footer extends Component {
    constructor(props) {
      super(props);
      this.initState = {
        id:'',
        total_time:'',
    }
    this.state = {
        uploads:[],
        upload:this.initState,
        type: 'add',
        inputValue: '',
        inputValue2: '',
        inputValue3: '',
        inputValue4: '',
        inputValue5: '',
    }
    }

    componentDidMount() {
        this.getuploads();  
    }

    getuploads(){
        fetch("http://localhost:3000/upload/upload_date/")
        .then(res => res.json())
        .then(uploads => this.setState({ 
            uploads: uploads,
            upload:this.initState,
            type:'add'
        }))
    }

    updateInputValue = (evt) => {
        var input_data = evt.target.value;
        this.setState({
            inputValue:input_data,
        })
    }
    updateInputValue2 = (evt) => {
        var input_data2 = evt.target.value;
        this.setState({
            inputValue2:input_data2,
        })
    }
    updateInputValue3 = (evt) => {
        var input_data3 = evt.target.value;
        this.setState({
            inputValue3:input_data3,
        })
    }
    updateInputValue4 = (evt) => {
        var input_data4 = evt.target.value;
        this.setState({
            inputValue4:input_data4,
        })
    }
    updateInputValue5 = (evt) => {
        var input_data5 = evt.target.value;
        this.setState({
            inputValue5:input_data5,
        })
    }
    

    render() {
        
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="container d-flex footer_width">
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
                                    <Link className="update_article" to={(`/blog/${upload.date_id}`)}>{upload.total_time}<br /></Link>
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
                    {/* icon */}
                    <div className="blog_footer_icon container d-flex">
                        <div className="footer_icon d-flex justify-content-between">
                            <a className="link_black" href={(`${this.state.inputValue}`)}><i class="icon fab fa-facebook col-2"></i></a>
                            <a className="link_black" href={(`${this.state.inputValue2}`)}><i class="icon fab fa-instagram col-2"></i></a>
                            <a className="link_black" href={(`${this.state.inputValue3}`)}><i class="icon fab fa-google-plus-g col-2"></i></a>
                            <a className="link_black" href={(`${this.state.inputValue4}`)}><i class="icon fab fa-youtube col-2"></i></a>
                            <a className="link_black" href={(`${this.state.inputValue5}`)}><i class="icon far fa-envelope col-2"></i></a>
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
                                        <input className="input" value={this.state.inputValue} onChange={this.updateInputValue}/>
                                    </div>
                                </div>
                                <div className="instagram_link input_br">
                                    <span>Instagram：</span>
                                    <div className="">
                                        <input className="input" value={this.state.inputValue2} onChange={this.updateInputValue2}/>
                                    </div>
                                </div>
                                <div className="google+_link input_br">
                                    <span>Google+：</span>
                                    <div className="">
                                        <input className="input" value={this.state.inputValue3} onChange={this.updateInputValue3}/>
                                    </div>
                                </div>
                                <div className="youtube_link input_br">
                                    <span>Youtube：</span>
                                    <div className="">
                                        <input className="input" value={this.state.inputValue4} onChange={this.updateInputValue4}/>
                                    </div>
                                </div>
                                <div className="email_link input_br">
                                    <span>Email：</span>
                                    <div className="">
                                        <input className="input" value={this.state.inputValue5} onChange={this.updateInputValue5}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}


export default Footer;