import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Container, Row, Col} from 'reactstrap';
import "./Cart.scss";
// import Products from "./Cart.json";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      amount: '',
      email: '',
      product: {
        sid: "",
        qty: "",
      }
    }
  }

  getCart = () => {
    // 先取得session.email，再撈取個人購物車
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      credentials: 'include'
    }).then(res => {
      return res.json();
    }).then(session => {
      let email = session.email
      fetch("http://localhost:3000/cart/cart", {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(cart => {
          let amount = cart.reduce((amount, product) => (amount += product.price * product.qty), 0)
          this.setState({products: cart, amount: amount, email: email})
        })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id='cart' className='cart'>
          <div className='title'>購物車</div>
          <div>
            {this
              .state
              .products
              .map(product => <Row key={product.sid} className='pt-2'>
                <Col sm={5}>
                  <Col>
                    <img
                      className='productImg'
                      src={require(`./images/${product.product_img}.jpeg`)}/>
                  </Col>
                  <Col className='productQty'>
                    <Button color='danger' className='btnMP' data-id={product.sid} data-type="min" onClick={this.handler}>
                      <i className="fas fa-minus"></i>
                    </Button>
                      {product.qty}
                    <Button color='danger' className='btnMP' data-id={product.sid} data-type="plus" onClick={this.handler}>
                      <i className="fas fa-plus"></i>
                    </Button>
                  </Col>
                </Col>
                <Col className='productInfo' sm={5}>
                  <Col className='productName'>{product.product_name}</Col>
                  <Col className='productSpec'>{product.spec}</Col>
                  <Col className='productPrice'>NT$ {product.price * product.qty}</Col>
                </Col>
                <Col className='btnDelete' sm={2}>
                <span>
                <i className="fas fa-trash-alt"></i>
                </span>
                </Col>

              </Row>)}
          </div>
          <Container>
            <hr className='line1'/>
          </Container>
          <Col className='totalPrice'>
            總計: NT$ {this.state.amount}
          </Col>
          <Row>
            <Col sm={{
              size: 6,
              offset: 3
            }}>
              <Link to='/order/step1'>
                <Button color='danger' onClick={this.props.cartToggle} className="btnCheckOut">結帳</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getCart();
  }

  componentDidUpdate() {
    console.log(this.state);
  }
}

export default Cart;
