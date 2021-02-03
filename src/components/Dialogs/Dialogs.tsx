import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Dimich' id='1'/>
                <DialogItem name='Sweta' id='2'/>
                <DialogItem name='Kolya' id='3'/>

                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'dialogs/2'}>Sweta</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'dialogs/3'}>Andrey</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className="messages">
                <Message message={"hi"}/>
                <Message message={"How's your day"}/>
                <Message message={"Dollars"}/>
            </div>
        </div>
    )
}