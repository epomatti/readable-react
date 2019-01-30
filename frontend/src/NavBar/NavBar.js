import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './react.png'

class NavBar extends React.Component {
  render() {
    const { categories } = this.props
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/">
        <img src={logo} width="35" height="35" class="d-inline-block align-top" alt="" />
          Readable
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {Object.values(categories).map((c) =>
              <span key={c.name} style={{ padding: 5 }}>
                <li className="nav-item">
                  <Link
                    className="nav-link" href="#"
                    to={`/${c.path}`}>
                    {c.name.charAt(0).toUpperCase() + c.name.substr(1)}
                  </Link>
                </li>
              </span>
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-success my-2 my-sm-0" type="submit">New Post</button>
        </form>
        </div>
      </nav>
    )
  }
}
function mapStateToProps({ categories }) {
  return {
    categories
  }
}
export default connect(mapStateToProps)(NavBar)