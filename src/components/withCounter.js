import React, { useState } from "react";

// we created a function called UpdatedComponent that takes in an argument called OriginalComponent
// the OriginalComponent will be the React element which will be wrapped
const UpdatedComponent = (OriginalComponent, increaseCount) => {
	function NewComponent(props) {
		const [counter, setCounter] = useState(10);
		// we tell React to render OriginalComponent to the UI.

		// const inCounter = () => {
		// 	setCounter(counter + 1);
		// };

		return (
			<OriginalComponent
				counter={counter} // export the counter hook
				//an 'incrementSize' function
				incrementCounter={() =>
					setCounter((size) => size + increaseCount)
				}
				name="LogRocket"
			/>
		);
	}
	return NewComponent;
};
export default UpdatedComponent;
