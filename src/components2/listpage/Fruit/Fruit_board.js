import React from "react";

class Fruit_board extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
      const {dish,dishobj} =this.props;
      return (
          <React.Fragment>
            <h2>This is Fruit_board</h2>
            <p>{dish}</p>
            <ul>
              {dish.map((ingre, i)=> 
              <li key={i}>{ingre}</li>
              )}
            </ul>
            <hr/>
            <ul>
              <li>{dishobj.name}</li>
            </ul>
          </React.Fragment>
      )
    }
  }
    
  export default Fruit_board;