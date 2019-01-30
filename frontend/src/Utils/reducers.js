import { combineReducers } from 'redux'
import { categories } from '../Categories/reducers'
import { posts } from '../Posts/reducers'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  categories,
  posts,
  loadingBar: loadingBarReducer
})