const url = 'http://localhost:3001'
const headers = {
  'Accept': 'application/json',
  'Authorization': 'standalone_token'
}

// Initial Data
export const getCategories = () =>
  fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${url}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export function getInitialData() {
  return Promise.all([
    getCategories(),
    getAllPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts,
  }))
}

// Votes
export const upvotePost = () => votePost('upVote')

export const downvotePost = () => votePost('downVote')

const votePost = (option) =>
  fetch(`${url}/posts`,
    {
      headers,
      method: 'post',
      body: JSON.stringify(option)
    })
    .then(res => res.json())
    .then(data => data)


