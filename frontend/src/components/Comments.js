import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment'
import { handleReceiveComments } from '../actions/comments'

function mapStateToProps({ comments }, { parentId }) {
  return {
    comments: comments[parentId]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    receiveComments: (parentId) => dispatch(handleReceiveComments(parentId))
  };
}
class Comments extends Component {
  componentDidMount() {
    this.loadComments()
  }
  loadComments = () => {
    const { parentId, receiveComments } = this.props
    receiveComments(parentId)
  }
  render() {
    const { comments, refresh } = this.props
    return (
      <div>
        {comments
          ? comments.map(c => (
            <Comment
              key={c.id}
              id={c.id}
              parentId={c.parentId}
              reload={this.loadComments}
              refresh={refresh} />
          ))
          : (<span>No comments for this post yet. Be the first!</span>)}
      </div>
    );
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Comments);