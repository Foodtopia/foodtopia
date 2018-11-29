import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Login.scss";


class Login extends Component {
    constructor(props) {
        super(props);
    }
    checkOut(e) {
        e.preventDefault();
        let email = document.getElementById('email');
        let pw1 = document.getElementById('pw1');
        let registerFrom = document.getElementById('registerFrom');
        if (email.value == '' || pw1.value == '') {
            alert('請確認欄位是否有填寫')
            return false;
        } ;
        fetch('http://localhost:3000/users/account',{method:'POST',mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: pw1.value,
        })}).then(function(res){
            return res.text();
        }).then(function(res){
            if(res=='wrong'){
                alert('此帳號不存在或密碼不正確');
            } else {
                console.log(res)
                registerFrom.submit();
            }
        })
        
    }
    render() {
        return (
            <React.Fragment>
                <div className='wrapLogin'>
                    <img className='bgtable' src={require('./images/tables.jpg')} />
                    <div className='container'>
                        <div className='d-flex justify-content-center align-items-center mt-3 mb-5 login flex-md-row flex-column-reverse'>
                            {/* <div className='d-flex fadeInLeft'>
                            <img className='' src={require('./images/steakPlated.png')} />
                        </div> */}
                            <div class="formPattern fadeIn" style={{ width: '300px' }}>
                                <form id='registerFrom' action='http://localhost:3000/session/user' method='post'>
                                    <h3 className='pb-4 text-center'>會員登入</h3>
                                    <div class="form-group  py-1">
                                        <label>Email :</label>
                                        <input id='email' name='email' type="email" class="w-100 form-control w-75" aria-describedby="emailHelp" placeholder="請輸入信箱" />
                                    </div>
                                    <div class="form-group  py-1">
                                        <label>密碼 :</label>
                                        <input id='pw1' name='password' type="password" class="w-100 form-control w-75" aria-describedby="emailHelp" placeholder="請輸入密碼" />
                                    </div>
                                    {/* <Link to='/registerSuccessful'> */}
                                    <button id='loginBtn' onClick={this.checkOut} type="submit" class="btn btn-primary w-100 py-2 btn1 btn-sm">登入</button>
                                    {/* </Link> */}
                                    {/* <small className="text-center"><span className="text-primary">忘記密碼</span></small> */}
                                    <hr />
                                    <div className=''>
                                        <small className="text-center py-3"><span className="text-dark">還不是會員嗎?</span></small>
                                        <br />
                                        <Link to='/register'><button type="submit" class="btn btn-primary btn-sm py-2 w-100">立即註冊</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default Login;
