import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return (
		<div className="container d-flex bg-dark">
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">
					<i className="fa-solid fa-clock"></i>
				</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberFive % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberFour % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberThree % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberTwo % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberOne % 10}</p>
			</div>
		</div>
	);
};

Counter.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number,
	numberFive: PropTypes.number,
};
