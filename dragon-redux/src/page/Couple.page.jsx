import React, {useState} from 'react';
import './couple.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectCouple, selectDragons, selectKnights} from "../store/selectors/index.js";
import {addCouple} from "../store/action/index.js";

const CouplePage = () => {

    const dispatch = useDispatch()

    const dragons = useSelector(selectDragons)
    const knights = useSelector(selectKnights)
    const couples  = useSelector(selectCouple)
    const [selectedDragon, setSelectedDragon] = useState(null)
    const [selectedKnight, setSelectedKnight] = useState(null)

    const isSelectedDragon = (id) => {
        return selectedDragon?.id === id ? 'selected' : ""
    }

    const isUnvailable = (available) => available ? '' : ' unselectable'

    const isSelectedKnight = (id) => {
        return selectedKnight?.id === id ? 'selected' : ""
    }

    const selectKnight = (knight) => {
        if (selectedKnight === knight) {
            setSelectedKnight(null)
            return
        }
        setSelectedKnight(knight)
    }

    const selectDragon = (dragon) => {
        if (selectedDragon === dragon) {
            setSelectedDragon(null)
            return
        }
        setSelectedDragon(dragon)
    }

    const handleSubmit = () => {
        if (!selectedDragon || ! selectedKnight) {
            return
        }
        dispatch(addCouple({
            knight: selectedKnight,
            dragon: selectedDragon
        }))
        setSelectedKnight(null)
        setSelectedDragon(null)
    }

    return (
        <div className={'mainPage'}>
            <div className="headerPage">
                <h1>Couple List</h1>
                <p>Number of couple : </p>
            </div>
            <div className={"content"}>
                <div className="list">
                    <h4>Dragons</h4>
                    {
                        dragons.length > 0 ?
                            dragons.map(dragon => {
                                return <div
                                    className={isSelectedDragon(dragon.id) + isUnvailable(dragon.available)}
                                    key={dragon.id}
                                    onClick={dragon.available ? () => selectDragon(dragon) : () => {}}
                                >
                                    <span>{dragon.name}</span>
                                </div>
                            }) :
                            <p>No dragons</p>
                    }
                </div>
                <div className="list">
                    <h4>Knights</h4>
                    {
                        knights.length > 0 ?
                            knights.map(knight => {
                                return <div
                                    className={isSelectedKnight(knight.id) + isUnvailable(knight.available)}
                                    key={knight.id}
                                    onClick={knight.available ? () => selectKnight(knight) : () => {}}
                                >
                                    <span>{knight.name} | {knight.age}</span>
                                </div>
                            }) :
                            <p>No knights</p>
                    }
                </div>
            </div>
            <div className={'content'}>
                <button onClick={handleSubmit}>Add couple</button>
            </div>
            <div className="content">
                <div className="list">
                    <h4>Couples</h4>
                    {
                        couples.length > 0 ?
                            couples.map(couple => {
                                return <div key={couple.id}>
                                    <span>{couple.dragon.name} - {couple.knight.name}</span>
                                </div>
                            }) :
                            <p>No couple</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default CouplePage;