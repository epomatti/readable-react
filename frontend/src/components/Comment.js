import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleDeleteComment, handleReceiveComments, handleUpvoteComment, handleDownvoteComment } from '../actions/comments'
import EditComment from './EditComment';
import { TiThumbsUp, TiThumbsDown } from 'react-icons/ti/index'

function mapStateToProps({ comments }, { id, parentId }) {
  return {
    comment: comments[parentId].find(c => c.id === id)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (comment) => dispatch(handleDeleteComment(comment)),
    receiveComments: (parentId) => dispatch(handleReceiveComments(parentId)),
    upvoteComment: (id) => dispatch(handleUpvoteComment(id)),
    downvoteComment: (id) => dispatch(handleDownvoteComment(id))
  }
}

class Comment extends Component {
  onDeleteComment = (e) => {
    e.preventDefault()
    const { comment, deleteComment, receiveComments, refresh } = this.props
    deleteComment(comment)
    receiveComments(comment.parentId)
    refresh()
  }
  onUpvoteComment = (e) => {
    e.preventDefault()
    const { comment, upvoteComment, receiveComments } = this.props
    upvoteComment(comment.id)
    receiveComments(comment.parentId)
  }
  onDownvoteComment = (e) => {
    e.preventDefault()
    const { comment, downvoteComment, receiveComments } = this.props
    downvoteComment(comment.id)
    receiveComments(comment.parentId)
  }
  render() {
    const { body, voteScore } = this.props.comment
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-1">
              <button onClick={e => this.onUpvoteComment(e)}>
                <TiThumbsUp />
              </button>
              <button onClick={e => this.onDownvoteComment(e)}>
                <TiThumbsDown />
              </button>
            </div>
            <div className="col-2">
              <h1>{voteScore}</h1>
            </div>
            <div className="col-7">
              {body}
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={e => this.onDeleteComment(e)}>Delete</button>
            <EditComment comment={this.props.comment} />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Comment);
