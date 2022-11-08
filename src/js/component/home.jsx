import React, { useState, useEffect } from "react";

const Home = (props) => {
	const main = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "150px",
		justifyContent: "center"
	}
	const mainStyle = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		width: "800px",
		height: "250px",
		margin: "5px",
		textShadow: "2px 2px 4px #000000",
		boxShadow: "20px 20px 50px grey",
		borderRadius: "15px"
	}
	const numbersStyle = {
		position: "relative",
		backgroundColor: "rgba(0, 56, 89, 0.1)",
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
	const btnDiv = {
		position: "relative",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	}
	const stopStyle = {
		color: "red",
		borderRadius:"5px",
		backgroundColor: "transparent",
		borderRadius: "5px"
	}
	const continueStyle = {
		color: "black",
	}
	const buttons = {
		backgroundColor: "transparent",
		borderRadius: "20px",
		margin:"50px",
		borderColor: "transparent",
		boxShadow: "10px 10px 50px gray"
	}
	const stopClick = (event) => {
		clearInterval(tr);
	}
	const continueClick = (event) => {

	}
	return (
		<div style={main}>
		<div className="maindiv" style={mainStyle}>
			<div className="ftimer" style={numbersStyle}><img src="https://broadcast-devices.com/wp-content/uploads/2018/08/Clock-icon-32x32.png" className="imageStyle" style={imageStyle}/></div>
			<div className="firstnumber" style={numbersStyle}><h1>{props.None % 32}</h1></div>
			<div className="secondnumber" style={numbersStyle}><h1>{props.Ntwo % 16}</h1></div>
			<div className="thirdnumber" style={numbersStyle}><h1>{props.Nthree % 8}</h1></div>
			<div className="fourthnumber" style={numbersStyle}><h1>{props.Nfour % 4}</h1></div>
			<div className="fifthnumber" style={numbersStyle}><h1>{props.Nfive % 2}</h1></div>
		</div>
		<div className="buttonsdiv" style={btnDiv}>
			<button className="stop" style={buttons} onClick={stopClick}><h2 style={stopStyle}>STOP</h2></button>
			<button className="continue" style={buttons} onClick={continueClick}><h2 style={continueStyle}>Continue...</h2></button>
		</div>
		</div>
		
		
	);
};

export default Home;
