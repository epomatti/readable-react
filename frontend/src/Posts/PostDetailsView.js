import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Link } from 'react-router-dom'
import { handleDeletePost, handleReceivePost } from './actions'
import AddComment from '../components/AddComment';
import Comments from '../components/Comments'

class PostDetailsView extends React.Component {
  deletePost = (e) => {
    const { id, dispatch } = this.props
    e.preventDefault()
    dispatch(handleDeletePost(id))
  }
  refresh = () => {
    const { id, dispatch } = this.props
    dispatch(handleReceivePost(id))
  }
  render() {
    const { id } = this.props
    if (id === null) {
      return (
        <div>
          <h3>Post not found</h3>
          Go back to the <Link to="/">root page</Link>
        </div>
      )
    }
    return (
      <div>
        <h1>Post Details</h1>
        <Post id={id} />
        <h2>Comments</h2>
        <Comments parentId={id} refresh={() => this.refresh()} />
        <AddComment parentId={id} />
      </div>
    )
  }
}
function mapStateToProps({ posts }, { match }) {
  const post = Object.values(posts).find(p => p.id === match.params.id)
  return {
    id: post ? post.id : null
  }
}
export default connect(mapStateToProps)(PostDetailsView)