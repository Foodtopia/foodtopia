import React, { Component } from "react";
import "./content.scss";
import Recipe from "./recipe/recipe";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Food_recipe from "./food_recipe/food_recipe";
import Food_recipe2 from "./food_recipe/food_recipe2";
import Footer from "./footer/footer";
import Preface from "./preface/preface";


class Content extends Component {
    constructor(props) {
        super(props)
        this.initState = {
            id: '',
            menu: '',
        }
        this.initState2 = {
            upload_time_sid:"",
            menu:"",
            menu_img:"",
            Introduction:"",
        }
        this.state = {
            updates: [],
            update: this.initState,
            uploads: [],
            upload: this.initState2,
            type: 'add',
            inputValue: '使用者の廚房',
            inputValue2: '歡迎來到我的廚房，一起來做美食吧!',
        }

    }

    componentDidMount() {
        var food_recipe_none = document.getElementById('food_recipe_none');
        var food_recipe = document.getElementById('food_recipe');
        food_recipe_none.addEventListener('click',function(){
            food_recipe.style.display="none";
            window.scrollTo(0,1000);
        })
        this.getUpdate();
    }

    //食譜map function
    getUpdate() {
        fetch("http://localhost:3000/update/menu")
            .then(res => res.json())
            .then(updates => this.setState({
                updates: updates,
                update: this.initState,
                type: 'add'
            }))
    };

    //月份分類
    month = (upload_time_sid)=> {
        fetch("http://localhost:3000/month/menu/" + upload_time_sid)
        .then(res => res.json())
        .then(uploads => this.setState({ 
            uploads: uploads,
            upload:this.initState2,
        }))
    }
    
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Preface /> {/* 上傳圖片 */}
                    <div>
                        <Recipe />{/* 上傳食譜 */}
                        <div id="food_recipe"><Food_recipe /></div>
                        <Food_recipe2 uploads={this.state.uploads}/>{/* 食譜分頁顯示 */}
                        <Footer updates={this.state.updates} month={this.month} />{/* footer分類 */}
                    </div>

                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Content;
