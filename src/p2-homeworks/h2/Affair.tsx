import React from 'react'
import {AffairPriorityType, AffairType, AlternativeAffairsPriorityType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void

 // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () =>  {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={classes.affair}>
            <p className={classes.title}>{props.affair.name}</p>
            <p className={classes.priority}>{props.affair.priority}</p>
            <button onClick={deleteCallback} className={classes.btnSm}>X</button>
        </div>
    )
}

export default Affair
