import React from 'react'
import { connect } from 'react-redux'

class Post extends React.Component {
  render() {
    const { id } = this.props
    return (
      <p>
        {id}
      </p>
    )
  }
}
export default connect()(Post)