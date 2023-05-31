import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatusMyProfile: (status: string) => void
}

export const ProfileStatus = (props:ProfileStatusType) => {
    const [editStatus,setEditStatus] = useState(props.status)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setEditStatus(props.status)
    },[props.status])

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
      setEditStatus(event.currentTarget.value)
    }

    const activateEdidMode = () => {
        setToggle(true)
    }

    const deActivateEdidMode = () => {
        props.updateStatusMyProfile(editStatus)
        setToggle(false)
    }


    return (
        <div>
            {toggle
            ? <input
            onChange={onChangeHandler}
            autoFocus
            onBlur={deActivateEdidMode}
            value={editStatus}/>
            : <span
            onDoubleClick={activateEdidMode}>
                            {props.status || 'No status'}
               </span>}
        </div>
    )
}



