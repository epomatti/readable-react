import React, { Component } from 'react';
import { connect } from 'react-redux';
import utils from '../Utils/util';

function mapStateToProps({ comments }, { id }) {
  return {
    comment: utils.find(id, comments)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // todo
  };
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