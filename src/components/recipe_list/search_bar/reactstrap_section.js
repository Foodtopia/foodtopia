import React from 'react';
import Sectors from './sector.json';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Reactstrap_dropdown_section extends React.Component {
  constructor(props) {
    super(props);
    let sectors = Sectors.filter( (sector) => {
        return sector.category_id === parseInt(this.props.categoryId);
    });
    this.state = {
        "value":"",
        "categoryId":this.props.categoryId,
        "sectors": sectors
    };
}
change = (event) => {
    this.setState({
        "value":event.target.value,
    })
   this.props.changeHandler(event.target.value);      
}
static getDerivedStateFromProps(props, state) {      
    if (props.categoryId !== state.categoryId) {
        var id = props.categoryId;
        let sectors = Sectors.filter(function (sector) {
            return sector.category_id === parseInt(id);
        });
        return {
            "categoryId": props.categoryId,
            "sectors": sectors
        }
    }
    return null;
}

  render() {
    return (
        <React.Fragment>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} onChange={this.change} value={this.state.value} >
                <DropdownToggle caret className="select_box2">
                子分類
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem value="0">請選擇</DropdownItem>    
                {this.state.sectors.map((sector)=>{
                    let opt = <DropdownItem key={sector.sector_id} value={sector.sector_id}>
                            {sector.sector}
                            </DropdownItem>;               
                return opt;
                })}
                </DropdownMenu>
                {/* <p>sector：{this.state.value}</p> */}
            </ButtonDropdown>
            {/* 王老師原始碼 */}
            {/* <select onChange={this.change} value={this.state.value}>
            <option value="0">請選擇</option>
                {this.state.sectors.map((sector)=>{
                        let opt = <option key={sector.sector_id} value={sector.sector_id}>
                                {sector.sector}
                                </option>;               
                    return opt;
                    })}  
            </select>
            <p>sector：{this.state.value}</p> */}

        </React.Fragment>
    );
  }
}

