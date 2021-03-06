import React, {Component} from 'react';
import {Button, Container, Row, Col, Modal,
  ModalHeader,
  ModalBody,
  ModalFooter} from 'reactstrap';
import './Order.scss';

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        product_id: '',
        product_name: '',
        product_img: 'PG1101',
        price: '',
        spec: '',
        description: ''
      },
      modal: false
    }
  }

  checkout = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/order/order', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({fields: this.props.fields, products: this.props.products, amount: this.props.amount})
      })
      .then(res => res.json())
      .then(message => console.log(message))
      .then(() => this.props.step(3));
  }

  lastStep = (evt) => {
    evt.preventDefault();
    this
      .props
      .step(1);

  }

  product = (evt) => {
    let product = this.state.product
    product['product_id'] = evt.target.dataset.product_id
    product['product_name'] = evt.target.dataset.product_name
    product['product_img'] = evt.target.dataset.product_img
    product['price'] = evt.target.dataset.price
    product['spec'] = evt.target.dataset.spec
    product['description'] = evt.target.dataset.description
    this.setState({product})
    this.modalToggle()
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const ymd = () => {
      let day = this.props.fields.date,
        time = this.props.fields.time,
        year = day.getFullYear(),
        month = day.getMonth() + 1,
        date = day.getDate(),
        hours = time.getHours();
      return `${year}/${month}/${date} ${hours}:00 前送達`
    }

    return (
      <React.Fragment>
        <div className='formContent productContent'>
          <div className='contentTitle'>訂單詳情</div>
          <div className='titleBackground'></div>
          <Container>
            <Row className='infoRow'>
              <Col sm={3} xs={2} className='productTitle'></Col>
              <Col xs={3} className='productTitle'>品名</Col>
              <Col sm={2} xs={1} className='productTitle'>數量</Col>
              <Col sm={2} xs={3} className='productTitle'>單價</Col>
              <Col sm={2} xs={3} className='productTitle'>總價</Col>
            </Row>
            {this
              .props
              .products
              .map(product => <Row className='infoRow' key={product.sid}>
                <Col
                  sm={{
                  size: 2,
                  offset: 1
                }}
                  xs={{
                  size: 2,
                  offset: 0
                }}
                  className='productDetail'>
                  <img
                    className='productImg'
                      data-product_id={product.product_id}
                      data-product_name={product.product_name}
                      data-product_img={product.product_img}
                      data-price={product.price}
                      data-spec={product.spec}
                      data-description={product.description}
                      onClick={this.product}
                    src={require(`../igr_listpage/igr_img/${product.product_img}.jpg`)}/>
                </Col>
                <Col xs={3} className='px-0'>
                  <Col className='productName'>{product.product_name}</Col>
                  <Col className='productSpec'>{product.spec}</Col>
                </Col>
                <Col sm={2} xs={1} className='productDetail'>{product.qty}</Col>
                <Col sm={2} xs={3} className='productDetail'>NT$ {product.price}</Col>
                <Col sm={2} xs={3} className='productDetail'>NT$ {product.qty * product.price}</Col >
              </Row>)}
            <hr className='line1'/>
            <Row className='infoRow'>
              <Col
                md={{
                size: 3,
                offset: 7
              }}
                xs={{
                size: 6,
                offset: 3
              }}
                className='amountTitle'>結帳總金額：
              </Col>
              <Col md={2} xs={3} className='amount'>NT$ {this.props.amount}
              </Col>
            </Row>
          </Container>
        </div>
        <div className='formContent'>
          <div className='contentTitle'>訂單資訊</div>
          <div className='titleBackground'></div>
          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>姓名：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{this.props.fields.name}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>市話：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{this.props.fields.tel}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>手機：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{this.props.fields.mobile}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>地址：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{`${this.props.fields.zipCode} ${this.props.fields.county} ${this.props.fields.district} ${this.props.fields.address}`}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>寄送方式：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{this.props.fields.ship}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>收件時間：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{ymd()}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>備註事項：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{this.props.fields.note}</Col>
          </Row>

          <Row className='infoRow checkInfo'>
            <Col md={2} sm={3} className='inputLabel'>付款方式：</Col>
            <Col md={10} sm={9} className='colPadding orderInfo'>{this.props.fields.pay}</Col>
          </Row>
        </div>
        <Row>
          <Col lg={3} xs={5}>
            <Button className='btnNext' color='primary' onClick={this.lastStep}>上一步</Button>
          </Col>
          <Col
            lg={{
            size: 3,
            offset: 6
          }}
            xs={{
            size: 5,
            offset: 2
          }}>
            <Button className='btnNext' color='danger' onClick={this.checkout}>確認結帳</Button>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className='product_modal'>
          <Container>
            <ModalHeader toggle={this.modalToggle} className='modal_header'>產品詳情：</ModalHeader>
            <ModalBody>
              <Row>
                <Col xs={5}>
                  <img
                    src={require(`../igr_listpage/igr_img/${this.state.product.product_img}.jpg`)}
                    className="img-fluid img-thumbnail product_img"
                    alt=""/>
                </Col>
                <Col className='px-0' xs={7}>
                  <Col className='product_name'>{this.state.product.product_name}</Col>
                  <Col className='product_spec'>{this.state.product.spec}</Col>
                  <Col className='product_price'>平台優惠價：
                    <span>NT$ {this.state.product.price}</span>
                  </Col>
                  <Col>{this.state.product.description}</Col>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Container>
        </Modal>
      </React.Fragment>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {}
}

export default OrderStep2;
