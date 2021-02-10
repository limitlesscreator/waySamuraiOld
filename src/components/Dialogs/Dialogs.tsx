import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import React from "react";
import {Message} from "./Message/Message";

type DialogType = {
    name: string
    id: number
}
type MessageType = {
    id: number
    message: string
}



export const Dialogs = () => {

    let dialogs: Array<DialogType> = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sweta'},
        {id: 3, name: 'Kolya'},
    ]
    let messages: Array<MessageType> = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How"s your day'},
        {id: 3, message: 'Dollars'},
    ]

    let dialogsElements = dialogs.map (d =><DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}