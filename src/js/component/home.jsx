import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	const mainStyle = {
		topMargin: "50px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "black",
		width: "800px",
		height: "250px",
		margin: "5px"
	}
	const numbersStyle = {
		position: "relative",
		backgroundColor: "grey",
		borderRadius: "10px",
		width: "100px",
		height: "180px",
		margin: "5px",
		textAlign: "center",
		color:"white",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
		
	}
	const imageStyle = {
		with: "100px",
		height: "100px",
		position: "relative",

	}

	return (
		
		<div className="maindiv" style={mainStyle}>
			<div className="ftimer" style={numbersStyle}><img src="https://broadcast-devices.com/wp-content/uploads/2018/08/Clock-icon-32x32.png" className="imageStyle" style={imageStyle}/></div>
			<div className="firstnumber" style={numbersStyle}><h1>{props.one}</h1></div>
			<div className="secondnumber" style={numbersStyle}><h1>{props.two}</h1></div>
			<div className="thirdnumber" style={numbersStyle}><h1>{props.three}</h1></div>
			<div className="fourthnumber" style={numbersStyle}><h1>{props.four}</h1></div>
			<div className="fifthnumber" style={numbersStyle}><h1>{props.five}</h1></div>
		</div>
	);
};


/*	cambiar primero un numero

const App = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }, []);
  
    return <h1>The component has been rendered for {count} seconds</h1>;
  };*/

export default Home;
