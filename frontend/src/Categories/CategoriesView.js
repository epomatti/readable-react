import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CategoriesView extends React.Component {
  render() {
    const { categories } = this.props
    return (
      <div>
        <h3>Categories</h3>
        <p>Select one of the categories bellow to view posts:</p>
        {Object.values(categories).map((c) =>
          <span key={c.name} style={{ padding: 5 }}>
            <Link
              className="btn btn-primary"
              to={`/categories/${c.path}`}>
              {c.name}
            </Link>
          </span>
        )}
      </div>
    )
  }
}
function mapStateToProps({ categories }) {
  return {
    categories
  }
}
export default connect(mapStateToProps)(CategoriesView)