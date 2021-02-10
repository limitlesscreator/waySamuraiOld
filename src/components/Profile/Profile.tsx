import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
type PropsPosts = {
    posts: Array<PropsType>
}
type PropsType = {
    message: string
    likesCount: number
    id: number
}

export const Profile = (props: PropsPosts) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}