import * as Api from '../Utils/api'
const uuid = require('uuid/v1')

export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const handleAddComment = (comment) => {
  return (dispatch) => {
    return Api.addComment({
      id: uuid(),
      ...comment
    })
      .then(c => dispatch(addComment(c)))
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
      .then(comments => dispatch(receiveComments(
        parentId,
        comments
      )))
  }
}

function deleteComment(comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export const handleDeleteComment = (comment) => {
  return (dispatch) => {
    dispatch(deleteComment(comment))
    Api.deleteComment(comment.id)
      .catch(dispatch(addComment(comment)))
  }
}

function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export const handleUpdateComment = (comment) => {
  return (dispatch) => {
    dispatch(updateComment(comment))
    Api.updateComment(comment)
      .then(c => dispatch(updateComment(c)))
  }
}

function upvoteComment(comment) {
  return {
    type: UPVOTE_COMMENT,
    comment
  }
}

export const handleUpvoteComment = (id) => {
  return (dispatch) => {
    Api.upvoteComment(id)
      .then(c => dispatch(upvoteComment(c)))
  }
}

function downvoteComment(comment) {
  return {
    type: DOWNVOTE_COMMENT,
    comment
  }
}

export const handleDownvoteComment = (id) => {
  return (dispatch) => {
    Api.downvoteComment(id)
      .then(c => dispatch(downvoteComment(c)))
  }
}