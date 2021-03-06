import React, { Component } from 'react';
import './myOrder.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyOrder extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            order: [],
            orderDetail: []
        }
    }
    handleClick = (e) => {
        // e.preventDefault();
        // alert(e.target.dataset.id)
        var order_num = e.currentTarget.dataset.id,
            amount = e.currentTarget.dataset.amount;
        fetch(`http://localhost:3000/users/orderDetail?order_num=${order_num}`, {
            method: 'GET',
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            // alert(a)
            this.setState({ orderDetail: a, amount: amount})
            // console.log(this.state.orderDetail)
            var blackLight = document.getElementById('blackLight');
            blackLight.style.display = 'block';
        })
    }
    handleClick2 = (e) => {
        var blackLight = document.getElementById('blackLight');
        blackLight.style.display = 'none';

    }
    componentDidMount() {
        fetch('http://localhost:3000/session/info', {
            method: 'GET',
            credentials: 'include'
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            fetch(`http://localhost:3000/users/account?sid=${a.sid}`, {
                method: 'GET',
            }).then(function (res) {
                console.log(res);
                return res.json();
            }).then((a) => {
                this.setState({ order: a.reverse() })
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <div id='blackLight' className='blackLight' onClick={this.handleClick2}>
                    <div className='sbox'>
                    <div className='ssbox'>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">產品</th>
                                    <th scope="col">價錢</th>
                                    <th scope="col">數量</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orderDetail.map((item,index) => 
                                    <tr key={index} >
                                        <th scope="row">{item.product_name}</th>
                                        <td>NT$ {item.price}</td>
                                        <td>{item.qty}</td>
                                    </tr>
                                )}
                                <tr style={{borderTop:'2px solid #dee2e6'}}>
                                    <th>總金額：</th>
                                    <th>NT$ {this.state.amount}</th>
                                    <td></td>
                                </tr>
                                {/* <hr style={{width:'100%'}}/> */}
                                <tr style={{height:'100%'}}></tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div className='orderWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>訂單紀錄</h4>
                        <div className='content'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">訂單編號</th>
                                        <th className='non3' scope="col">姓名</th>
                                        <th className='non2' scope="col">手機</th>
                                        <th className='non' scope="col">地址</th>
                                        <th className='non text-nowrap' scope="col">寄送方式</th>
                                        <th className='non text-nowrap' scope="col">送達時間</th>
                                        <th className='non text-nowrap' scope="col">付款方式</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.order.map((item, i) => {
                                        var dateData = new Date(item.ship_date),
                                        created_at = new Date(item.created_at),
                                        shipYear = dateData.getFullYear(),
                                        shipMonth = dateData.getMonth() + 1,
                                        shipDate = dateData.getDate(),
                                        _shipDate = `${shipYear}-${shipMonth}-${shipDate}`,
                                        createYear = created_at.getFullYear(),
                                        createMonth = created_at.getMonth() + 1,
                                        createDate = created_at.getDate(),
                                        createHours = created_at.getHours(),
                                        createMinutes = created_at.getMinutes(),
                                        createSeconds = created_at.getSeconds(),
                                        _createAt = `${createYear}-${createMonth}-${createDate} ${createHours}:${createMinutes}:${createSeconds}`;
                                        return <tr className='shover' style={{ fontSize: '.8em' }} onClick={this.handleClick} data-id={item.order_num} data-amount={item.amount}>
                                            <th style={{ width: '10%' }} scope="row">{item.order_num}<br />{_createAt}</th>
                                            <td className='non3' style={{ width: '10%' }}>{item.name}</td>
                                            <td className='non2' style={{ width: '10%' }}>{item.mobile}</td>
                                            <td className='non'  style={{ width: '20%' }}>{item.zipCode + item.county + item.district}<br />{item.address}</td>
                                            <td className='non'  style={{ width: '10%' }}>{item.ship}</td>
                                            <td className='non'  style={{ width: '10%' }}>{_shipDate}<br />{item.ship_time}</td>
                                            <td className='non'  style={{ width: '10%' }}>{item.pay}</td>
                                        </tr>
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyOrder;