import {followAPI, ParticipanType, usersAPI} from "../../api/api"
import {Dispatch} from "redux";


const initialParticipantsState: initialParticipantsStateType = {
    participants: [],
    count: 20,
    totalCount: 0,
    activePage: 1,
    isLoading: false,
    disabled: []  /*элемент массива это будут id*/
}

export type initialParticipantsStateType = {
    participants: Array<ParticipanType>
    count: number,
    totalCount: number
    activePage: number
    isLoading: boolean
    disabled: Array<number>
}

export const participantReduсer = (state: initialParticipantsStateType = initialParticipantsState, action: ActionType): initialParticipantsStateType => {

    switch (action.type) {
        case 'FOLLOW-PARTICIPANT': {
            return {
                ...state, participants: state.participants.map(
                    el => el.id === action.idPartisipant
                        ? {...el, followed: true}
                        : el)
            }
        }
        case 'UNFOLLOW-PARTICIPANT': {
            return {
                ...state, participants: state.participants.map(
                    el => el.id === action.idPartisipant
                        ? {...el, followed: false}
                        : el)
            }
        }
        case 'SET-PARTICIPANTS': {
            return {...state, participants: action.participants}
        }
        case "SET-ACTIVE-PAGE": {
            return {...state, activePage: action.activePage}
        }
        case "SET-TOTALCOUNT": {
            return {...state, totalCount: action.count}
        }
        case "CHANGE-ISLOADING": {
            return {...state, isLoading: action.loading}
        }
        case "CHANGE-DISABLED-STATUS": {
            return {
                ...state,
                disabled:action.value
                ? [...state.disabled,action.userId]
                : state.disabled.filter(id => id !==action.userId)
                /*элемент массива это  id*/
            }
        }

        default:
            return state
    }
}

export type changeDisabledStatusType = ReturnType<typeof changeDisabledStatus>
export const changeDisabledStatus = (userId:number, value: boolean) => {
    return {
        type: 'CHANGE-DISABLED-STATUS',
        userId,
        value
    } as const
}


type unFollowParticipantType = ReturnType<typeof unFollowParticipant>
export const unFollowParticipant = (idPartisipant: number) => {
    return {
        type: 'UNFOLLOW-PARTICIPANT',
        idPartisipant,

    } as const
}

type followParticipantType = ReturnType<typeof followParticipant>
export const followParticipant = (idPartisipant: number) => {
    return {
        type: 'FOLLOW-PARTICIPANT',
        idPartisipant,

    } as const
}


type changeIsLoadingACType = ReturnType<typeof changeIsLoading>
export const changeIsLoading = (loading: boolean) => {
    return {
        type: 'CHANGE-ISLOADING',
        loading
    } as const
}


type setParticipantsACType = ReturnType<typeof setParticipants>
export const setParticipants = (participants: Array<ParticipanType>) => {
    return {
        type: 'SET-PARTICIPANTS',
        participants
    } as const
}

type setActivePageACType = ReturnType<typeof setActivePage>
export const setActivePage = (activePage: number) => {
    return {
        type: 'SET-ACTIVE-PAGE',
        activePage
    } as const
}

type setTotalCountACType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTALCOUNT',
        count: totalCount
    } as const
}


/*thunk*/
export const setFriend = (idPartisipant: number) => (dispatch:Dispatch) => {
    dispatch (changeDisabledStatus(idPartisipant,true))
    followAPI.postFollow(idPartisipant)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch  (followParticipant(idPartisipant))
            }
            dispatch(changeDisabledStatus(idPartisipant,false))
        })
}


export const deleteFriend = (idPartisipant: number) => (dispatch:Dispatch) => {
    dispatch (changeDisabledStatus(idPartisipant,true))
    followAPI.deleteFollow(idPartisipant)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowParticipant(idPartisipant))
            }
            dispatch(changeDisabledStatus(idPartisipant,false))
        })
}


export const getPaticipants = (activePage:number ,count:number) => (dispatch:Dispatch) => {
    dispatch (changeIsLoading(true))
    usersAPI.getParticipants(activePage, count)
        .then((data) => {
            dispatch (changeIsLoading(false))
            dispatch(setParticipants(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
}

export const showPaticipants = (activePage:number ,count:number) => (dispatch:Dispatch) => {
    dispatch (changeIsLoading(true))
    usersAPI.getParticipants(activePage, count)
        .then((data) => {
            dispatch(setParticipants(data.items))
            dispatch(setActivePage(activePage))
            dispatch (changeIsLoading(false))
        })
}




type ActionType = setTotalCountACType
    | setActivePageACType
    | setParticipantsACType
    | followParticipantType
    | changeIsLoadingACType
    | unFollowParticipantType
    | changeDisabledStatusType