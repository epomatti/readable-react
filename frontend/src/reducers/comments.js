import { ADD_COMMENT } from '../actions/comments'

export function comments(comments = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...comments,
        comments: comments.concat(action.comment)
      }
    default:
      return comments
  }
}