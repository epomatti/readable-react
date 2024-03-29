import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class ListPostsView extends React.Component {
  state = {
    sortBy: 'timestamp'
  }
  handleSort = (field) => {
    this.setState(() => ({
      sortBy: field
    }))
  }
  componentDidMount() {
    this.handleSort(this.state.sortBy)
  }
  render() {
    const { sortBy } = this.state
    let { posts } = this.props
    const itemClass = 'dropdown-item'
    posts = Object.values(posts)
      .sort((a, b) => b[sortBy] - a[sortBy])
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            style={{ marginTop: 20 }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"> Sort by
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              className={`${itemClass}${sortBy === 'timestamp' ? ' active' : ''}`}
              onClick={() => this.handleSort('timestamp')}
              href="#">Most Recent
            </button>
            <button
              className={`${itemClass}${sortBy === 'voteScore' ? ' active' : ''}`}
              onClick={() => this.handleSort('voteScore')}
              href="#">Higher Score
            </button>
          </div>
        </div>
        {posts.map((post) =>
          post !== undefined ?
            <div style={{ marginTop: 20 }}>
              <Post key={post.id} id={post.id} />
            </div> : null
        )}
      </div>
    )
  }
}
function mapStateToProps({ posts }, { postsByCategory }) {
  return {
    posts: postsByCategory ? postsByCategory : posts
  }
}
export default connect(mapStateToProps)(ListPostsView)