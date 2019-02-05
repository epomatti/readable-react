import { ADD_COMMENT, RECEIVE_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT } from '../actions/comments'

export function comments(comments = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...comments,
        ...comments[action.comment.parentId].concat(action.comment)
      }
    case RECEIVE_COMMENTS:
      return {
        ...comments,
        [action.parentId]: [...action.comments]
      }
    case DELETE_COMMENT:
      return {
        ...comments,
        ...comments[action.comment.parentId].filter(c => c.id !== action.comment.id)
      }
    case UPDATE_COMMENT:
      return {
        ...comments,
        ...comments[action.comment.parentId].filter(c => c.id !== action.comment.id).concat(action.comment)
      }
    default:
      return comments
  }
}