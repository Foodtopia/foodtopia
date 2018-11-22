import React, { Component } from "react";
import "./food_recipe.scss";
import { Link } from "react-router-dom";


class Food_recipe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="recipe_diary row d-flex">
                    {this.props.uploads.map(upload =>  //menu -> 資料庫名稱
                        <div className="col-4">
                            <div className="food_recipe">
                                <div className="recipe_img">
                                    <img src={require(`./img/${upload.menu_img}.jpg`)} alt="" />
                                    <div className="blog_recipe">
                                        <div className="blog_btn d-flex">
                                            <Link className="food_btn" to="/"><div className="change_btn"><p className="color">修改</p></div></Link>
                                            <Link className="food_btn" to="/"><div className="change_btn ml-3"><p className="color">刪除</p></div></Link>
                                        </div>
                                    </div>
                                </div>
                                <h6>{upload.menu}</h6>
                                <p className="line"></p>
                                <p className="introduction">{upload.Introduction}</p>
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Food_recipe;