export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}