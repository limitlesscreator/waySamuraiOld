import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
}


export const Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}