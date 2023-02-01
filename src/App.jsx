

import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const width = useSelector(state => state.width);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.target.id === 'increase' ? dispatch({ type: 'increase', amount: 20, }) :
      dispatch({ type: 'decrease', amount: 10, });
    return;
}

  return (
    <div className="App">
      <div style={{ background: 'teal', height: '40px', width: width }}></div>
      <button id='increase' onClick={clickHandler}>Increase</button>
      <button id='decrease' onClick={clickHandler}>Decrease</button>
    </div>
  )
}

export default App
