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
        ...action.post
      }
    case DOWNVOTE_POST:
      return {
        ...state
      }
    default:
      return state
  }
}