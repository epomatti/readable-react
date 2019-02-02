import { RECEIVE_POSTS, UPVOTE_POST, DOWNVOTE_POST, ADD_POST, UPDATE_POST } from './actions'

export function posts(posts = null, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...posts,
        ...fromArrayToObject(action.posts)
      }
    case UPVOTE_POST:
      return {
        ...posts,
        ...arrayPostScore(posts, action.post)
      }
    case DOWNVOTE_POST:
      return {
        ...posts,
        ...arrayPostScore(posts, action.post)
      }
    case ADD_POST:
      return {
        ...posts,
        ...fromArrayToObject(Object.values(posts).concat([action.post]))
      }
    case UPDATE_POST:
      return {
        ...posts,
        [action.post.id]: {
          ...posts[action.post.id],
          [action.post.id]: {
            title: action.post.title,
            body: action.post.body
          }
        }
      }
    default:
      return posts
  }
}

function arrayPostScore(posts, post) {
  return fromArrayToObject(Object.values(posts)
    .map((p) => p.id === post.id ? post : p))
}

function fromArrayToObject(posts) {
  return Object.assign({}, ...posts.map(post => ({ [post.id]: post })))
}