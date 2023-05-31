import {StateType} from "../redux/reduser/reduxStore";

 export const selectorParticipants = (state: StateType) => {
  return  state.participantState.participants
}

export const selectorCount = (state: StateType) => {
    return  state.participantState.count
}

export const selectorTotalCount = (state: StateType) => {
    return  state.participantState.totalCount
}

export const selectorActivePage = (state: StateType) => {
    return  state.participantState.activePage
}

export const selectorIsLoading = (state: StateType) => {
    return  state.participantState.isLoading
}

export const selectorDisabled = (state: StateType) => {
    return  state.participantState.disabled
}