const url = 'http://localhost:3001'
const headers = {
  'Accept': 'application/json',
  'Authorization': 'standalone_token',
  'Content-Type': 'application/json'
}

// Initial Data
export function getInitialData() {
  return Promise.all([
    getCategories(),
    getAllPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts,
  }))
}

// Categories
export const getCategories = () =>
  fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

// Posts
export const getAllPosts = () =>
  fetch(`${url}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
  fetch(`${url}/posts`, {
    method: 'post',
    headers,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)


// Votes
export const upvotePost = (id) => votePost(id, 'upVote')

export const downvotePost = (id) => votePost(id, 'downVote')

const votePost = (id, option) =>
  fetch(`${url}/posts/${id}`, {
    method: 'post',
    headers,
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)
