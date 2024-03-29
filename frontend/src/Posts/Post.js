import React from 'react'
import { connect } from 'react-redux'
import { TiMessage, TiThumbsUp, TiThumbsDown } from 'react-icons/ti/index'
import { formatDate } from '../Utils/format'
import { handleToggleUpvote, handleToggleDownvote } from './actions'
import { Link } from 'react-router-dom'
import { handleDeletePost } from './actions'

class Post extends React.Component {
  handleUpvote = (e) => {
    e.preventDefault()
    const { upvote, post } = this.props
    upvote(post.id)
  }
  handleDownvote = (e) => {
    e.preventDefault()
    const { downvote, post } = this.props
    downvote(post.id)
  }
  onDelete = (e) => {
    e.preventDefault()
    const { deletePost, post } = this.props
    deletePost(post.id)
  }
  render() {
    const { post } = this.props
    return (

      <div className="card">
        <div className="card-body" style={{ marginLeft: 20, marginRight: -20 }}>
          <h5 className="card-title">{post.title}</h5>
          <h6>
            <i>{`by @${post.author} at ${formatDate(post.timestamp)}`}</i>
          </h6>
          <p className="card-text">{post.body}</p>
          <div className="row">
            <div className="col-1" style={{ marginTop: 5 }}>
              <TiMessage></TiMessage><span>{post.commentCount}</span>
            </div>
            <div className="col-2" style={{ marginTop: 5 }}>
              <span>Score: {post.voteScore}</span>
            </div>
            <div  >
              <button className="btn btn-default btn-lg" style={{ padding: "0px 0px 0px 0px", margin: "0px 0px 0px 0px" }} onClick={this.handleUpvote}>
                <TiThumbsUp />
              </button>
              <button className="btn btn-default btn-lg" style={{ padding: "0px 0px 0px 0px", margin: "0px 50px 0px 8px" }} onClick={this.handleDownvote}>
                <TiThumbsDown />
              </button>
            </div>
            <div className="col-2" style={{ marginTop: 5 }}>
              <h5><span className="badge badge-secondary">{post.category}</span></h5>
            </div>
            <div className="col-5">
              <Link
                style={{ marginRight: 2 }}
                className="btn btn-info"
                to={`/${post.category}/${post.id}`} >Details</Link>
              <Link
                style={{ marginRight: 2 }}
                className="btn btn-warning"
                to={`/edit/${post.id}`} >Edit</Link>
              <button
                className="btn btn-danger"
                onClick={e => this.onDelete(e)}>Delete</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
function mapStateToProps({ posts }, { id }) {
  const post = posts[id]
  return {
    post
  }
}
function mapDispatchToProps(dispatch) {
  return {
    upvote: (id) => dispatch(handleToggleUpvote(id)),
    downvote: (id) => dispatch(handleToggleDownvote(id)),
    deletePost: (id) => dispatch(handleDeletePost(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)