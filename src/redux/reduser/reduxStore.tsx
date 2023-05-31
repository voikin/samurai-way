import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduсer} from "./profileReduсer";
import {dialogReduсer} from "./dialogReduсer";
import {participantReduсer} from "./participantReduсer";
import {authReduсer} from "./authReduсer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

const commonReducer = combineReducers({
    profileState: profileReduсer,
    dialogState: dialogReduсer,
    participantState: participantReduсer,
    auth: authReduсer,
    form:formReducer
})

export const store = createStore(commonReducer,applyMiddleware(thunk))

export type StateType = ReturnType<typeof commonReducer>

// @ts-ignore
window.store = store