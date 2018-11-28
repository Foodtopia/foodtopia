import React, { Component } from "react";
import "./upload_header_img.scss";
import $ from "jquery";

class Upload_header_img extends Component {
    constructor(props) {
      super(props)
      this.state = {
        display:"block"
      }
}

componentDidMount(){
    //下拉式選單樣式js
    var util = {
        f: {
            addStyle: function (elem, prop, val, vendors) {
                var i, ii, property, value
                if (!util.f.isElem(elem)) {
                    elem = document.getElementById(elem)
                }
                if (!util.f.isArray(prop)) {
                    prop = [prop]
                    val = [val]
                }
                for (i = 0; i < prop.length; i += 1) {
                    var thisProp = String(prop[i]),
                        thisVal = String(val[i])
                    if (typeof vendors !== "undefined") {
                        if (!util.f.isArray(vendors)) {
                            vendors.toLowerCase() == "all" ? vendors = ["webkit", "moz", "ms", "o"] : vendors = [vendors]
                        }
                        for (ii = 0; ii < vendors.length; ii += 1) {
                            elem.style[vendors[i] + thisProp] = thisVal
                        }
                    }
                    thisProp = thisProp.charAt(0).toLowerCase() + thisProp.slice(1)
                    elem.style[thisProp] = thisVal
                }
            },
            cssLoaded: function (event) {
                var child = util.f.getTrg(event)
                child.setAttribute("media", "all")
            },
            events: {
                cancel: function (event) {
                    util.f.events.prevent(event)
                    util.f.events.stop(event)
                },
                prevent: function (event) {
                    event = event || window.event
                    event.preventDefault()
                },
                stop: function (event) {
                    event = event || window.event
                    event.stopPropagation()
                }
            },
            getSize: function (elem, prop) {
                return parseInt(elem.getBoundingClientRect()[prop], 10)
            },
            getTrg: function (event) {
                event = event || window.event
                if (event.srcElement) {
                    return event.srcElement
                } else {
                    return event.target
                }
            },
            isElem: function (elem) {
                return (util.f.isNode(elem) && elem.nodeType == 1)
            },
            isArray: function(v) {
                return (v.constructor === Array)
            },
            isNode: function(elem) {
                return (typeof Node === "object" ? elem instanceof Node : elem && typeof elem === "object" && typeof elem.nodeType === "number" && typeof elem.nodeName==="string" && elem.nodeType !== 3)
            },
            isObj: function (v) {
                return (typeof v == "object")
            },
            replaceAt: function(str, index, char) {
                return str.substr(0, index) + char + str.substr(index + char.length);
            }
        }
    },
    form = {
    f: {
        init: {
            register: function () {
                console.clear()// just cuz codepen
                var child, children = document.getElementsByClassName("field"), i
                for (i = 0; i < children.length; i += 1) {
                    child = children[i]
                    util.f.addStyle(child, "Opacity", 1)
                }
                children = document.getElementsByClassName("psuedo_select")
                for (i = 0; i < children.length; i += 1) {
                    child = children[i]
                    child.addEventListener("click", form.f.select.toggle)
                }
            },
            unregister: function () {
                //just here as a formallity
                //call this to stop all ongoing timeouts are ready the page for some sort of json re-route
            }
        },
        select: {
            blur: function (field) {
                field.classList.remove("focused")
                var child, children = field.childNodes, i, ii, nested_child, nested_children
                for (i = 0; i < children.length; i += 1) {
                    child = children[i]
                    if (util.f.isElem(child)) {
                        if (child.classList.contains("deselect")) {
                            child.parentNode.removeChild(child)
                        } else if (child.tagName == "SPAN") {
                            if (!field.dataset.value) {
                                util.f.addStyle(child, ["FontSize", "Top"], ["16px", "32px"])
                            }
                        } else if (child.classList.contains("psuedo_select")) {
                            nested_children = child.childNodes
                            for (ii = 0; ii < nested_children.length; ii += 1) {
                                nested_child = nested_children[ii]
                                if (util.f.isElem(nested_child)) {
                                    if (nested_child.tagName == "SPAN") {
                                        if (!field.dataset.value) {
                                            util.f.addStyle(nested_child, ["Opacity", "Transform"], [0, "translateY(24px)"])
                                        }
                                    } else if (nested_child.tagName == "UL") {
                                            util.f.addStyle(nested_child, ["Height", "Opacity"], [0, 0])
                                    }
                                }
                            }
                        }
                    }
                }
            },
            focus: function (field) {
                field.classList.add("focused")
                var bool = false, child, children = field.childNodes, i, ii, iii, nested_child, nested_children, nested_nested_child, nested_nested_children, size = 0
                for (i = 0; i < children.length; i += 1) {
                    child = children[i]
                }
                if (!bool) {
                    child = document.createElement("div")
                    child.className = "deselect"
                    child.addEventListener("click", form.f.select.toggle)
                    field.insertBefore(child, children[0])
                }
                for (i = 0; i < children.length; i += 1) {
                    child = children[i]
                    if (util.f.isElem(child) && child.classList.contains("psuedo_select")) {
                        nested_children = child.childNodes
                        for (ii = 0; ii < nested_children.length; ii += 1) {
                            nested_child = nested_children[ii]
                            if (util.f.isElem(nested_child) && nested_child.tagName == "UL") {
                                size = 0
                                nested_nested_children = nested_child.childNodes
                                for (iii = 0; iii < nested_nested_children.length; iii += 1) {
                                    nested_nested_child = nested_nested_children[iii]
                                    if (util.f.isElem(nested_nested_child) && nested_nested_child.tagName == "LI") {
                                        size += util.f.getSize(nested_nested_child, "height")
                                        console.log("size: " + size)
                                    }
                                }
                                util.f.addStyle(nested_child, ["Height", "Opacity"], [size + "px", 1])
                            }
                        }
                    }
                }
            },
            selection: function (child, parent) {
                var children = parent.childNodes, i, ii, nested_child, nested_children, time = 0, value
                if (util.f.isElem(child) && util.f.isElem(parent)) {
                    parent.dataset.value = child.dataset.value
                    value = child.innerHTML
                }
                for (i = 0; i < children.length; i += 1) {
                    child = children[i]
                    if (util.f.isElem(child)) {
                        if (child.classList.contains("psuedo_select")) {
                            nested_children = child.childNodes
                            for (ii = 0; ii < nested_children.length; ii += 1) {
                                nested_child = nested_children[ii]
                                if (util.f.isElem(nested_child) && nested_child.classList.contains("selected")) {
                                    if (nested_child.innerHTML)  {
                                        time = 1E2
                                        util.f.addStyle(nested_child, ["Opacity", "Transform"], [0, "translateY(24px)"], "all")
                                    }
                                    setTimeout(function (c, v) {
                                        c.innerHTML = v
                                        util.f.addStyle(c, ["Opacity", "Transform", "TransitionDuration"], [1, "translateY(0px)", ".1s"], "all")
                                    }, time, nested_child, value)
                                }
                            }
                        } else if (child.tagName == "SPAN") {
                            util.f.addStyle(child, ["FontSize", "Top"], ["12px", "8px"])
                    }
                }
                }
            },
            toggle: function (event) {
                util.f.events.stop(event)
                var child = util.f.getTrg(event), children, i, parent
                switch (true) {
                    case (child.classList.contains("psuedo_select")):
                    case (child.classList.contains("deselect")):
                        parent = child.parentNode
                        break
                    case (child.classList.contains("options")):
                        parent = child.parentNode.parentNode
                        break
                    case (child.classList.contains("option")):
                        parent = child.parentNode.parentNode.parentNode
                        form.f.select.selection(child, parent)
                        break
                }
                parent.classList.contains("focused") ? form.f.select.blur(parent) : form.f.select.focus(parent)
            }
        }
    }}
    window.onload = form.f.init.register

    // 按鈕特效
    var animateButton = function(e) {

        e.preventDefault();
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },500);
    };
    
    var bubblyButtons = document.getElementsByClassName("bubbly-button");
    
    for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
    }

    //新增欄位
    var i =5;
    $("#new_step").on('click',function(){
        var newitem = `<div class="upload_step">
                            <div class="step_number_step d-flex">
                                <from class="input_step_form col-4">
                                    <i class="fas fa-camera-retro camera_icon"></i>
                                    <div class="upload_camera"></div>
                                    <input type="file" class="step_img" />
                                </from>
                                <div class="upload_number_step d-flex col-8 ">
                                    <p class="step_number">${i}</p>
                                    <div class="step_icons">
                                        <i class="step_icon far fa-trash-alt"></i>
                                        <br />
                                        <textarea class="step_introduction" placeholder="步驟敘述..."/>
                                    </div>
                                </div>
                            </div>
                        </div>`
        if (i<=9) {
            $('.recipe_step').append(newitem);
            i=i+1
        } else {
            return false;
        }
    })
    var n =5;
    //新增食材
    $("#new_ingredient").on('click',function(){
        var newitem1 = `<label id="img_category_label"class="field field${n}"for="img_category"data-value="" style="opacity: 1;">
                            <span>食材類別</span>
                            <div id="img_category"class="psuedo_select"name="img_category">
                                <span class="selected"></span>
                                <ul id="img_category_options"class="options">
                                    <li class="option"data-value="opt_1">肉類</li>
                                    <li class="option"data-value="opt_2">奶蛋類</li>
                                    <li class="option"data-value="opt_3">海鮮</li>
                                    <li class="option"data-value="opt_3">調料</li>
                                </ul>
                            </div>
                        </label>`
        var newitem2 = `<label id="img_category_label"class="field field${n}"for="img_category"data-value="" style="opacity: 1;">
                            <span></span>
                            <div id="img_category"class="psuedo_select"name="img_category">
                                <span class="selected"></span>
                                <ul id="img_category_options"class="options">
                                    <li class="option"data-value="opt_1"></li>
                                    <li class="option"data-value="opt_2"></li>
                                    <li class="option"data-value="opt_3"></li>
                                    <li class="option"data-value="opt_4"></li>
                                </ul>
                            </div>
                        </label>`
        var newitem3 = `<input type="text"></input><img src="./static/media/delete.f45cd336.jpg" class="delete_icon" alt="" /><br />`
        if (n<=9) {
            $('.ingredients_left ').append(newitem1);
            $('.ingredients_right .input_option').append(newitem2);
            $('.upload_ingredients .input_option').append(newitem3);
            n=n+1
        } else {
            return false;
        }
    })
}
    render() {
        return (    
            <React.Fragment>
                <div className="container d-flex">
                    <div className="upload_header container">
                        {/* 食譜名稱,食譜照上傳 */}
                        <from className="input_form">
                            <input className="form-control header" type="text" placeholder="食譜名稱" aria-label="Search" />
                            <img className="chicken_img" src={require("./img/th.png")} alt="" />
                            <div className="upload_chicken"></div>
                            <img className="line_img" src={require("./img/line_img.png")} alt="" />
                            <input type="file" className="recipe_header_img" />
                        </from>
                        {/* 食譜時間,份量,難度 */}
                        <div className="recipe_dropdowns">
                            <label id="img_category_label"class="field field1"for="img_category"data-value="">
                                <span>烹飪時間</span>
                                <div id="img_category"class="psuedo_select"name="img_category">
                                    <span class="selected"></span>
                                    <ul id="img_category_options"class="options">
                                        <li class="option"data-value="opt_1">15分鐘</li>
                                        <li class="option"data-value="opt_2">30分鐘</li>
                                        <li class="option"data-value="opt_3">45分鐘</li>
                                        <li class="option"data-value="opt_4">60分鐘</li>
                                    </ul>
                                </div>
                            </label>
                            <label id="img_category_label"class="field field2"for="img_category"data-value="">
                                <span>份量</span>
                                <div id="img_category"class="psuedo_select"name="img_category">
                                    <span class="selected"></span>
                                    <ul id="img_category_options"class="options">
                                        <li class="option"data-value="opt_1">1人份</li>
                                        <li class="option"data-value="opt_2">2人份</li>
                                        <li class="option"data-value="opt_3">3人份</li>
                                        <li class="option"data-value="opt_4">4人份</li>
                                    </ul>
                                </div>
                            </label>
                            <label id="img_category_label"class="field field3"for="img_category"data-value="">
                                <span>難度</span>
                                <div id="img_category"class="psuedo_select"name="img_category">
                                    <span class="selected"></span>
                                    <ul id="img_category_options"class="options">
                                        <li class="option"data-value="opt_1">簡單</li>
                                        <li class="option"data-value="opt_2">中等</li>
                                        <li class="option"data-value="opt_3">困難</li>
                                    </ul>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="upload_Introduction container">
                        {/* 食譜簡介 */}
                        <from>
                            <textarea className="introduction" placeholder="食譜簡介..."/>
                        </from>
                        {/* 食譜食材 */}
                        <div className="recipe_ingredients_all d-flex">
                            <div className="recipe_ingredients ingredients_left">
                                <p>類別</p>
                                <div className="input_option">
                                    <label id="img_category_label"class="field field1"for="img_category"data-value="">
                                        <span>食材類別</span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1">肉類</li>
                                                <li class="option"data-value="opt_2">奶蛋類</li>
                                                <li class="option"data-value="opt_3">海鮮</li>
                                                <li class="option"data-value="opt_3">調料</li>
                                            </ul>
                                        </div>
                                    </label>
                                    <label id="img_category_label"class="field field2"for="img_category"data-value="">
                                        <span>食材類別</span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1">肉類</li>
                                                <li class="option"data-value="opt_2">奶蛋類</li>
                                                <li class="option"data-value="opt_3">海鮮</li>
                                                <li class="option"data-value="opt_3">調料</li>
                                            </ul>
                                        </div>
                                    </label>
                                    <label id="img_category_label"class="field field3"for="img_category"data-value="">
                                        <span>食材類別</span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1">肉類</li>
                                                <li class="option"data-value="opt_2">奶蛋類</li>
                                                <li class="option"data-value="opt_3">海鮮</li>
                                                <li class="option"data-value="opt_3">調料</li>
                                            </ul>
                                        </div>
                                    </label>
                                    <label id="img_category_label"class="field field4"for="img_category"data-value="">
                                        <span>食材類別</span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1">肉類</li>
                                                <li class="option"data-value="opt_2">奶蛋類</li>
                                                <li class="option"data-value="opt_3">海鮮</li>
                                                <li class="option"data-value="opt_3">調料</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="recipe_ingredients ingredients_right">
                                <p>品項</p>
                                <div className="input_option">
                                    <label id="img_category_label"class="field field1"for="img_category"data-value="">
                                        <span></span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1"></li>
                                                <li class="option"data-value="opt_2"></li>
                                                <li class="option"data-value="opt_3"></li>
                                                <li class="option"data-value="opt_4"></li>
                                            </ul>
                                        </div>
                                    </label>
                                    <label id="img_category_label"class="field field2"for="img_category"data-value="">
                                        <span></span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1"></li>
                                                <li class="option"data-value="opt_2"></li>
                                                <li class="option"data-value="opt_3"></li>
                                                <li class="option"data-value="opt_4"></li>
                                            </ul>
                                        </div>
                                    </label>
                                    <label id="img_category_label"class="field field3"for="img_category"data-value="">
                                        <span></span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1"></li>
                                                <li class="option"data-value="opt_2"></li>
                                                <li class="option"data-value="opt_3"></li>
                                            </ul>
                                        </div>
                                    </label>
                                    <label id="img_category_label"class="field field4"for="img_category"data-value="">
                                        <span></span>
                                        <div id="img_category"class="psuedo_select"name="img_category">
                                            <span class="selected"></span>
                                            <ul id="img_category_options"class="options">
                                                <li class="option"data-value="opt_1"></li>
                                                <li class="option"data-value="opt_2"></li>
                                                <li class="option"data-value="opt_3"></li>
                                                <li class="option"data-value="opt_4"></li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="upload_ingredients">
                                <p>份量</p>
                                <div className="input_option">
                                    <input type="text"></input><img src={require("./img/delete.jpg")} class="delete_icon" alt="" /><br />
                                    <input type="text"></input><img src={require("./img/delete.jpg")} class="delete_icon" alt="" /><br />
                                    <input type="text"></input><img src={require("./img/delete.jpg")} class="delete_icon" alt="" /><br />
                                    <input type="text"></input><img src={require("./img/delete.jpg")} class="delete_icon" alt="" /><br />
                                </div>
                            </div>
                        </div>
                        {/* 新增食材 */}
                        <div className="input_ingredient">
                            <button className="bubbly-button" id="new_ingredient">新增步驟</button>
                        </div>
                    </div>
                </div>

                {/* 步驟 */}
                <div className="recipe_step" id="recipe_step">
                    <div className="step_header">
                        <h2>步驟</h2>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <from className="input_step_form col-4">
                                <i class="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" className="step_img" />
                            </from>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">1</p>
                                <div className="step_icons">
                                    <i class="step_icon far fa-trash-alt"></i>
                                    <br />
                                    <textarea className="step_introduction" placeholder="步驟敘述..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            <from className="input_step_form col-4">
                                <i class="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" className="step_img" />
                            </from>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">2</p>
                                <div className="step_icons">
                                    <i class="step_icon far fa-trash-alt"></i>
                                    <br />
                                    <textarea className="step_introduction" placeholder="步驟敘述..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            <from className="input_step_form col-4">
                                <i class="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" className="step_img" />
                            </from>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">3</p>
                                <div className="step_icons">
                                    <i class="step_icon far fa-trash-alt"></i>
                                    <br />
                                    <textarea className="step_introduction" placeholder="步驟敘述..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            <from className="input_step_form col-4">
                                <i class="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" className="step_img" />
                            </from>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">4</p>
                                <div className="step_icons">
                                    <i class="step_icon far fa-trash-alt"></i>
                                    <br />
                                    <textarea className="step_introduction" placeholder="步驟敘述..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 新增步驟 */}
                <div className="input_step">
                    <button className="bubbly-button" id="new_step">新增步驟</button>
                </div>
                {/* 上傳/取消 */}
                <div className="send_buttom">
                    <button type="button" class="btn btn-outline-danger btn_mr">上傳</button>
                    <button type="button" class="btn btn-outline-dark">取消</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Upload_header_img;
