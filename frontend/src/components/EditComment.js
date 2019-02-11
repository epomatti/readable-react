import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleUpdateComment, handleReceiveComments } from '../actions/comments'

function mapStateToProps(state, { comment }) {
  return {
    //comment: state.comments[comment.parentId].find(c => c.id === comment.id)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateComment: (c) => dispatch(handleUpdateComment(c)),
    receiveComments: (parentId) => dispatch(handleReceiveComments(parentId))
  };
}

class EditComment extends Component {
  state = {
    author: '',
    body: ''
  }
  onChangeAuthor = (e) => {
    this.setState({ author: e.target.value })
  }
  onChangeText = (e) => {
    this.setState({ body: e.target.value })
  }
  onUpdateComment = (e) => {
    const { parentId, id } = this.props.comment
    const { updateComment, receiveComments } = this.props
    const { body } = this.state
    updateComment({ body, parentId, id })
    receiveComments(parentId)
  }
  componentDidMount() {
    const { author, body, parentId } = this.props.comment
    this.setState(
      {
        author,
        body,
        parentId
      }
    )
  }
  render() {
    const { author, body } = this.state
    const { id } = this.props.comment
    return (
      <Fragment>
        <button type="button" className="btn btn-outline-warning btn-sm" data-toggle="modal" data-target={`#modalCenter${id}`}>
          Edit
        </button>

        <div className="modal fade" id={`modalCenter${id}`} tabIndex="-1" role="dialog" aria-labelledby={`#modalCenterTitle${id}`} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`#modalCenter${id}`}>Comment Edit</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Author</label>
                    <input className="form-control" value={author} onChange={e => this.onChangeAuthor(e)} />
                  </div>
                  <div className="form-group">
                    <label>Text</label>
                    <input className="form-control" value={body} onChange={e => this.onChangeText(e)} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={e => this.onUpdateComment(e)}>Save changes</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(EditComment);