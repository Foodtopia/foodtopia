import React from "react";
import Fruit_board from './Fruit_board';
import './Sec5.scss';


class Fruit extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const ingredients =[
      "(1, '肉類', '　牛', '牛(切丁)', '1101', '250', '肉質軟嫩富彈性,口感鮮嫩多汁風', '280克', 'PG1101')",
      "(2, '肉類', '　牛', '牛', '1102', '300', '溶脂度低,油脂香氣,芳香四溢', '300克/片', 'PG1102')",
      "(3, '肉類', '　牛', '牛五花肉丁', '1103', '112', '肉質柔嫩,纖維組織也較細', '180克', 'PG1103')",
      "(4, '肉類', '　牛', '牛五花肉絲', '1104', '56', '油花分佈均勻，最頂級的美味', '134克', 'PG1104')"
              ];
    const inobj ={
      name:'肉類',
      price:'1101'
    }
    return (
        <React.Fragment>
          <h2>
          <Fruit_board dish={ingredients} dishobj={inobj} />
          </h2>
        </React.Fragment>
    )
  }
}

export default Fruit;