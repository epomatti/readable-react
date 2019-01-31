import * as Api from '../Utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function upvote(post) {
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

export function downvote(post) {
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