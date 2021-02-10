import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PropsPosts = {
    posts: Array<PropsType>
}
type PropsType = {
    message: string
    likesCount: number
    id: number
}

export const MyPosts = (props: PropsPosts) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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