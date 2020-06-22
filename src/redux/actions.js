import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REQUEST_POSTS, RECEIVE_POSTS } from "./actionTypes";
import fetch from 'cross-fetch'
import { TRUE } from "node-sass";
// cross-fetch library to use fetch API to make network requests

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

// reddit tutorial for async redux

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

function requestPosts(subreddit) { 
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// thunk action creator

export function fetchPosts(subreddit) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // first dispatch updates the app state to inform that the API call is starting

    dispatch(requestPosts(subreddit))
    // function called by the thunk middleware can return a value, 
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.

    return fetch('https://www.reddit.com/r/${subreddit}.json')
      .then(
        response => response.json()
      )
      .then(json =>
        // can dispatch many times!
        // update app state with the results of the API call
        dispatch(receivePosts(subreddit,json))
      )
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
    // if the posts have not been fetched yet, fetch them
  }
  else if (posts.isFetching) {
    return false
    // if the posts are currently fetching dont fetch again
  }
  else{
    return posts.didInvalidate
    // what does this do?
  }
}

export function fetchPostsIfNeeded(subreddit) {
  // avoid network request if the cached value is already available

  return (dispatch, getState) => {
    // getState is a store method that returns the current state of the store 
    // getState is equal to the last value returned by the store's reducer

    // this is a thunk bc we're passing a dispatch in
    if (shouldFetchPosts(getState(), subreddit)) { // check if need to fetch
      return dispatch(fetchPosts(subreddit)) // dispatch a thunk from a thunk
    } else {
      // let the calling code know there's nothing to wait for
      return Promise.resolve()
    }
  }
}