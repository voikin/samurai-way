
import {login} from "../../redux/reduser/authReduсer";
import {connect} from "react-redux";
import {Login} from "./Login";
import {StateType} from "../../redux/reduser/reduxStore";



const mapStateToPropse = (state: StateType): any => {
    return {
        isLogin: state.auth.isLogin
    }
}

type mapStateToPropseType = {
    isLogin: boolean
}

type MapDispatchToPropsType = {
    login:(email: string, password: string, rememberMe: boolean)=>void
}
export type LoginType = MapDispatchToPropsType & mapStateToPropseType

export default connect(mapStateToPropse, {login})(Login)