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

export function upvote(id) {
  return {
    type: UPVOTE_POST,
    id
  }
}

export const handleUpvote = (id) => {
  return (dispatch) => {
    return Api.upvotePost(id)
  }
}

export function downvote(id) {
  return {
    type: DOWNVOTE_POST,
    id
  }
}