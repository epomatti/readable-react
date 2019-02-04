import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ comments }, { id, parentId }) {
  return {
    comment: comments[parentId].find(c => c.id === id)
  }
}

class Comment extends Component {
  render() {
    const { author, text } = this.props.comment
    return (
      <div>
        {`${author} said "${text}" about this post.`}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Comment);