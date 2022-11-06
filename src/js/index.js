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

setInterval (function counter(){time++;

ReactDOM.render(<Home one={time} two={time} three={time} four={time} five={time}/>, document.querySelector("#app"));
},1000);