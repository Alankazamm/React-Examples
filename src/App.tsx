<<<<<<< HEAD:src/App.jsx
import { useDispatch, useSelector } from "react-redux";
import { divActions } from "./store/reducerFunction";
const App = () => {
	const width = useSelector((state) => state.width);
	const height = useSelector((state) => state.height);

	const dispatch = useDispatch();
=======
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import { State } from './store/reducerFunction';

const App = () => {
  const width = useSelector((state:State) => state.width);
  const height = useSelector((state:State) => state.height);

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    switch (e.target.id) {
      case 'increaseWidth':
        dispatch({ type: 'INCREASE_WIDTH', amount: 20 });
        break;
      case 'decreaseWidth':
        dispatch({ type: 'DECREASE_WIDTH', amount: 20 });
        break;
      case 'increaseHeight':
        dispatch({ type: 'SET_HEIGHT', amount: 20 });
        break;
    }
  }
>>>>>>> 5240280b04224237eaaea59685635fa2ee5f25c6:src/App.tsx

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
				}}
			></div>

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
