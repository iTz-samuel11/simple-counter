//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home, { Counter } from "./component/home.jsx";

let seconds = 0;
setInterval(() => {
	let segFive = Math.floor(seconds / 10000);
	let segFour = Math.floor(seconds / 1000);
	let segThree = Math.floor(seconds / 100);
	let segTwo = Math.floor(seconds / 10);
	let segOne = Math.floor(seconds / 1);
	seconds++;
	console.log(segFive, segFour, segThree, segTwo, segOne);
	ReactDOM.render(
		<Counter
			numberOne={segOne}
			numberTwo={segTwo}
			numberThree={segThree}
			numberFour={segFour}
			numberFive={segFive}
		/>,
		document.querySelector("#app")
	);
}, 1000);
