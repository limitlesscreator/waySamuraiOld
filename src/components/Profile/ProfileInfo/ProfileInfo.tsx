import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.backgound} src="https://www.53construction.com/wp-content/uploads/2018/11/footer-bg.jpg" alt=""/>
            </div>
            <div className='s.descriptionBlock'>
                ava+description
            </div>
        </div>
    )
}