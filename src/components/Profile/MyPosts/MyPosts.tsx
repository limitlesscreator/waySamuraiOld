import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Add post</button>
            <div>New post</div>
            <div className={s.posts}>
                <Post message= "hello, how are you" like={12} />
                <Post message= "It's my first apple" like={15} />
            </div>
        </div>
    )
}