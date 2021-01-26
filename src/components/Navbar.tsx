import React from "react";
import s from './Navbar.module.css'

let c1 ='item'
let c2 = 'active'
let classNew = `${s.item} ${s.active}`

export const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="#">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="#">Messages</a>
            </div>
            <div className={s.item}>
                <a href="#">News</a>
            </div>
            <div className={s.item}>
                <a href="#">Music</a>
            </div>
            <div className={s.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}