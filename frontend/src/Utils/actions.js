import * as Api from '../Utils/api'
import { receiveCategories } from '../Categories/actions'
import { receivePosts } from '../Posts/actions'

export function handleInitialData() {
  return (dispatch) => {
    return Api.getInitialData()
      .then(({ categories, posts }) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
      })
  }
}

