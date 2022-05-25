import React from "react";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Counter />
		</React.Fragment>
	);
};

export default Home;

const Counter = () => {
	return (
		<div className="d-flex bg-dark">
			<div>
				<p className="text-light">{"0"}</p>
			</div>
			<div>
				<p className="text-light">{"0"}</p>
			</div>
			<div>
				<p className="text-light">{"0"}</p>
			</div>
			<div>
				<p className="text-light">{"0"}</p>
			</div>
			<div>
				<p className="text-light">{"0"}</p>
			</div>
			<div>
				<p className="text-light">{"0"}</p>
			</div>
			<div>
				<p className="text-light">{"0"}</p>
			</div>
		</div>
	);
};
