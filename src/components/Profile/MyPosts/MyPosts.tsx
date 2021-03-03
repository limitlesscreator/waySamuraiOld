import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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