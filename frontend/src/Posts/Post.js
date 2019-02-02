import React from 'react'
import { connect } from 'react-redux'
import { TiMessage, TiThumbsUp, TiThumbsDown } from 'react-icons/ti/index'
import { formatDate } from '../Utils/format'
import { handleToggleUpvote, handleToggleDownvote } from './actions'

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
  render() {
    const { post } = this.props
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h6>
            <i>{`by @${post.author} at ${formatDate(post.timestamp)}`}</i>
          </h6>
          <p className="card-text">{post.body}</p>
          <div className="row">
            <div className="col-1">
              <TiMessage></TiMessage><span>{post.commentCount}</span>
            </div>
            <div className="col-2">
              <span>Score: {post.voteScore}</span>
            </div>
            <div className="col-2">
              <button onClick={this.handleUpvote}>
                <TiThumbsUp />
              </button>
              <button onClick={this.handleDownvote}>
                <TiThumbsDown />
              </button>
            </div>
            <div className="col-4">
              Category: <span className="badge badge-secondary">{post.category}</span>
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
    downvote: (id) => dispatch(handleToggleDownvote(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)