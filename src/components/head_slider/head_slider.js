import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./head_slider.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

library.add(faAngleRight)
library.add(faAngleLeft)

class Head_slider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <React.Fragment>
            <div className="wrapper my-0 mx-auto position-relative">
            
                <div className="position-absolute arrow_area arrow_area_left d-flex justify-content-center align-items-center" id="left">
                    <FontAwesomeIcon icon="angle-left" />
                </div>
                <div className="position-absolute arrow_area arrow_area_right d-flex justify-content-center align-items-center" id="right">
                    <FontAwesomeIcon icon="angle-right" />
                </div>
                
                <ul id="slider" className="list-unstyled position-absolute slider_wrap d-flex">
                    <img src={require('./images/hero11.jpg')} />
                    <img src={require('./images/hero22.jpg')} />
                    <img src={require('./images/hero33.jpg')} />
                </ul>
                
                <ul id="paging" className="list-unstyled paging position-absolute d-flex justify-content-center">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={require('./images/hero11.jpg')} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={require('./images/hero22.jpg')} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={require('./images/hero33.jpg')} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
          </React.Fragment>
        );
      }
    }

export default Head_slider;