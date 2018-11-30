import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Sec1 from "./sec1/Sec1";
import Sec2 from "./sec2/Sec2";
import Sec3_4 from "./sec3_4/Sec3_4";
import Sec5 from "./sec5/Sec5";
import Sec6 from "./sec6/Sec6";
import Sec7 from "./sec7/Sec7";
import Sec8 from "./sec8/Sec8";


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
