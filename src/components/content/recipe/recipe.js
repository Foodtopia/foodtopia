import React, { Component } from "react";
import "./recipe.scss";
import { Link } from "react-router-dom";

class Recipe extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="recipe">
                    <a class="action-button shadow animate red upload_blog_img" href="/up_load">上傳食譜</a>
                    <div className="recipe_text container">
                        <h1>My recipe</h1>
                        <p>最新食譜</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recipe;
