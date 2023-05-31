import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {StateType} from "../redux/reduser/reduxStore";
import {connect} from "react-redux";

type MapStatePropsType={
    isLogin:boolean
}

let MapStatePropsRedirect = (state: StateType): MapStatePropsType => {
    return {
        isLogin: state.auth.isLogin
    }
}

export function HocRedirectLogin  <T>(Component: ComponentType<T>)  {
    const RedirectComponent = ({isLogin,...restProps}: MapStatePropsType) => {

        if (isLogin === false) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    const ConnectRedirectLogin = connect(MapStatePropsRedirect)(RedirectComponent)
    return ConnectRedirectLogin
}
