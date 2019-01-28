import React from 'react'
import * as Api from '../Utils/api.js'

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
          <span style={{ padding: 5 }}>
            <button className="btn btn-primary">{c.name}</button>
          </span>
        )}
      </div>
    )
  }
}
export default CategoriesView