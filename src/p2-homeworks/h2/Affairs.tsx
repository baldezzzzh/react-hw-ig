import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, AlternativeAffairsPriorityType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') } // need to fix
    const setHigh = () => { props.setFilter('high')}
    const setMiddle = () => { props.setFilter('middle')}
    const setLow = () => { props.setFilter('low')}

    return (
        <div className={'homework'}>

            {mappedAffairs}
            <div className={classes.buttonsBox}>
                <button onClick={setAll} className={classes.btn}>All</button>
                <button onClick={setHigh} className={classes.btn}>High</button>
                <button onClick={setMiddle} className={classes.btn}>Middle</button>
                <button onClick={setLow} className={classes.btn}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
