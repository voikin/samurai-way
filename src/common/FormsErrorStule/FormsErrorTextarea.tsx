import React from "react";
import st from "./FormsErrorTextarea.module.css";

export const Textarea = ({input, meta, ...props}: any) => {
    const Error = meta.error && meta.touched
    return (
        <div>
            <div>
         <textarea
             className={Error ? st.errorTextarea : ''}
             {...input} {...props}/>
            </div>
            {Error&& <span className={st.errorText}>
             {meta.error}
         </span>}

        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    const Error = meta.error && meta.touched
    return (
        <div>
            <div>
         <input
             className={Error ? st.errorTextarea : ''}
             {...input} {...props}/>
            </div>
            {Error&& <span className={st.errorText}>
             {meta.error}
         </span>}

        </div>
    )
}