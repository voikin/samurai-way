import React from "react";
import {Textarea} from "../../../common/FormsErrorStule/FormsErrorTextarea";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";


const ProfileFormData = () => {
    return (
        <form>
            <button>Просто кнопка</button>
            <div>
                -Я ищу работу :
                <div>
                    <Field
                        validate={[requiredField]}
                        name={'email'}
                        component={Textarea}/>
                </div>
            </div>

        </form>
    )
}

export const ContainerProfileFormData = reduxForm({form: 'edit-pfofile'})(ProfileFormData)

