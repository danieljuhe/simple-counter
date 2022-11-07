//import react into the bundle
import { checkPropTypes } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let time = 0;

setInterval (function counter(){
    time++;
    let one = Math.floor(time/10000);
    let two = Math.floor(time/1000);
    let three = Math.floor(time/100);
    let four = Math.floor(time/10);
    let five = Math.floor(time/1);

ReactDOM.render(<Home one={one} two={two} three={three} four={four} five={five}/>, document.querySelector("#app"));
},1000);