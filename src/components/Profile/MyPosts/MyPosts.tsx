import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";




export const MyPosts = (props:any) => {
    let posts= [
        {id: 1, message: "hello, how are you", likesCount: '12'},
        {id: 2, message: "It's my first applee", likesCount: '152'},
    ]

    let postsElements =
        posts.map(p =><Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>New post</h3>
            <div><textarea></textarea></div>
            <button>Add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}