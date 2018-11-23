import React from "react";

class Sec2 extends React.Component {
  render() {
    return <div className="b_container">
  <h2>生鮮食材</h2>
  <nav className="nav nav-pills nav-justified">
    <a className="nav-item nav-link" href="#">
      <img src="./image/test7.jpg" alt />
      肉類
    </a>
    <a className="nav-item nav-link" href="#">
      <img src="./image/test7.jpg" alt />
      新鮮蔬菜
    </a>
    <a className="nav-item nav-link" href="#">
      <img src="./image/test7.jpg" alt />
      新鮮水果
    </a>
    <a className="nav-item nav-link disabled" href="#">
      <img src="./image/test7.jpg" alt />
      乳製品
    </a>
    <a className="nav-item nav-link disabled" href="#">
      <img src="./image/test7.jpg" alt />
      海鮮
    </a>
    <a className="nav-item nav-link disabled" href="#">
      <img src="./image/test7.jpg" alt />
      食物櫃
    </a>            
  </nav>
    </div>;
  }

}

export default Sec2;