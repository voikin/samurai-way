import {addedPostInStateAC, profileReduсer} from "../redux/reduser/profileReduсer";

let startState: any

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, text: 'Hay'},
            {id: 2, text: 'What is it'},
            {id: 3, text: 'Give me money'}
        ]
    }
})

test('post should be added', () => {

    const newPost = 'Ok'
    const endState = profileReduсer(startState, addedPostInStateAC(newPost))

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].text).toBe('Ok')
})