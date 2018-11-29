import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Cart.scss";
// import Products from "./Cart.json";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      product: {
        id: "",
        name: "",
        note: "",
        num: "",
        img: "",
        perPrice: ""
      },
      amount: '',
      email: ''
    }
  }

  getSession = () => {
    // session 使否已經登入判斷 用來讀取資料用
    fetch('http://localhost:3000/session/info', {
        method: 'GET',
        credentials: 'include'
      })
      .then(function (res) {
        return res.json();
      })
      .then((session) => {
        if (session.login == 1) {
          console.log('已經登入');
          let email = session.email
          this.setState({email: email})
          this.getCart();
        } else {
          console.log('未登入');
        }
      })
  }

  getCart = () => {
    fetch("http://localhost:3000/cart/cart", {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({email: this.state.email})
      })
      .then(res => res.json())
      .then(cart => this.setState({products: cart}))
      .then(cart => {
        var amount = this
          .state
          .products
          .reduce((amount, product) => (amount += product.price * product.qty), 0)
        this.setState({amount: amount})
      })
  }

  // getAmount = () => {
  //   let products = this.state.products;
  //   let amount = 0
  //   for (let i = 0; i < products.length; i++) {
  //     amount += products[i].price * products[i].qty
  //   }
  //   let amount = this
  //     .state
  //     .products
  //     .reduce((amount, product) => (amount += product.price * product.qty), 0)
  //   this.setState({amount: amount})
  // }

  render() {
    return (
      <React.Fragment>
        <div id='cart' className='cart'>
          <div className='title'>購物車</div>
          <div>
            {this
              .state
              .products
              .map(product => <div className='row my-2'>
                <div className='col-5 productImg'>
                  <img src={require(`./images/${product.product_img}.jpeg`)}/>
                </div>
                <div className='col-7 productName'>
                  <span>{product.product_name}</span><br/>
                  <span>{product.description}</span>
                </div>
                <div className='col-5 productNum'>
                  <span className='btnMinus'>
                    <i class="fas fa-minus"></i>
                  </span>
                  <span>{product.qty}</span>
                  <span className='btnPlus'>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className='col-7 productPrice'>
                  <span>NT$
                  </span>
                  <span>{product.price * product.qty}</span>
                </div>
              </div>)}
          </div>
          <div className='container'>
            <hr className='line1'/>
          </div>
          <div className='totalPrice'>
            <span>總計: NT$ {" "}
            </span>
            <span>
              {this.state.amount}</span>
          </div>
          <Link to='/order/step1'>
            <button
              onClick={this.props.cartToggle}
              type="submit"
              class="btn btnCheckOut d-flex px-5">開始結帳</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getSession();
  }

  componentDidUpdate() {
    console.log(this.state);
  }
}

export default Cart;
