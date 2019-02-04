import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleUpdateComment } from '../actions/comments'

function mapStateToProps(state, { command }) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateComent: (c) => dispatch(handleUpdateComment(c))
  };
}

class EditComment extends Component {
  state = {
    author: '',
    text: ''
  }
  onChangeAuthor = (e) => {
    this.setState({ author: e.target.value })
  }
  onChangeText = (e) => {
    this.setState({ text: e.target.value })
  }
  onUpdateComment = (e) => {
    e.preventDeafult()
    const { dispatch , updateComment} = this.props
    dispatch(updateComment(this.value))
  }
  render() {
    const { author, text } = this.state
    return (
      <Fragment>
        <button type="button" className="btn btn-outline-warning btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
          Edit
        </button>

        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Comment Edit</h5>
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
                    <input className="form-control" value={text} onChange={e => this.onChangeText(e)} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
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