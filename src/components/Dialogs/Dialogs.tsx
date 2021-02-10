import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import React from "react";
import {Message} from "./Message/Message";


type MessageType = {
    id: number
    message: string
}
type DialogType = {
    name: string
    id: number
}
type PropsPosts = {
    dialogs: Array<DialogType>
    messages:Array<MessageType>
}


export const Dialogs = (props:PropsPosts) => {




    let dialogsElements = props.dialogs.map (d =><DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

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