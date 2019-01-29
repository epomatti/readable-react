import { RECEIVE_ALL_POSTS } from './actions'

export function posts(state = null, action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        ...action.posts
      }
    default:
      return state
  }
}