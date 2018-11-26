import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_page.scss";

class Recipe_page extends Component {
  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>
          {/* ----header----- */}
          <main className="head_bg">
            <header className=" container d-flex">
                <img className="main_pic" src={require('./images/western_2_main.jpg')}/>
                <div className="main_text">
                  <div className="main_title d-flex">
                    <h1>大蒜奶油沙朗牛排佐帕瑪森起司馬鈴薯</h1>
                    <div className="like_btn d-flex justify-content-center">
                      <img className="like_img" src={require('./images/like.svg')}/>
                      <img className="liked_img" src={require('./images/liked.svg')}/>
                      <div className="like_text">收藏</div>
                    </div>
                  </div>
                    <h4>大蒜、香草、奶油溶入牛排中，帶出豐富有層次的口感，這種晚餐將會是一種享受。</h4>
                    <div className="cook_info_wrap d-flex">
                        <div className="cook_info ">
                            <img className="info_icon time" src={require('./images/clock.svg')}/>
                            <h3>40min</h3>
                        </div>
                        <div className=" cook_info ">
                            <img className="info_icon level" src={require('./images/chef.svg')}/>
                            <h3>容易</h3>
                        </div>
                        <div className=" cook_info ">
                            <img className="info_icon portion" src={require('./images/dinner.svg')}/>
                            <h3>2人份</h3>
                        </div>
                    </div>
                    {/* ---- nutrition ---- */}
                    <main className="nutrition_wrap container">
                      <table className="nutrition_table table table-bordered table-sm">
                        <thead>
                          <tr>
                            <th className="n_th" scope="col">能量</th>
                            <th className="n_th" scope="col">卡路里</th>
                            <th className="n_th" scope="col">脂肪</th>
                            <th className="n_th" scope="col">飽和脂肪</th>
                            <th className="n_th" scope="col">碳水化合物</th>
                            <th className="n_th" scope="col">糖</th>
                            <th className="n_th" scope="col">膳食纖維</th>
                            <th className="n_th" scope="col">蛋白質</th>
                            <th className="n_th" scope="col">膽固醇</th>
                            <th className="n_th" scope="col">鈉</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">3389 KJ</td>
                            <td>810 kcal</td>
                            <td>50 g</td>
                            <td>16 g</td>
                            <td>56 g</td>
                            <td>18 g</td>
                            <td>11 g</td>
                            <td>40 g</td>
                            <td>230 mg</td>
                            <td>460 mg</td>
                          </tr>
                        </tbody>
                      </table>
                    </main>
                </div>
            </header>
          </main>

          
          <section className="middle_section container d-flex justify-content-between">
            {/* ----- ingredients ------- */}
            <main className="ingredients_wrap">
              <h1 className="i_title">所需食材</h1>
              {/* <span >共2人份</span> */}
              <div className="ingredients d-flex flex-wrap">
                <div className="ingredient d-flex ">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                {/* ---充數--- */}
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                <div className="ingredient d-flex">
                  <img className="ingredient_pic" src={require('./images/I_chicken.png')}/>
                  <div className="i_text">
                    <h5 className="i_name">花椰菜</h5>
                    <p className="i_qty"> 180克</p>
                  </div>
                </div>
                {/* ----- */}
              </div>
            </main>
            {/* ---add2cart--- */}
            <main className="add2cart flex-row align-items-center">
              <h1>購買食譜相關食材</h1>
              <div className="btn btn-info">所有食材加入購物車</div>
              <h4>新鮮食材24小時送達</h4>
            </main>
          </section>

          {/* ---steps--- */}
          <main className="steps-wrap">
            <div className="step d-flex justify-content-center">
              <span className="step_num">01</span>
              <span className="step_pic"><img src={require("./images/western_2_step_1.jpg")}/></span>
              <span className="detail">準備(湯鍋和煎鍋)湯鍋放入水、紅蘿蔔、馬鈴薯、少許鹽開火。同時煎鍋開火加入少許的油放牛排、洋蔥。</span>
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">02</span>
              <span className="step_pic"><img src={require("./images/western_2_step_1.jpg")}/></span>
              <span className="detail">準備(湯鍋和煎鍋)湯鍋放入水、紅蘿蔔、馬鈴薯、少許鹽開火。同時煎鍋開火加入少許的油放牛排、洋蔥。</span>
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">03</span>
              <span className="step_pic"><img src={require("./images/western_2_step_1.jpg")}/></span>
              <span className="detail">準備(湯鍋和煎鍋)湯鍋放入水、紅蘿蔔、馬鈴薯、少許鹽開火。同時煎鍋開火加入少許的油放牛排、洋蔥。</span>
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">04</span>
              <span className="step_pic"><img src={require("./images/western_2_step_1.jpg")}/></span>
              <span className="detail">準備(湯鍋和煎鍋)湯鍋放入水、紅蘿蔔、馬鈴薯、少許鹽開火。同時煎鍋開火加入少許的油放牛排、洋蔥。</span>
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">05</span>
              <span className="step_pic"><img src={require("./images/western_2_step_1.jpg")}/></span>
              <span className="detail">準備(湯鍋和煎鍋)湯鍋放入水、紅蘿蔔、馬鈴薯、少許鹽開火。同時煎鍋開火加入少許的油放牛排、洋蔥。</span>
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">06</span>
              <span className="step_pic"><img src={require("./images/western_2_step_1.jpg")}/></span>
              <span className="detail">準備(湯鍋和煎鍋)湯鍋放入水、紅蘿蔔、馬鈴薯、少許鹽開火。同時煎鍋開火加入少許的油放牛排、洋蔥。</span>
            </div> 
          </main>

          {/* ---author--- */}
          <main className="author_wrap container d-flex justify-content-center">
            <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
            <div className="author_text">
              <div className="author_name">作者:</div>
              <div className="author_name"> Foodtopia官方小編</div>
              <div className="author_intro">懶得想要吃什麼?來foodtopia找就對了!</div>
            </div>
            
          </main>

          {/* ---recommendation--- */}
          <main className="recommendation_wrap">
            <div className="p_slider_wrap container d-flex align-items-center">
                <div className="category_wrap container">
                    <div className="category_title title1">你可能也會喜歡</div>
                    <div className="cards d-flex">
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div> 
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title title2">蒜香牛小排</div>
                                <div className="card_text text">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </main>

          {/* ---comment--- */}
          <main className="comment_wrap d-flex container">
            {/* <div className="comment_title">評論</div> */}
            <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
            <div className="comment_area">
              <span className="user_name"> Foodtopia</span>
              {/* <span className="comment_time"> 2018-10-05 19:59</span> */}
              <div className="d-flex align-items-end">
                <textarea className="comment_input" placeholder="請在這裡輸入您對這個食譜的想法!"></textarea>
                <button className="comment_send btn btn-primary" type="submit">送出</button>
              </div>
            </div>
          </main>
          <main className="comment_wrap d-flex container">
            {/* <div className="comment_title">評論</div> */}
            <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
            <div className="comment_area">
              <span className="user_name"> Foodtopia</span>
              <span className="comment_time"> 2018-10-05 19:59</span>
              <div className="comment_text">想問一下現做沒吃完的話怎麼保存？ 常溫不冰的話幾天內吃完比較ok?</div>
            </div>
          </main>
          <main className="comment_wrap d-flex container">
            <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
            <div className="comment_area">
              <span className="user_name"> Foodtopia</span>
              <span className="comment_time"> 2018-10-05 19:59</span>
              <div className="comment_text">想問一下現做沒吃完的話怎麼保存？ 常溫不冰的話幾天內吃完比較ok?</div>
            </div>
          </main>
          <main className="comment_wrap d-flex container">
            <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
            <div className="comment_area">
              <span className="user_name"> Foodtopia</span>
              <span className="comment_time"> 2018-10-05 19:59</span>
              <div className="comment_text">想問一下現做沒吃完的話怎麼保存？ 常溫不冰的話幾天內吃完比較ok?</div>
            </div>
          </main>

        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Recipe_page;