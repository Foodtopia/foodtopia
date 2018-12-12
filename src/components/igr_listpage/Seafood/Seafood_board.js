import React, { Component } from 'react';

class Seafood_board extends Component {

  constructor(props){
    super(props);
  }

  render() {
      return (
        <React.Fragment>
        <div className="board_sec container">
          <img src={require(`../igr_img/${this.props.match.params.ipimg}.jpg`)} alt="oops" />

          <div className="board_right">
          <h2>{this.props.match.params.ipname}</h2>
                <h4>產品價格: {this.props.match.params.iprice}元</h4>
                <h4>產品規格: {this.props.match.params.ispec}</h4>
                <p>鮮美肉質紮實充滿彈性，新鮮保藏。</p>
                <hr/>
            <button type="button" class="btn btn-info">加入購物車</button>
            <p>Foodtopia 提供最多元及新鮮食材給你!</p>
            <p>產品編號:{this.props.match.params.ipid}</p>
          </div>
        </div>  
      </React.Fragment>
      )
    }
  }
    
  export default Seafood_board;