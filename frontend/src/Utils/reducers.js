import { combineReducers } from 'redux'
import { categories } from '../Categories/reducers'
import { posts } from '../Posts/reducers'

export default combineReducers({
  categories,
  posts
})