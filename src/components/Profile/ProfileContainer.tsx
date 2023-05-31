import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduser/reduxStore";
import {chosedFoto, getProfiles, getStatus, updateStatusMyProfile} from "../../redux/reduser/profileReduсer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {ProfilesType} from "../../api/api";
import {HocRedirectLogin} from "../../hoc/RedirectLogin";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type ResultProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<ResultProfilePropsType> {

     refreshProfile () {
        /* если по пользователю кликну то будет
      айдишка его,  если не кликну то будет
      underfined- и тогда свой профиль
      отображу по моей айдишке '26160'*/
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26160'
        }
        this.props.getProfiles(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
         this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ResultProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
         if(this.props.match.params.userId !== prevProps.match.params.userId){
             this.refreshProfile()
         }
     }


    render() {
        return (
            <Profile
                chosedFoto={this.props.chosedFoto}
                isDirector={!this.props.match.params.userId}
                updateStatusMyProfile={this.props.updateStatusMyProfile}
                profileUser={this.props.profileUser}
                status={this.props.status}
            />
        )
    }
}


let MapStateProps = (state: StateType): MapStatePropsType => {
    return {
        profileUser: state.profileState.profileUser,
        status:state.profileState.status

    }
}


type MapDispatchPropsType = {
    getProfiles: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatusMyProfile:(status: string) => void
    chosedFoto:(myFoto:string)=>void
}

type MapStatePropsType = {
    profileUser: ProfilesType
    status:string
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


export default compose<FC>(
    connect(MapStateProps, {getProfiles,getStatus,updateStatusMyProfile,chosedFoto}),
    withRouter,
    HocRedirectLogin)(ProfileContainer)

