
import { useDispatch, useSelector } from "react-redux";
import { divActions } from "./store/reducerFunction";
const App = () => {
	const width = useSelector((state) => state.width);
	const height = useSelector((state) => state.height);

	const dispatch = useDispatch();



	const barChangeHandler = (e) => {
		switch (e.target.id) {
			case "increase-width":
				dispatch(divActions.increaseWidth(20));
				break;
			case "decrease-width":
				dispatch(divActions.decreaseWidth(10));
				break;
			case "increase-height":
				dispatch(divActions.increaseHeight(20));
				break;
		}
	};

	return (
		<>
			<div
				style={{
					background: "teal",
					height: height,
					width: width,
				}}>
			</div>

			<div style={{ marginTop: "3rem" }}>
				<button id="increase-width" onClick={barChangeHandler}>
					Increase bar width
				</button>

				<button id="decrease-width" onClick={barChangeHandler}>
					Decrease bar width
				</button>
				<button id="increase-height" onClick={barChangeHandler}>
					Increase bar height
				</button>
			</div>
		</>
	);
};

export default App;
