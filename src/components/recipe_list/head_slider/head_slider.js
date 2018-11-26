import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./head_slider.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $ from 'jquery';

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
                    {/* <img src={require('./images/hero11.jpg')} />
                    <img src={require('./images/hero22.jpg')} />
                    <img src={require('./images/hero33.jpg')} /> */}
                </ul>
                
                <ul id="paging" className="list-unstyled paging position-absolute d-flex justify-content-center">
                    {/* <li></li>
                    <li></li>
                    <li></li> */}
                </ul>
            </div>

          </React.Fragment>
        );
      }
      componentDidMount = () => {
        var slideNum=0, slideMove=0;
        var slideWidth=654

        var sliderArray=["hero11.bdc3ed52.jpg", "hero22.2f80e7e9.jpg", "hero33.a4d5ccde.jpg"]; 
        
        var slideCount=sliderArray.length;
        var slideWrapper=slideWidth*slideCount;
        $(".slider_wrap").width(slideWrapper);

        for (let $i=0; $i< slideCount; $i++){
            $("#slider").append(`<li><img src="/static/media/${sliderArray[$i]}" alt="" ></li>`);
            
            // $("#slider").append(`<li><img src='./images/${sliderArray[$i]}' /></li>`);
            $("#paging").append("<li></li>");
      };

        function slideTo(slideNum){
            slideMove=0 - slideNum * 654;

            $("#paging li").eq(slideNum).css("background", "#FF4343")
                .siblings().css("background", "transparent");
            $("#slider").css("left", slideMove);
        }
        $("#paging li").hover(function(){
            // console.log(slideNum);
            slideNum=$(this).index();
            slideMove=0 - slideNum * 654;
            // console.log(slideMove);

            $("#slider").css("left", slideMove);
            $(this).css("background", "#FF4343")
                .siblings().css("background", "transparent");
        });
        $("#left").click(function(){
            slideNum = slideNum-1;

            if(slideNum<0){
            slideNum=slideCount-1;
            }
            slideTo(slideNum);
        });
        $("#right").click(function(){
            slideNum = slideNum+1;

            if(slideNum> (slideCount - 1) ){
            slideNum=0;
            }
            
        slideTo(slideNum);

        });
      }
    }

export default Head_slider;