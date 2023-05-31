import {profilesAPI, ProfilesType, ProfileType} from "../../api/api"
import {Dispatch} from "redux";


export type ProfilePostType = {
    id: number
    text: string
}

type InitStateType = {
    posts: ProfilePostType[],
    status: string
    newPost: string
    profileUser: ProfileType
}

const initState: InitStateType = {
    posts: [
        {id: 1, text: 'mmmm...'},
        {id: 2, text: 'What is it'},
        {id: 3, text: 'I  come home better'}

    ],
    status: '-----',
    newPost: '',
    profileUser: {
        aboutMe: '',
        contacts: {
            facebook: '1',
            website: '2',
            vk: '3',
            twitter: '4',
            instagram: '5',
            youtube: '6',
            github: '7',
            mainLink: '8',
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: 26160
    }
}


export const profileReduсer = (state: InitStateType = initState, action: ActionType): InitStateType => {

    switch (action.type) {
        case 'ADDED-POST-STATE': {
            return {
                ...state, posts: [{
                    id: 4, text: action.newPost
                }, ...state.posts]
            }
        }
        case "SET-PROFILE-USER": {
            return {...state, profileUser: action.profileUser}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "UPDATE-MY-FOTO":{
            return {...state,
                profileUser: {...state.profileUser,
                    photos : {...action.photos.photos}}}
        }

        default:
            return state
    }
}


type setProfileUsersType = ReturnType<typeof setProfileUsers>
export const setProfileUsers = (profileUser: ProfilesType) => {
    return {
        type: 'SET-PROFILE-USER',
        profileUser
    } as const
}

type addedPostInStateACType = ReturnType<typeof addedPostInStateAC>
export const addedPostInStateAC = (newPost: string) => {
    return {
        type: 'ADDED-POST-STATE',
        newPost
    } as const
}


type setStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

type updateMyFotoType = ReturnType<typeof updateMyFoto>
export const updateMyFoto = (photos:any) => {
    return {
        type: 'UPDATE-MY-FOTO',
        photos
    } as const
}


/*thunk*/
export const chosedFoto = (myFoto: File) => (dispatch: Dispatch) => {
    console.log('alalala')
    profilesAPI.updateMyFoto(myFoto)
        .then((response) => {
            if(response.data.resultCode===0){
                dispatch(updateMyFoto(response.data.data))
            }

        })
}


export const getProfiles = (userId: string) => (dispatch: Dispatch) => {
    profilesAPI.getProfiles(userId)
        .then((data) => {
            dispatch(setProfileUsers(data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profilesAPI.getStatus(userId)
        .then((data) => {
            dispatch(setStatus(data))
        })
}

export const updateStatusMyProfile = (status: string) => (dispatch: Dispatch) => {
    profilesAPI.updateStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
}

type ActionType = addedPostInStateACType
    | setProfileUsersType
    | setStatusType
    | updateMyFotoType
