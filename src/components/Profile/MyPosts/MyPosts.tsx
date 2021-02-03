import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <h3>New post</h3>
            <div><textarea></textarea></div>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message="hello, how are you" like={12}/>
                <Post message="It's my first apple" like={15}/>
            </div>
        </div>
    )
}