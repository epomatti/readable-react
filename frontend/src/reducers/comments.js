import { ADD_COMMENT, RECEIVE_COMMENTS } from '../actions/comments'

export function comments(comments = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...comments,
        ...comments.concat(action.comment)
      }
    case RECEIVE_COMMENTS:
      return {
        ...comments,
        [action.parentId]: [...action.comments]

      }
    default:
      return comments
  }
}