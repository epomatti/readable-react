import React from 'react'
import * as Api from '../Utils/api.js'
import { Link } from 'react-router-dom'

class ListPostsView extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    Api.getAllPosts().then((posts) => {
      this.setState(() => ({
        posts
      }))
    })
  }
  render() {
    const { posts } = this.state
    return (
      <div>
        <h3>All Posts</h3>
        <p>A list of all posts in all categories:</p>
        {posts.map((p) =>
          <p>{p.id}</p>
        )}
      </div>
    )
  }
}
export default ListPostsView