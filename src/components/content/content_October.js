import React, { Component } from "react";
import "./content.scss";
import Recipe from "./recipe/recipe";
import { Link } from "react-router-dom";
import Food_recipe_October from "./food_recipe/food_recipe_October";
import Footer from "./footer/footer";
import $ from 'jquery'

class Content_October extends Component {
    constructor(props) {
      super(props)
      this.initState = {
        id:'',
        menu:'',
    }
    this.state = {
        updates:[],
        update:this.initState,
        type: 'add',
        inputValue: '使用者の廚房',
        inputValue2: '歡迎來到我的廚房，一起來做美食吧!'
    }
}

componentDidMount() {
    this.getUpdate();
}

getUpdate() {
    fetch("http://localhost:3000/update/menu")
        .then(res => res.json())
        .then(updates => this.setState({ 
            updates: updates,
            update:this.initState,
            type:'add'
        }))
};

updateInputValue = (evt) => {
    var input_data = evt.target.value;
    this.setState({
        inputValue:input_data,
    })
}
updateInputValue2 = (evt) => {
    var input_data2 = evt.target.value;
    this.setState({
        inputValue2:input_data2,
    })
}

change_text1 = () =>{
    $("h2").toggleClass("active");
    $(".input1").toggleClass("active");
}
change_text2 = () =>{
    $("p").toggleClass("active");
    $(".input2").toggleClass("active");
}
    render() {
        return (
            <React.Fragment>
                <div className="slider">
                    <div className="blog_text">
                        <div className="header d-flex">
                            <h2>{this.state.inputValue}</h2>
                            <input className="input input1 active" value={this.state.inputValue} onChange={this.updateInputValue}/>
                            <i class="far fa-edit" onClick={this.change_text1}></i>
                        </div>
                        <div className="content d-flex">
                            <p>{this.state.inputValue2}</p>
                            <input className="input input2 active" value={this.state.inputValue2} onChange={this.updateInputValue2}/>
                            <i class="far fa-edit" onClick={this.change_text2}></i>
                        </div>
                    </div>
                    <div className="blog_text_button">
                        <Link class="action-button shadow animate yellow change_blog_img" to="#">更改圖片</Link>
                    </div>
                </div>
                <Recipe/>
                <Food_recipe_October />
                <Footer updates={this.state.updates} />
            </React.Fragment>
        );
    }
}

export default Content_October;
