import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

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
        type: 'add'
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
                                    <Link className="update_article" to="/">{upload.total_time}<br /></Link>
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
                    <div className="blog_footer_icon container">
                        <div className="footer_icon d-flex justify-content-between">
                            <i class="icon fab fa-facebook col-2"></i>
                            <i class="icon fab fa-instagram col-2"></i>
                            <i class="icon fab fa-google-plus-g col-2"></i>
                            <i class="icon fab fa-youtube col-2"></i>
                            <i class="icon far fa-envelope col-2"></i>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Footer;