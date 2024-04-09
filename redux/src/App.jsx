
import './App.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


function App() {

  const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const shopList = useSelector((state) => state.shop.shopList)

    const handleSubmit = () => {
      //dispatch
        dispatch({
            type: 'SHOP/ADD',
            payload: input
        })
        setInput('')
    }

    const handleTaskSubmit = () => {
      dispatch({
          type: 'TASK/ADD',
          payload: input
      })
        setInput('')
    }

  return (
      <>
          <input type={"text"} value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={handleTaskSubmit}>Ajouter</button>

          <input type={"text"} value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={handleSubmit}>Ajouter</button>
          {shopList.length > 0 && shopList.map((item, index) => <div key={index}>{item}</div>)}
      </>
  )
}

export default App