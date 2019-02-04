import { combineReducers } from 'redux'
import { categories } from '../Categories/reducers'
import { posts } from '../Posts/reducers'
import { comments } from '../reducers/comments'

export default combineReducers({
  categories,
  posts,
  comments
})