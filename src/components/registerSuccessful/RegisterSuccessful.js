import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./RegisterSuccessful.scss";

class RegisterSuccessful extends Component {
    constructor(prop) {
        super(prop)
    }
    handleClick = (e) => {
        var email = localStorage.getItem("email")  
        var form1 = document.createElement("form");
        form1.id = "form1";
        form1.name = "form1";
        document.body.appendChild(form1);
        var input = document.createElement("input");
        input.type = "text";
        input.name = "email";
        input.value = email;
        form1.appendChild(input);
        form1.method = "POST";
        form1.action = "http://localhost:3000/api/resend";
        form1.submit();
        document.body.removeChild(form1);
    }
    render() {
        return (
            <React.Fragment>
                <div className="registerSuccess container d-flex flex-column justify-content-center align-items-center">
                    <div className='mt-5 mb-4'>
                        <h3 className="text-align">註冊成功</h3>
                    </div>
                    <div>
                        <img className='tada' src={require('./images/checkOK.png')} />
                    </div>
                    <div className="text-center mt-4"><p>驗證信已寄到您的Email,請點擊信件內連結以驗證你的Email<br />若沒有收到驗證信請點擊重新寄出按鈕</p></div>
                    <div className="d-flex my-3 flex-md-row flex-column">
                        <Link to='/login'><button className='btn btn1 btn-lg text-light btn-danger mx-3 my-1' type="button">立即登入</button></Link>
                        <button className='btn btn2 btn-lg btn-outline-danger mx-3 my-1' type="button" onClick={this.handleClick}>重新寄送確認信</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RegisterSuccessful;