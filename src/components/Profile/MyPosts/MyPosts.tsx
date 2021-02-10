import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

let postDate= [
    {id: 1, message: "hello, how are you", likesCount: '12'},
    {id: 2, message: "It's my first applee", likesCount: '152'},
]


export const MyPosts = () => {

    return (
        <div>
            <h3>New post</h3>
            <div><textarea></textarea></div>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message={postDate[0].message} likesCount={postDate[0].likesCount}/>
                <Post message={postDate[1].message} likesCount={postDate[1].likesCount}/>
            </div>
        </div>
    )
}