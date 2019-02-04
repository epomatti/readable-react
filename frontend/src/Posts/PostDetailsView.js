import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Link } from 'react-router-dom'
import { handleDeletePost } from './actions'
import AddComment from '../components/AddComment';

class PostDetailsView extends React.Component {
  deletePost = (e) => {
    const { id, dispatch } = this.props
    e.preventDefault()
    dispatch(handleDeletePost(id))
  }
  render() {
    const { id } = this.props
    return (
      <div>
        <h1>Post Details</h1>
        <Post id={id} />
        <div className="col-1">
          <Link className="btn btn-warning" to={`/edit/${id}`} >Edit</Link>
        </div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={e => this.deletePost(e)}>Delete</button>
        </div>
        <h2>Comments</h2>
        <AddComment parentId={id} />
      </div>
    )
  }
}
function mapStateToProps({ posts }, { match }) {
  return {
    id: Object.values(posts).filter(p => p.id === match.params.id)[0].id
  }
}
export default connect(mapStateToProps)(PostDetailsView)