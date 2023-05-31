import React from "react";
import { NavLink } from "react-router-dom";
import st from './NavBar.module.css'



export function NavBar() {
    return (
        <nav className={st.nav}>
            <div >
                <NavLink
                    className={st.item}
                    to='/participants'>Participants</NavLink>
            </div>
            <div >
                <NavLink
                    className={st.item}
                    to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink
                    className={st.item}
                    to='/dialogs'>Message</NavLink>
            </div>
            <div>
                <NavLink
                    className={st.item}
                    to='/news' >News</NavLink>
            </div>
            <div>
                <NavLink
                    className={st.item}
                    to='/music' >Music</NavLink>
            </div>
            <div>
                <NavLink
                    className={st.item}
                    to='/settings' >Settings</NavLink>
            </div>
        </nav>
    )
}