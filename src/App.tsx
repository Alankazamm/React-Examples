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
        dispatch({ type: 'increaseWidth', amount: 20 });
        break;
      case 'decreaseWidth':
        dispatch({ type: 'decreaseWidth', amount: 20 });
        break;
      case 'increaseHeight':
        dispatch({ type: 'increaseHeight', amount: 20 });
        break;
    }
  }

  return (
    <>
      <div style={{
        background: 'teal',
        height: height,
        width: width
      }}>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <button id="increaseWidth"
          onClick={clickHandler}>
          Increase bar width
        </button>

        <button id="decreaseWidth"
          onClick={clickHandler}>
          Decrease bar width
        </button>
        <button id="increaseHeight"
          onClick={clickHandler}>
          Increase bar height
        </button>
      </div>
    </>
  );
  
}

export default App;