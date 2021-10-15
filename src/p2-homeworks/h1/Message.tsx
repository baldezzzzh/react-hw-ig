import React from 'react'
import classes from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={classes.body}>
                <p className={classes.name}>
                    {props.name}
                </p>
                <p className={classes.message_text}>
                    {props.message}
                </p>
                <p className={classes.time}>
                    {props.time}
                </p>
            </div>


        </div>
    )
}

export default Message
