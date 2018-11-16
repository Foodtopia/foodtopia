import React, { Component } from 'react';
import './BasicInfo.scss';
import { Link } from 'react-router-dom';

class BasicInfo extends Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <React.Fragment>
                <div className='basicWrap'>
                    <div className='profileImg mx-auto my-3'>
                        <img src={require('./images/profile.png')} />
                    </div>
                    <div className='text-center'>
                        <label className='mr-3'>上傳大頭貼</label>
                        <button className='btn btn-btn-secondary btn-sm' type='button'>選擇檔案</button>
                    </div>
                    <div className='infoWrap m-5 p-3'>
                        <form>
                            <h4 className='infoTitle p-3'>基本資料</h4>
                            <table className=''>
                                <tr>
                                    <td><span className='text-danger'>*</span>顯示暱稱</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>帳號</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>密碼</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>真實姓名</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>性別</td>
                                    <td>
                                        <select>
                                            <option></option>
                                            <option>男生</option>
                                            <option>女生</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>生日</td>
                                    <td>
                                    <input type='date'></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>手機</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>郵遞區號</td>
                                    <td><input className='' size='70' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>郵件地址</td>
                                    <td><input className='' size='70' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>個人簡介 </td>
                                    <td><textarea cols="70" rows="5"></textarea></td>
                                </tr>
                                <tr>
                                    <td>部落格網址</td>
                                    <td><input className='' size='70' type='text'></input></td>
                                </tr>
                            </table>
                            <div className='text-center my-3'>
                                <button className='btn btn-success w-25'>儲存變更</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BasicInfo;