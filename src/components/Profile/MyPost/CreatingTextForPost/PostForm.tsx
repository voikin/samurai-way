import {Field, reduxForm} from "redux-form";
import React from "react";
import st from "./CreatingTextForPost.module.css";
import {maxLengthCreater, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsErrorStule/FormsErrorTextarea";


const maxLength = maxLengthCreater(10)

export const PostForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[requiredField,maxLength]}
                    name='newPostFromForm'
                    component={Textarea}/>
            </div>
            <div>
                <button className={st.button}>added</button>
            </div>
        </form>
    )
}

export const PostReduxForm = reduxForm({
    form: 'creatingMessageInForm'
})(PostForm)