import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class ListPostsView extends React.Component {
  render() {
    const { postIds } = this.props
    console.log(postIds)
    return (
      <div>
        <h3>All Posts</h3>
        <p>A list of all posts in all categories:</p>
        {postIds.map((id) =>
          <Post id={id} />
        )}
      </div>
    )
  }
}
function mapStateToProps({ posts }) {
  //console.log(Object.keys(posts))
  return {
    postIds: Object.keys(posts)
  }
}
export default connect(mapStateToProps)(ListPostsView)