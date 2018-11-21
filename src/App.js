import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Content_January from "./components/content/content_January";
import Content_February from "./components/content/content_February";
import Content_March from "./components/content/content_March";
import Content_April from "./components/content/content_April";
import Content_May from "./components/content/content_May";
import Content_June from "./components/content/content_June";
import Content_July from "./components/content/content_July";
import Content_August from "./components/content/content_August";
import Content_September from "./components/content/content_September";
import Content_October from "./components/content/content_October";
import Content_November from "./components/content/content_November";
import Content_December from "./components/content/content_December";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="">
            <Navbar />
            <div className="">
              <Route path="/blog/index" component={Content} />
              {/* 月份統整食譜 */}
              <Route path="/blog/January" component={Content_January} />
              <Route path="/blog/February" component={Content_February} />
              <Route path="/blog/March" component={Content_March} />
              <Route path="/blog/April" component={Content_April} />
              <Route path="/blog/May" component={Content_May} />
              <Route path="/blog/June" component={Content_June} />
              <Route path="/blog/July" component={Content_July} />
              <Route path="/blog/August" component={Content_August} />
              <Route path="/blog/September" component={Content_September} />
              <Route path="/blog/October" component={Content_October} />
              <Route path="/blog/November" component={Content_November} />
              <Route path="/blog/December" component={Content_December} />
            </div>
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
