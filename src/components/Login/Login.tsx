import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {LoginType} from "./LoginContainer";
import {Redirect} from "react-router-dom";


export const Login = (props:LoginType) => {
    const onSubmitHundler = (formData:any) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }

if(props.isLogin){
    return <Redirect  to = '/profile'/>
}
    return (<div>
            <h2>LOGIN</h2>
          <LoginReduxForm onSubmit={onSubmitHundler}/>
        </div>
    )
}