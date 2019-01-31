import React, { Component, Fragment } from 'react'
import ListPostsView from '../Posts/ListPostsView'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { handleInitialData } from '../Utils/actions'
import { connect } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import NewPost from '../Posts/NewPost'
import CategoryView from '../Categories/CategoryView'

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
    Go back to the <Link to="/">root page</Link>
  </div>
)
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading, categories } = this.props
    return (
      <Router>
        <Fragment>
          {loading === true
            ? null
            : <div>
              <NavBar />
              <div className="container my-custom-container">
                <Switch>
                  <Route path='/' exact component={ListPostsView} />
                  {Object.values(categories).map((c) =>
                    <Route key={c.name} path={`/${c.path}`} render={() =>
                      <CategoryView category={c.name} />
                    } exact></Route>
                  )}
                  <Route path='/new' exact component={NewPost} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>}
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ categories, posts }) {
  return {
    loading: categories === null || posts === null,
    categories
  }
}
export default connect(mapStateToProps)(App)