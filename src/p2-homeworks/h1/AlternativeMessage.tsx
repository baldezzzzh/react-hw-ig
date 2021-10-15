import React from 'react'
import classes from "./Message.module.css";
import {deleteAffair} from "../h2/HW2";


export type AlternativeMessageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

type AlternativeMessageProps = {
    data: Array<AlternativeMessageDataPropsType>
}

function AlternativeMessage(props: AlternativeMessageProps) {
    const aMessage = props.data.map((m) => {
        return(
            <div className={classes.alternativeMessage}>
                <div className={classes.avatar}>
                    <img src={m.avatar} alt="avatar"/>
                </div>
                <div className={classes.body}>
                    <p className={classes.name}>
                        {m.name}
                    </p>
                    <p className={classes.message_text}>
                        {m.message}
                    </p>
                    <p className={classes.time}>
                        {m.time}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <div>
            {aMessage}
        </div>
    )
}

export default AlternativeMessage
