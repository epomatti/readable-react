import { RECEIVE_POSTS, UPVOTE_POST, DOWNVOTE_POST } from './actions'

export function posts(state = null, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...Object.assign({}, ...action.posts.map(post => ({ [post.id]: post })))
      }
    case UPVOTE_POST:
      return {
        ...state,
        posts: state.posts.map((p) => p.id === action.post.id ? action.post : p)
      }
    case DOWNVOTE_POST:
      return {
        ...state
      }
    default:
      return state
  }
}