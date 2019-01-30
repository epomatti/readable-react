export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}