import React, {useState} from 'react';
import {useGameContext} from "../context/gameContext.jsx";

const Form = () => {
    const [num, setNum] = useState(10)
    const {dispatch} = useGameContext()

    const handleChange = (e) => {
        const {value} = e.target

        if(isNaN(parseInt(value))) {
            return
        }
        setNum(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(num > 0) {
            dispatch({
                type: 'LAUNCH',
                payload: num
            })
            setNum(10)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"number"} value={num} onChange={handleChange} required/>
            <input type={"submit"} value={'Lancer'}/>
        </form>
    );
};

export default Form;