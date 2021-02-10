import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type DialogType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogType) => {
    let path = 'dialogs/' + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className="message">{props.message}</div>
    )
}


export const Dialogs = () => {
    let dialogsDate = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sweta'},
        {id: 3, name: 'Kolya'},
    ]
    let messagesDate = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How"s your day'},
        {id: 3, message: 'Dollars'},
    ]

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
            </div>
            <div className="messages">
                <Message message={messagesDate[0].message}/>
                <Message message={messagesDate[1].message}/>
                <Message message={messagesDate[2].message}/>
            </div>
        </div>
    )
}