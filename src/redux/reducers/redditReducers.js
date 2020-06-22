import { combineReducers } from 'redux'
import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from "../actionTypes.js"

function selectedSubreddit(state = 'reactjs', action) {
    // state = 'reactjs' sets the inital state
    // default subreddit is the reactjs subreddit
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

function posts(
    // defining the initial state
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type){
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, 
                {
                    didInvalidate: true
                })
        case REQUEST_POSTS:
            return Object.assign({}, state, 
                {
                    isFetching: true,
                    didInvalidate: false
                })
        case RECEIVE_POSTS:
            return Object.assign({}, state, 
                {
                    isFetching: false,
                    didInvalidate: false,
                    items: action.posts,
                    lastUpdated: action.receivedAt
                })
        default: 
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
                // updating items is in the posts reducer instead of this reducer
                // [action.subreddit] finds the specific subreddit dict to update?
                // how does it do this? 
            })
            // equivalent to 
            // let nextState = {}
            // nextState[action.subreddit] = posts(state[action.subreddit], action)
            // return Object.assign({}, state, nextState)
        default:
            return state
    }
}

const redditReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

// store architecture
// selectedSubreddit: some_name -> stores the current subreddit selected
// postsBySubreddit: { -> stores the posts that have already been fetched
//     subreddit1: {
//         isFetching: true,
//         didInvalidate: false,
//         items: [  -> list of posts in the subreddit
//                 {
//                     id: 1,
//                     title: "some_title"
//                 }
//        ]
//     }
//     subreddit2: {
//         same stuff
//     }
// }