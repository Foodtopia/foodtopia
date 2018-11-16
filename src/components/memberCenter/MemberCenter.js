import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MemberCenter.scss';

class MemberCenter extends Component {
    constructor(prop) {
        super(prop)
    }
    clickHandler(){
        // this.classList.remove("active");
    }
    render() {
        return (
            <React.Fragment>
                <div className='centerWrap mt-3 d-flex flex-column p-4'>
                    <div>
                        <img className='my-2 mr-2' style={{ width: '45px' }} src={require('./images/Group158.png')} />
                        Hi UserName
                    </div>
                    <div>
                        <h3 className='py-3'>帳號管理</h3>
                    </div>
                    <div>
                        <ul>
                            <li><Link className='a active' to='/memberCenter/basicInfo'>基本資料</Link></li>
                            <li><Link className='a' to='/memberCenter/'>訂閱通知</Link></li>
                            <li><Link className='a' to='/memberCenter/'>收藏清單</Link></li>
                            <li><Link className='a' to='/memberCenter/'>我的訂單</Link></li>
                            <li><Link className='a' to='/memberCenter/'>客服系統</Link></li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <img className='my-2 mr-3' style={{ width: '15px' }} src={require('./images/Group162.png')} />
                        登出
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default MemberCenter;