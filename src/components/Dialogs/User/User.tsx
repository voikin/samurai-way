import {NavLink} from "react-router-dom";
import st from "./User.module.css";

type UserType = {
    name: string
    idName: number
}

export function User(props: UserType) {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.idName}
                     className={st.name}>
                {props.name}</NavLink>
        </div>
    )
}