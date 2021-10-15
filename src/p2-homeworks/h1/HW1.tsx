import React from 'react'
import Message from "./Message";
import AlternativeMessage, {AlternativeMessageDataPropsType} from "./AlternativeMessage";

const messageData = {
    avatar: 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png',
    name: 'Morpheus',
    message: 'Wake up, Neo',
    time: '24:24',
}


const alternativeMessageData: Array<AlternativeMessageDataPropsType> = [
    {
        avatar: 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png',
        name: 'Neo',
        message: 'Wtf dude, let me watch anime' ,
        time: '25:25'
    }
]

function HW1() {
    return (
        <div>
            <hr/>
            <h2>homeworks 1</h2>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage data={alternativeMessageData}/>
            <hr/>
        </div>
    )
}

export default HW1
