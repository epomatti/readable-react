import * as Api from '../Utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

export const receiveAllPosts = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  }
}
export function handleReceiveAllPosts() {
  return (dispatch) => {
    dispatch(showLoading())
    return Api.getAllPosts()
      .then((posts) => {
        dispatch(receiveAllPosts(posts))
        dispatch(hideLoading())
      })
  }
}