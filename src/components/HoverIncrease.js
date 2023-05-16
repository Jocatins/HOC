import React, { useState } from "react";
import withCounter from "./withCounter";

function HoverIncrease(props) {
	const [fontSize, setFontSize] = useState(10);
	const { counter, incrementCounter } = props;

	return (
		<>
			<div>HoverIncrease</div>
			<button onMouseOver={() => setFontSize((size) => size + 1)}>
				Increase on hover
			</button>
			<p style={{ fontSize }}>
				Size of font in onMouseOver function: {fontSize}
			</p>
			{/*Now render the value of the 'name' prop */}
			<p>Value of "name" in HoverIncrease: {props.name} </p>

			<button onMouseOver={() => incrementCounter()}>
				Increment on Hover
			</button>
			<p> Value of 'counter' on MouseOver: {counter}</p>
		</>
	);
}

export default withCounter(HoverIncrease, 20);
