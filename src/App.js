import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import Nav from "./components/nav/Nav.js";
import Loginform from './components/logInform/Loginform.js';
import Register from './components/register/Register.js';
import RegisterSuccessful from './components/registerSuccessful/RegisterSuccessful.js';
import MemberCenter from './components/memberCenter/MemberCenter.js';
import BasicInfo from './components/basicInfo/BasicInfo.js';
import Recipe_list from './components/recipe_list/recipe_list.js';
import Recipe_page from './components/recipe_page/recipe_page';
import Recipe_category from './components/recipe_category/recipe_category';
import Recipe_head from './components/recipe_head/recipe_head';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          
          <Route path="/recipe_head" component={Recipe_head} />
          <Route path="/recipe_head/recipe_list" component={Recipe_list} />
          <Route path="/recipe_head/recipe_category" component={Recipe_category} />
          <Route path="/recipe_page" component={Recipe_page} />

          <Loginform />
          <Route path="/register" component={Register} />
          <Route path="/registerSuccessful" component={RegisterSuccessful} />
          <div className="container d-flex">
            <Route path="/memberCenter" component={MemberCenter} />
            <Route path="/memberCenter/BasicInfo" component={BasicInfo} />
          </div>
          {/* <Recipe_category/> */}
          {/* <Route path="/Recipe_head" component={Recipe_head} /> */}
          {/* <Route path="/recipe_list" component={Recipe_list} />
          <Route path="/recipe_page" component={Recipe_page} /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
