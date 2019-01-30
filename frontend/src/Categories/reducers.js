import { RECEIVE_CATEGORIES } from './actions'

export function categories(state = null, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        ...action.categories
      }
    default:
      return state
  }
}