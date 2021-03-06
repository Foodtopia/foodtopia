import React, { Component } from "react";
import "./new_blog.scss";
import Blog_slider from "./blog_slider/blog_slider"
import My_recipe from "./my_recipe/my_recipe"
import Food_recipe_no_member from "./food_recipe/food_recipe_no_member"
import Filter_no_member from "./filter/filter_no_member"
import Footer from "./footer/footer"

class New_blog_no_member extends Component {
    constructor(props) {
      super(props)
      this.state = {
        communitys:[],
        sid:"",
    }
}

//communitys讀取
getCommunitys = (sid) => {
    fetch("http://localhost:3000/imgup/upload_community/"+ sid, {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
    .then(res => res.json())
    .then(communitys => this.setState({ 
        communitys:communitys,
    }))
}

componentDidMount(){
    let sid = this.props.match.params.sid 
    window.scrollTo(0,0);
    //讀取社群
    this.getCommunitys(sid);
}
    render() {
        
        return (
            <React.Fragment>
                <Blog_slider communitys={this.state.communitys} />
                <My_recipe />
                <Food_recipe_no_member sid={this.props.match.params.sid} />
                <Filter_no_member sid={this.props.match.params.sid} />
                <Footer communitys={this.state.communitys} />
            </React.Fragment>
        )
    }
}

export default New_blog_no_member;