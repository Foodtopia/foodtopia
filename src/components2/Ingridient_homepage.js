import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3_4 from "./Sec3_4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";
import Sec8 from "./Sec8";


class Ingridient_homepage extends Component {
  render() {
    return (
        <React.Fragment>
            <Sec2/>
            <Sec1/>
            <Sec3_4/>
            <Sec5/>
            <Sec6/>
            <Sec7/>
            <Sec5/>
            <Sec8/>                  
        </React.Fragment>
    );
  }
}
export default Ingridient_homepage;
