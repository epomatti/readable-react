import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddComment, handleReceiveComments } from '../actions/comments'

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(handleAddComment(comment)),
    receiveComments: (parentId) => dispatch(handleReceiveComments(parentId))
  };
}

class AddComment extends Component {
  state = {
    text: '',
    author: ''
  }
  onTextChange = (e) => {
    this.setState({ text: e.target.value })
  }
  onAddComment = (e) => {
    e.preventDefault()
    const { text, author } = this.state
    const { addComment, receiveComments, parentId } = this.props
    addComment({ text, author, parentId })
    receiveComments(parentId)
    this.resetState()
  }
  resetState = () => {
    this.setState({
      text: '',
      author: ''
    })
  }
  render() {
    const { text, author } = this.state
    return (
      <form>
        <div className="row">
          <div className="col-9">
            <div className="form-group">
              <input
                value={author}
                type="text"
                className="form-control"
                placeholder="Your name"
                onChange={(e) => this.onTextChange(e)} />
            </div>
            <div className="form-group">
              <textarea
                rows="2"
                value={text}
                className="form-control"
                placeholder="What do you think of this post?"
                onChange={(e) => this.onTextChange(e)} />
            </div>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={(e) => this.onAddComment(e)}>Add Comment</button>
          </div>
        </div>
      </form >
    );
  }
}

export default connect(null,
  mapDispatchToProps
)(AddComment);