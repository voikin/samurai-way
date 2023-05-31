import React, {ChangeEvent, useState} from "react";
import st from './ProfileInfo.module.css'
import {Loading} from "../../../common/components/Loading";
import { ProfilesType} from "../../../api/api";
import {ProfileStatus} from "./ProfileStatus";
import userFoto from '../../../assets/images/blackMan.jpg'
import {ProfileData} from "./ProfileData";
import {ContainerProfileFormData} from "./ProfileFormData";


type HeaderProfileType = {
    profileUser: ProfilesType
    status: string
    updateStatusMyProfile: (status: string) => void
    isDirector: boolean
    chosedFoto: (myFoto: File) => void
}

export function ProfileInfo(props: HeaderProfileType) {
    if (!props.profileUser) {
        return <Loading/>
    }

// eslint-disable-next-line react-hooks/rules-of-hooks
const [editMode,setEditMode]=useState(false)

    const editModeHundler = () => {
        setEditMode(true)
    }

    const chosedFotoHundler = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.files && event.target.files.length) {
            props.chosedFoto(event.target.files[0])
        }
    }


    return (
        <div>
            <div className={st.illustration}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbjuoBf-52ba9upZE_xee9921LQ5h0gUzMg&usqp=CAU"
                    /* картинка-шапка фиолетово-желтая*/
                    alt={''}/>
            </div>

            <div>
                <ProfileStatus
                    updateStatusMyProfile={props.updateStatusMyProfile}
                    status={props.status}/>
                <img src={props.profileUser.photos.large || userFoto} alt={'large ava'}/>
                {props.isDirector && <input type="file" onChange={chosedFotoHundler}/>}

                <div>
                    Учуcь програмировать, и будет навено норм если научусь
                </div>
                <span>Так получилось что из крутых свободных ников остались только  Человек-даНемогуЯЭтоПовторить и Тётя-Мотя  поэтому я решил взять себе ник {props.profileUser.fullName}</span>

                <div>До меня этот курс начали проходить {props.profileUser.userId} человек.</div>

                {editMode
                    ? <ContainerProfileFormData
                    />
                    :<ProfileData
                        editModeHundler={editModeHundler}
                        isDirector={props.isDirector}
                        profileUser={props.profileUser}
                    />
                }



            </div>
        </div>
    )
}