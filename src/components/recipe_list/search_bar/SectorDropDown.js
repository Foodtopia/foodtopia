import React, { Component } from 'react';
import Sectors from './sector.json';

class SectorDropDown extends Component {
    constructor(props){
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

        {/* 王老師原始碼 */}
        <select onChange={this.change} value={this.state.value}  className="select_box">
        <option value="0">請選擇</option>
            {this.state.sectors.map((sector)=>{
                    let opt = <option key={sector.sector_id} value={sector.sector_id} className="select_options">
                            {sector.sector}
                            </option>;               
                return opt;
                })}  
        </select>
        <p>sector：{this.state.value}</p>

      
      </React.Fragment>
    );
  }
}

export default SectorDropDown;