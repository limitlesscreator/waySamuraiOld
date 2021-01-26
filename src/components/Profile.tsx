import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.53construction.com/wp-content/uploads/2018/11/footer-bg.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    )
}