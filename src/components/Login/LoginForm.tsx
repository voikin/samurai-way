import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsErrorStule/FormsErrorTextarea";
import {requiredField} from "../../utils/validators/validators";

 const LoginForm = (props:any) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field
              validate={[requiredField]}
              name={'email'}
              placeholder={'email'}
              component={Input}/>
          </div>
          <div>
              <Field
              validate={[requiredField]}
              type={'password'}
              name={'password'}
              placeholder={'password'}
              component={Input}/>
          </div>
          <div
          ><Field
              name={'rememberMe'}
              type={'checkbox'}
              component={Input}/>Remember me</div>
          <div><button>Login</button></div>
      </form>
  )
}

export const LoginReduxForm = reduxForm({
form:'loginForm'
}) (LoginForm)