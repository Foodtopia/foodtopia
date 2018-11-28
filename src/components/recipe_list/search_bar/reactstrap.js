import React from 'react';
import Categories from './category.json';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Reactstrap_dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      value:1
    }
    
  }
change = (event) => {
    this.props.changeHandler(event.target.value);
    this.setState({value: event.target.value});
}

toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

  render() {
    return (
        <React.Fragment>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} onChange={this.change} value={this.state.value} >
                <DropdownToggle caret className="select_box2">
                大分類
                </DropdownToggle>
                <DropdownMenu>
                {Categories.map((category)=>{
                    let opt = <DropdownItem key={category.category_id} value={category.category_id} className="select_options">
                            {category.category}
                            </DropdownItem>;               
                return opt;
                })}
                </DropdownMenu>
            </ButtonDropdown>

        </React.Fragment>
    );
  }
}

