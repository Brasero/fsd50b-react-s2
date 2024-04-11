import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {increment, incrementOf, reset} from "./store/Slice/counterSlice.js";

function App() {

    const counter = useSelector(state => state.counter.count)
    const dispatch = useDispatch()



  return (
    <>
        <button onClick={( )=> dispatch(reset())}>Reset</button>
        {counter}
        <button onClick={() => dispatch(incrementOf({amount: 4}))}>Click</button>
    </>
  )
}

export default App