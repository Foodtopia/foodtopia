import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    let styles={
      // color: 'red',
      // backgroundColor: 'blue',
      width: '100%',
      // height: '100px'
    }
    return (
      <div className="container">
        <h2> 推薦食譜 </h2> 
        <Slider {...settings}>
          <div >
            {/* <h3 className="hey" >1</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
            {/* <img src={require("./images/china_show_1.png")}/> */}
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>2</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>3</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>4</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>5</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>6</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>7</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>8</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
          <div>
            <div className="p_card">
                  <div className="upper_card">
                      <img className="card_pic slider_img" src ={require("./images/china_show_1.png")}/>
                      <div className="rate title1">4.2</div>
                  </div>
                  <div className="lower_card">
                      <div className="card_title title2">蒜香牛小排</div>
                      <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                      {/* <img className="like_btn" src={require("./images/like.svg")}/>
                      <img className="share_btn" src={require("./images/share.svg")}/> */}
                  </div>
              </div>
            {/* <h3>9</h3> */}
            {/* <img className="slider_img" style={styles} src={require("./images/china_show_1.png")}/> */}
          </div>
        </Slider>
      </div>
    );
  }
}