import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './MemberCenter.scss';

class MemberCenter extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            userName: '',
            profile: 'chef.png',
            source: 'http://localhost:3000/uploads/',
        }
    }
    componentDidMount = () => {
        var userName = document.getElementById('userName');
        fetch('http://localhost:3000/session/info', {
            method: 'GET',
            credentials: 'include'
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            this.setState({ userName: a.nickname });
            if(a.profile!=null){
                this.setState({ profile: a.profile });
            } else {
                this.setState({ profile: 'chef.png' });
            }
        })
            .catch(function (err) {
                console.log(err);
                //alert(err);
            })
    }
    clickHandler() {
        // this.classList.remove("active");
    }
    logout() {
        fetch('http://localhost:3000/session/logout', {
            method: 'GET',
        })
    }
    handleError = (e) => {
        // alert('wrong');
        e.target.src = 'http://localhost:3000/uploads/chef.png';
    }
    handleChange = (e) => {
        var uploadForm = document.getElementById('uploadForm');
        uploadForm.submit();
    }
    render() {
        return (
            <React.Fragment>
               
                {/* <div className='mt-3 p-4' style={{ width: '250px' }}></div> */}
                <div className='centerWrap mt-3 mb-3 d-flex flex-column p-4 '>
                    <div className='text-center'>
                        <form id='uploadForm' enctype="multipart/form-data" action='http://localhost:3000/upload' method='post'>
                            <input name='file' onChange={this.handleChange} type='file' style={{ position: 'absolute', height: '60px',transform:'transLateX(-100px)', width: '200px', opacity: '0',cursor:'pointer' }}></input>
                        </form>
                        <img className='profile my-2 mr-2' style={{ width: '60px',height:'60px',borderRadius:'50%' }} src={this.state.source+this.state.profile} onError={this.handleError}/>
                        <span id='userName' className='text-primary' style={{ fontWeight: '600' }}>{this.state.userName}</span>
                    </div>
                    <div>
                        <h3 className='py-3 rubberBand acTitle' style={{fontWeight:'600'}}>帳號管理</h3>
                        <div className='bb'></div>
                    </div>
                    <div>
                        <ul>
                            <li><NavLink activeClassName="active" className='a' style={{ fontWeight: '600' }} to='/memberCenter/basicInfo'>基本資料</NavLink></li>
                            <li><NavLink activeClassName="active" className='a' style={{ fontWeight: '600' }} to='/memberCenter/myOrder'>訂單紀錄</NavLink></li>
                            <li><NavLink activeClassName="active" className='a' style={{ fontWeight: '600' }} to='/memberCenter/favorite'>收藏清單</NavLink></li>
                            <li><NavLink activeClassName="active" className='a' style={{ fontWeight: '600' }} to='/memberCenter/subscription'>訂閱通知</NavLink></li>
                            {/* <li><NavLink activeClassName="active" className='a' style={{ fontWeight: '600' }} to='/memberCenter/myService'>客服系統</NavLink></li> */}
                            {/* <li><NavLink activeClassName="active" className='a' style={{ fontWeight: '600' }} to='/memberCenter/myService'>部落格</NavLink></li> */}
                        </ul>
                    </div>
                    <a href='http://localhost:3000/session/logout' style={{ textDecoration: 'none' }}>
                        <div id='logout' className='mt-2 logout' onClick={this.logout} style={{ cursor: 'pointer' }}>
                            <img className='my-2 mr-3' style={{ width: '15px' }} src={require('./images/Group162.png')} />
                            <span style={{ fontWeight: '600',color:'#FF4343'}}>登出</span>
                        </div></a>
                </div>
            </React.Fragment>
        )
    }
}


export default MemberCenter;