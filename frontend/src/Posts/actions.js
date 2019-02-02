import * as Api from '../Utils/api'
const uuid = require('uuid/v1');

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

function upvote(post) {
  return {
    type: UPVOTE_POST,
    post
  }
}

export const handleToggleUpvote = (id) => {
  return (dispatch) => {
    return Api.upvotePost(id)
      .then((post) => dispatch(upvote(post)))
  }
}

function downvote(post) {
  return {
    type: DOWNVOTE_POST,
    post
  }
}

export const handleToggleDownvote = (id) => {
  return (dispatch) => {
    return Api.downvotePost(id)
      .then((post) => dispatch(downvote(post)))
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

export const handleAddPost = (post) => {
  return (dispatch) => {
    return Api.addPost({
      ...post,
      id: uuid(),
      timestamp: Date.now()
    })
      .then((post) => dispatch(addPost(post)))
  }
}

export const handleUpdatePost = (post) => {
  return (dispatch) => {
    return Api.updatePost({
      ...post
    })
      .then((post) => dispatch(updatePost(post)))
  }
}

export const handleDeletePost = (id) => {
  return (dispatch) => {
    return Api.deletePost(id)
      .then((id) => dispatch(deletePost(id)))
  }
}