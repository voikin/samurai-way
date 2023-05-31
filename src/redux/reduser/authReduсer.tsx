import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


const initialState = {
    id: 1,
    login: '',
    email: '',
    isLogin: false
}

export type initialStateType = typeof initialState

export const authReduсer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET-DATA-LOGIN-WITH-SERVER': {
            return {...state,email:action.email,login: action.login,id: action.id,isLogin: action.isLogin}
        }
        default:
            return state
    }
}

type ActionType = setDataLoginWithServerType

type setDataLoginWithServerType = ReturnType<typeof setDataLoginWithServer>
export const setDataLoginWithServer = (
    email:string,login:string,id:number,isLogin:boolean) => {
    return {
        type: 'SET-DATA-LOGIN-WITH-SERVER',
        email,
        login,
        id,
        isLogin
    } as const
}


/*thunk*/

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setDataLoginWithServer('','',1,false))
            }
        })
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getAuthMe())
            }else {
                if(email!=='pavelminsk1979@mail.ru'){
                    let action = stopSubmit('loginForm',{email:'Error email'})
                    dispatch(action)
                }else {
                    let action = stopSubmit('loginForm',{password:'Error password'})
                    dispatch(action)
                }

            }
        })
}


export const getAuthMe = () => (dispatch: Dispatch) => {
    authAPI.getAuthMe()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setDataLoginWithServer(
                    data.data.email,data.data.login,data.data.id,true))
            }
        })
}


