import React, { Component } from "react";
import $ from 'jquery';
import "../content.scss";


class Preface extends Component {
    constructor(props) {
      super(props)

      this.initState2={
        img_name:""
      }

    this.state = {
        inputValue: '使用者の廚房',
        inputValue2: '歡迎來到我的廚房，一起來做美食吧!',
        //上傳圖片檔案
        selectedFile: null,
        //上傳圖片檔名
        img_name:"",
        //搭配initState2讀取資料庫
        members:[],
        member:this.initState2
    }
    
}

    updateInputValue = (evt) => {
        var input_data = evt.target.value;
        this.setState({
            inputValue:input_data,
        })
    }
    updateInputValue2 = (evt) => {
        var input_data2 = evt.target.value;
        this.setState({
            inputValue2:input_data2,
        })
    }

    change_text1 = () =>{
        $("h2").toggleClass("active");
        $(".input1").toggleClass("active");
    }
    change_text2 = () =>{
        $("p").toggleClass("active");
        $(".input2").toggleClass("active");
    }

    // 上傳圖片
    fileSelectedHandler = evt => {
        //圖片檔案
        this.setState({
            selectedFile:evt.target.files[0]
        })
        //圖片名稱
        this.setState({
            img_name:evt.target.files[0].name
        })
    }
    //上傳圖片
    fileUploadHandler = () =>{
        const formdata = new FormData();
        formdata.append('image',this.state.selectedFile,this.state.selectedFile.name);
        fetch("http://localhost:3000/imgup/upload",{
            method:"POST",
            body:formdata
        }).then(function(res){
            return res.json();
        }).then(function(data){
            alert("更新成功")
        })
        //上傳圖片檔名
        fetch('http://localhost:3000/imgup/upload_name', {
            method: 'POST',
            body: JSON.stringify({img_name:this.state.img_name}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(data => {
            this.getMembers();//刷新getMembers function
        })
    }
    //讀取資料
    getMembers() {
        fetch("http://localhost:3000/imgup/upload_name")
            .then(res => res.json())
            .then(members => this.setState({ 
                members: members,
                member:this.initState2,
                type:'add'
            }))
    }
    componentDidMount() {
        this.getMembers();
    }
    
    render() {
        return (
                <React.Fragment>
                    <div className="slider">
                        <div className="imgup">
                            {this.state.members.map(member =>
                                <img src={(`http://localhost:3000/imgup/${member.img_name}`)} alt="" />
                            )}
                        </div>
                        <div className="blog_text">
                            <div className="header d-flex">
                                <h2>{this.state.inputValue}</h2>
                                <input className="input input1 active" value={this.state.inputValue} onChange={this.updateInputValue}/>
                                <i class="far fa-edit" onClick={this.change_text1}></i>
                            </div>
                            <div className="content d-flex">
                                <p>{this.state.inputValue2}</p>
                                <input className="input input2 active" value={this.state.inputValue2} onChange={this.updateInputValue2}/>
                                <i class="far fa-edit" onClick={this.change_text2}></i>
                            </div>
                        </div>
                        <div className="blog_text_button">
                            <button class="action-button shadow animate yellow change_blog_img" data-toggle="modal" data-target="#exampleModal2" to="#">更改圖片</button>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">圖片上傳</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="facebook_link input_br">
                                        <span>選擇圖片：</span>
                                        <div className="upload_img">
                                            <input className="img_up" type="file" id="img_name" onChange={this.fileSelectedHandler}/>
                                            <button onClick={this.fileUploadHandler}>上傳</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </React.Fragment>
        );
    }
}

export default Preface;
