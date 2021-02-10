import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
type PropsPosts = {
    posts: Array<PropsType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type PropsType = {
    message: string
    likesCount: number
    id: number
}
type DialogType = {
    name: string
    id: number
}
type MessageType = {
    id: number
    message: string
}
const App = (props:PropsPosts) => {
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Route exact path= {'/dialogs'} render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route exact path= {'/profile'} render={()=><Profile posts={props.posts} />}/>
                    <Route exact path= {'/news'}  render={()=><News />}/>
                    <Route exact path= {'/music'}  render={()=><Music />}/>
                    <Route exact path= {'/settings'}  render={()=><Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
