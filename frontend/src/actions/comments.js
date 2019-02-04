import * as Api from '../Utils/api'
const uuid = require('uuid/v1')

export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'


function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const handleAddComment = (comment) => {
  return (dispatch) => {
    return Api.addComment(comment)
      .then(c => dispatch(addComment({
        id: uuid(),
        ...c
      })))
  }
}

function receiveComments(parentId, comments) {
  return {
    type: RECEIVE_COMMENTS,
    parentId,
    comments
  }
}

export const handleReceiveComments = (parentId) => {
  return (dispatch) => {
    return Api.getCommentsByPost(parentId)
      .then(comments => dispatch(receiveComments({
        parentId,
        comments
      })))
  }
}