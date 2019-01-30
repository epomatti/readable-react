import * as Api from '../Utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { receiveCategories } from '../Categories/actions'
import { receivePosts } from '../Posts/actions'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return Api.getInitialData()
      .then(({ categories, posts }) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
  }
}