import {useSelector, useDispatch} from "react-redux";
import './App.css'

function App() {

    const dispatch = useDispatch()

    const name = useSelector((state) => state.name)
    const dragons = useSelector((state) => state.dragons)
    const error = useSelector(state => state.error)

    const handleChange = (e) => {
        dispatch({
            type: 'DRAGON/SET_VALUE',
            payload: e.target.value
        })
    }

    const handleDragonSubmit = () => {
        if(name.trim() === '' || dragons.find((dragon) => dragon.name.toLowerCase() === name.toLowerCase()) !== undefined) {
            dispatch({
                type: 'DRAGON/SET_ERROR',
                payload: 'Donnée invalide'
            })
            return;
        }
        dispatch({
            type: 'DRAGON/ADD'
        })
    }

  return (
    <main>
      <header>
        <h1>Dragon List</h1>
          <p>Nombre de dragons dans la liste : {dragons.length}</p>
      </header>
      <div>
        <div>
            {error !== "" && <p style={{color: "red"}}>{error}</p>}
          <input type={"text"} onChange={handleChange} value={name} />
          <button onClick={handleDragonSubmit}>Ajouter</button>
        </div>
        <div>
            {
                dragons.length > 0 ?
                    dragons.map(dragon => <div key={dragon.id}>{dragon.name}</div>)
                    :
                    <p>Aucun dragon dans la liste</p>
            }
        </div>
      </div>
    </main>
  )
}

export default App