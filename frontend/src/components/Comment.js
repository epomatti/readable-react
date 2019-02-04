import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleDeleteComment, handleReceiveComments } from '../actions/comments'
import EditComment from './EditComment';

function mapStateToProps({ comments }, { id, parentId }) {
  return {
    comment: comments[parentId].find(c => c.id === id)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (comment) => dispatch(handleDeleteComment(comment)),
    receiveComments: (parentId) => dispatch(handleReceiveComments(parentId))
  }
}

class Comment extends Component {
  onDeleteComment = (e) => {
    e.preventDefault()
    const { comment, deleteComment, receiveComments } = this.props
    deleteComment(comment)
    receiveComments(comment.parentId)
  }
  render() {
    const { body, id } = this.props.comment
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              {body}
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={e => this.onDeleteComment(e)}>Delete</button>
            <EditComment />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Comment);
