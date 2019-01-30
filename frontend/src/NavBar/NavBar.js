import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends React.Component {
  render() {
    const { categories } = this.props
    return (
      < nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <Link className="navbar-brand" to="/">
          Readable
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Object.values(categories).map((c) =>
              <span key={c.name} style={{ padding: 5 }}>
                <li className="nav-item">
                  <Link
                    className="nav-link" href="#"
                    to={`/${c.path}`}>
                    {c.name}
                  </Link>
                </li>
              </span>
            )}
          </ul>
        </div>
      </nav >
    )
  }
}
function mapStateToProps({ categories }) {
  return {
    categories
  }
}
export default connect(mapStateToProps)(NavBar)