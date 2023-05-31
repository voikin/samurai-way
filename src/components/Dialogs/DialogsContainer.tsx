
import {
    addedMessageStatetAC, MessageType, UserNameType
} from "../../redux/reduser/dialogReduсer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/reduser/reduxStore";
import {compose, Dispatch} from "redux";
import React, {FC} from "react";
import {HocRedirectLogin} from "../../hoc/RedirectLogin";


const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        userName: state.dialogState.userName,
        messageState: state.dialogState.messageState
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addedMessageStatet: (newMessage:string) => {
            dispatch(addedMessageStatetAC(newMessage))
        }
    }
}
type MapStatePropsType = {
    userName: Array<UserNameType>
    messageState: Array<MessageType>
}
type MapDispatchPropsType = {
    addedMessageStatet: (newMessage:string) => void
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    HocRedirectLogin
)(Dialogs)





