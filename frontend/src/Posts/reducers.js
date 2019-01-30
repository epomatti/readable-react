import { RECEIVE_POSTS } from './actions'

export function posts(state = null, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...Object.assign({}, ...action.posts.map(post => ({ [post.id]: post })))
      }
    default:
      return state
  }
}