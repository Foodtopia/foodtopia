import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Up_load from "./components/up_load/up_load";
import Test from "./components/content/test/test";
import New_blog from "./components/new_blog/new_blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route exact path="/up_load" component={Up_load} />
          <Route exact path="/blog" component={Content} />
          <Route exact path="/page/:id" component={Test} />
          <Route exact path="/new_blog" component={New_blog} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
