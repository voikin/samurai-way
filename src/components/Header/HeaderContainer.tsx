
import {connect} from "react-redux";
import {getAuthMe, logout} from "../../redux/reduser/authReduсer";
import {StateType} from "../../redux/reduser/reduxStore";
import HeaderAxiosQueryComponent from "./HeaderAxiosQueryComponent";



const mapStateToPropse = (state: StateType): mapStateToPropseType => {
    return {
        isLogin: state.auth.isLogin,
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email
    }
}

export type mapStateToPropseType = {
    isLogin: boolean
    id:  number
    login:  string
    email:  string
}
type MapDispatchToPropsType = {
    getAuthMe:()=>void
    logout:()=>void
}

export type HeaderType = mapStateToPropseType & MapDispatchToPropsType

export default connect(mapStateToPropse, {getAuthMe,logout})(HeaderAxiosQueryComponent)