import React from "react";
import {Contact} from "./Contact";
import {ContactsKeyType, ProfilesType} from "../../../api/api";


type ProfileDataType = {
    profileUser: ProfilesType
    isDirector: boolean
    editModeHundler: () => void
}

export const ProfileData = (props: ProfileDataType) => {
    return (
        <div>

            {props.isDirector ? <button onClick={props.editModeHundler}> Редактировать </button> : ''}

            <div>
                -Я ищу работу : {props.profileUser.lookingForAJob ? 'ДА' : 'Нет'}
            </div>

            <div>
                -Мои контакты : {Object.keys(
                props.profileUser.contacts).map((key) => {
                return (
                    <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={
                            props.profileUser.contacts[key as ContactsKeyType]
                        }
                    />
                )

            })}

            </div>
        </div>
    )
}