import React from "react";
import st from './CreatingTextForPost.module.css'
import {PostReduxForm} from "./PostForm";

export type CreatingTextForPostType = {
    addedPostInState: (newPost: string) => void
}

export function CreatingTextForPost(props: CreatingTextForPostType) {


    const onSubmitHandler = (value: any) => {
        props.addedPostInState(value.newPostFromForm)
    }

    return (
        <div>
            <div className={st.title}>
                My post
            </div>

            <PostReduxForm
                onSubmit={onSubmitHandler}/>

        </div>
    )
}
