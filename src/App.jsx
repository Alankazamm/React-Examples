import { useSelector, useDispatch } from 'react-redux';
import { divActions } from './store/reducerFunction';

const App = () => {
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    switch (e.target.id) {
      case 'increaseWidth':
        dispatch(divActions.increaseWidth(20));
        break;
      case 'decreaseWidth':
        dispatch(divActions.decreaseWidth(10));
        break;
      case 'increaseHeight':
        dispatch(divActions.increaseHeight(20));
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