import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    let styles={
      // color: 'red',
      // backgroundColor: 'blue',
      width: '80%',
      // height: '100px'
    }
    return (
      <div>
        <h2> 推薦食譜 </h2>
        <Slider {...settings}>
          <div >
            {/* <h3 className="hey" >1</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
            {/* <img src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            {/* <h3>2</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>3</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>4</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>5</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>6</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>7</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>8</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
          <div>
            {/* <h3>9</h3> */}
            <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/>
          </div>
        </Slider>
      </div>
    );
  }
}