import React, { useState } from "react";
import withCounter from "./withCounter";

function ClickIncrease(props) {
	const { counter, incrementCounter } = props;
	const [fontSize, setFontSize] = useState(10);

	return (
		<>
			<div>ClickIncrease</div>
			<button onClick={() => setFontSize((size) => size + 1)}>
				Increase with click
			</button>

			<p style={{ fontSize }}>
				Size of font in onClick function: {fontSize}
			</p>
			{/*Now render the value of the 'name' prop */}
			<p>Value of 'name' in ClickIncrease: {props.name}</p>

			<button onClick={() => incrementCounter()}>
				Increment counter
			</button>
			<p> Value of 'counter' in ClickIncrease: {counter}</p>
		</>
	);
}

export default withCounter(ClickIncrease, 3);
