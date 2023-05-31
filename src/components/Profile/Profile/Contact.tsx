import React from "react";


type ContactsType = {
    contactTitle: string
    contactValue: string | null
}

export const Contact = (props: ContactsType) => {
    return (
        <div>
            {props.contactTitle} : {props.contactValue}
        </div>
    )
}