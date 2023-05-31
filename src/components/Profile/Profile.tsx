import React from "react";
import {ProfileInfo} from "./Profile/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilesType} from "../../api/api";




type PropsType = {
    updateStatusMyProfile:(status: string) => void
    profileUser: ProfilesType
    status:string
    isDirector:boolean
    chosedFoto:(myFoto:any)=>void
}

export function Profile(props: PropsType) {


    return (
        <div>
            <ProfileInfo
                chosedFoto={props.chosedFoto}
                isDirector={props.isDirector}
                updateStatusMyProfile={props.updateStatusMyProfile}
                status={props.status}
                profileUser={props.profileUser}/>
            <MyPostContainer/>
        </div>
    )
}