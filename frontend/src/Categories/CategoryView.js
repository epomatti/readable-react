import React from 'react'
import { connect } from 'react-redux'
import ListPostsView from '../Posts/ListPostsView';

class CategoryView extends React.Component {
  render() {
    const { category, postsByCategory } = this.props
    return (
      <div className="container">
        <h1>{category}</h1>
        <ListPostsView postsByCategory={postsByCategory} />
      </div>
    )
  }
}
function mapStateToProps({ posts }, { category }) {
  return {
    postsByCategory: Object.values(posts).filter(p => p.category === category)
  }
}
export default connect(mapStateToProps)(CategoryView)