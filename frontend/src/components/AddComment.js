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
  onAuthorChange = (e) => {
    this.setState({ author: e.target.value })
  }
  onTextChange = (e) => {
    this.setState({ text: e.target.value })
  }
  onAddComment = (e) => {
    e.preventDefault()
    const { text, author } = this.state
    const { addComment, receiveComments, parentId } = this.props
    const body = text
    const timestamp = Date.now()
    addComment({ parentId, timestamp, body, author })
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
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-9">
                <div className="form-group">
                  <input
                    value={author}
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    onChange={(e) => this.onAuthorChange(e)} />
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
        </div>
      </div>
    );
  }
}

export default connect(null,
  mapDispatchToProps
)(AddComment);