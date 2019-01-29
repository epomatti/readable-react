import React from 'react'
import * as Api from '../Utils/api.js'
import { Link } from 'react-router-dom'

class CategoriesView extends React.Component {
  state = {
    categories: []
  }
  componentDidMount() {
    Api.getCategories().then((categories) => {
      this.setState(() => ({
        categories
      }))
    })
  }
  render() {
    const { categories } = this.state
    return (
      <div>
        <h3>Categories</h3>
        <p>Select one of the categories bellow to view posts:</p>
        {categories.map((c) =>
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
export default CategoriesView