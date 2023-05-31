
export type MessageType = {
    id: number
    message: string
}
export type UserNameType = {
    idName: number
    name: string
}

const initialMessageState={
    userName: [
        {idName: 1, name: 'Pavel'},
        {idName: 2, name: 'Olga'},
        {idName: 3, name: 'Inokenti'},
        {idName: 4, name: 'Sonia'},
        {idName: 5, name: 'Kuzma'},
        {idName: 6, name: 'Svinka Pepi'}
    ] ,
    messageState: [
        {id: 1, message: 'Help me with money'},
        {id: 2, message: 'Ooooh...'},
        {id: 3, message: 'I want to buy a car'},
        {id: 4, message: 'Mercedes?'},
        {id: 5, message: 'Ou-Ou! I also want money'}
    ]

}

export type initialMessageStateType={
    userName:Array<UserNameType>
    messageState:Array<MessageType>
}

export const dialogReduсer= (state:initialMessageStateType=initialMessageState, action:ActionType):initialMessageStateType=>{
    switch (action.type) {
        case 'ADDED-MESSAGE': {
            return {...state,messageState:[{
                id:6,message:action.newMessage},...state.messageState]}
        }

        default:return state
    }
}

type ActionType=ReturnType<typeof addedMessageStatetAC>


export const addedMessageStatetAC = (newMessage:string) =>{
    return {
        type:'ADDED-MESSAGE',
        newMessage
    }as const
}


