
import {addedMessageStatetAC, dialogReduсer, initialMessageStateType} from "../redux/reduser/dialogReduсer";

let startState: initialMessageStateType

beforeEach(() => {
    startState = {
        userName: [
            {idName: 1, name: 'Pavel'},
            {idName: 2, name: 'Olga'}
        ],
        messageState: [
            {id: 1, message: 'I want to buy a car'},
            {id: 2, message: 'Mercedes'}
        ]
    }
})

 test('message should be added', () => {

    const newMessage = 'BMW'
    const endState = dialogReduсer(startState, addedMessageStatetAC(newMessage))

    expect(endState.messageState.length).toBe(3)
    expect(endState.messageState[0].message).toBe('BMW')
})