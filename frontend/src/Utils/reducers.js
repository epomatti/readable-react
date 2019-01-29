import { combineReducers } from 'redux'
import { posts } from '../Posts/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  posts,
  loadingBar: loadingBarReducer
})