import * as Api from '../Utils/api'
const uuid = require('uuid/v1')

export const ADD_COMMENT = 'ADD_COMMENT'


function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const handleAddComment = (comment) => {
  return (dispatch) => {
    return Api.addComment(comment).then(c => dispatch(addComment({
      id: uuid(),
      ...c
    })))
  }
}