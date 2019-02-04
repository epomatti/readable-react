import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ comments }, { parentId }) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    // todo
  };
}

class Comments extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Comments);