import st from './MessageUser.module.css'



type MesUserType={
    message:string
}
export function MessageUser (props:MesUserType) {
    return(

        <div className={st.text}>
            {props.message}

        </div>
    )
}