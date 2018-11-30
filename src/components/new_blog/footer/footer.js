import React, { Component } from "react";
import "./footer.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
      super(props)
}
    render() {
        return (
            <React.Fragment>
                <div className="footer_background">
                    <div className="blog_footer_icon container d-flex">
                        <div className="footer_icon d-flex justify-content-between">
                            <a className="link_black" href={(``)}><i class="icon fab fa-facebook col-2"></i></a>
                            <a className="link_black" href={(``)}><i class="icon fab fa-instagram col-2"></i></a>
                            <a className="link_black" href={(``)}><i class="icon fab fa-google-plus-g col-2"></i></a>
                            <a className="link_black" href={(``)}><i class="icon fab fa-youtube col-2"></i></a>
                            <a className="link_black" href={(``)}><i class="icon far fa-envelope col-2"></i></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;