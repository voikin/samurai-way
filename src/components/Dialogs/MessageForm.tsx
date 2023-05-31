import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsErrorStule/FormsErrorTextarea";
import {maxLengthCreater, requiredField} from "../../utils/validators/validators";

const maxLength = maxLengthCreater(15)
export const MessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[requiredField,maxLength]}
                    placeholder='your message'
                    name='newMessageFromForm'
                    component={Textarea}/>
            </div>
            <div>
                <button>added</button>
            </div>
        </form>
    )
}

export const MessageReduxForm = reduxForm({
    form: 'creatingMessageInForm'
})(MessageForm)