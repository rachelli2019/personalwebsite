import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from'redux'
import redditReducer from "../redux/reducers"

const loggerMiddleware = createLogger()

export default function redditStore(preloadedState){
    return createStore(
        redditReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware, //lets us dispatch() functions
            loggerMiddleware // middleware that logs actions
        )
    )
}

// store.dispatch(selectSubreddit('reactjs'))
// // we're getting the reactjs subreddit
// store.dispatch(fetchPostsIfNeeded('reactjs')).then(() => console.log(store.getState()))
// // we're getting the posts from this subreddit