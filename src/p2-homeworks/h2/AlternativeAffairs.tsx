import React from 'react'
import {AffairType, FilterType} from "./HW2";
import Affair from "./Affair";
import classes from "./Affairs.module.css";

type AlternativeAffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}


function AlternativeAffairs(props:  AlternativeAffairsPropsType) {

    const mappedAffairs = props.data.map( (a : AffairType) => {
        return(
            <Affair
                key={a._id}
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}

            />
        )
    } )

    const setAll = () => {
        props.setFilter('all')
    }
    const setTop = () => {
        props.setFilter('top')
    }
    const setNormal = () => {
        props.setFilter('normal')
    }
    const setNotBad = () => {
        props.setFilter('not bad')
    }


    return (
        <div className={'homework'}>
            {mappedAffairs}
            <div className={classes.buttonsBox}>
                <button onClick={setAll} className={classes.btn}>All</button>
                <button onClick={setTop} className={classes.btn}>Top</button>
                <button onClick={setNormal} className={classes.btn}>Normal</button>
                <button onClick={setNotBad} className={classes.btn}>Not bad</button>
            </div>

        </div>
    )
}

export default AlternativeAffairs
