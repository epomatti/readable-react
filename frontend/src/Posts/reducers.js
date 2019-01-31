import { RECEIVE_POSTS, UPVOTE_POST, DOWNVOTE_POST } from './actions'

export function posts(state = null, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...fromArrayToObject(action.posts)
      }
    case UPVOTE_POST:
      return {
        ...state,
        ...fromArrayToObject(Object.values(state).map((p) => p.id === action.post.id ? action.post : p))
      }
    case DOWNVOTE_POST:
      return {
        ...state,
        ...fromArrayToObject(Object.values(state).map((p) => p.id === action.post.id ? action.post : p))
      }
    default:
      return state
  }
}

function fromArrayToObject(posts) {
  return Object.assign({}, ...posts.map(post => ({ [post.id]: post })))
}