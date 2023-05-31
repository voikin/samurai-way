import st from './Dialogs.module.css'
import {MessageUser} from "./MessageUser/MessageUser";
import React, {FC} from "react";
import {User} from "./User/User";
import {DialogsType} from './DialogsContainer';
import {MessageReduxForm} from "./MessageForm";


export const Dialogs: FC<DialogsType> = (props) => {


    const onSubmitHandler = (value: any) => {
        props.addedMessageStatet(value.newMessageFromForm)
    }


    return (
        <div className={st.dialogList}>
            <div className={st.allPerson}>
                {props.userName.map(el => {
                        return (
                            <User
                                key={el.idName}
                                name={el.name}
                                idName={el.idName}/>
                        )
                    }
                )
                }
            </div>

            <div className={st.messagesAll}>

                <MessageReduxForm
                    onSubmit={onSubmitHandler}/>

                {props.messageState.map(el => {
                        return (
                            <MessageUser
                                key={el.id}
                                message={el.message}
                            />
                        )
                    }
                )
                }


            </div>
        </div>
    )
}