import React from 'react'
import { connect } from 'react-redux'
import { TiMessage, TiThumbsUp, TiThumbsDown } from 'react-icons/ti/index'

class Post extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title} <i>by @{post.author}</i></h5>
          <p className="card-text">{post.body}</p>
          <div class="row">
            <div class="col-1">
              <TiMessage></TiMessage><span>{post.commentCount}</span>
            </div>
            <div class="col-2">
              <span>Score: {post.voteScore}</span>
            </div>
            <div class="col-2">
              <TiThumbsUp></TiThumbsUp>
              <TiThumbsDown></TiThumbsDown>
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
export default connect(mapStateToProps)(Post)