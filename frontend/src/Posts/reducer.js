import { RECEIVE_ALL_POSTS } from './actions'

export function posts(state = null, action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        ...Object.assign({}, ...action.posts.map(post => ({ [post.id]: post })))
      }
    default:
      return state
  }
}