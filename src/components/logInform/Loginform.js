import React, { Component } from 'react';
import "./Loginform.scss";

class Loginform extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler() {
        var lightBox = document.getElementById('lightBox');
        lightBox.style.opacity = '0';
        setTimeout(function () {
            lightBox.style.display = 'none';
        }, 500)
    }
    render() {
        return (
            <React.Fragment>
                <div id='lightBox' className="lightBox">
                    <div id='close' className='close' onClick={this.clickHandler}>×</div>


                    {/* form */}
                    <div className='d-flex'>
                        <div>
                            <img src={require('./images/steakPlated.png')} />
                        </div>
                        <div className="formPattern" style={{ width: '300px' }}>
                            <h3 className='pb-4'>會員登入</h3>
                            <form>
                                <div className="form-group d-flex justify-content-between py-1">
                                    <label>信箱</label>
                                    <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入信箱" />
                                </div>
                                <div className="form-group d-flex justify-content-between py-1">
                                    <label>密碼</label>
                                    <input type="password" className="form-control w-75" id="exampleInputPassword1" placeholder="請輸入密碼" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-1">登入</button>
                                <hr/>
                                <button type="submit" className="btn btn-primary w-100">註冊</button>
                            </form>
                        </div>
                    </div>

                    {/* form */}

                </div>
            </React.Fragment>
        );
    }
    componentDidMount() {
    }
}

export default Loginform;
