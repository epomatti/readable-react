import React, { Component, Fragment } from 'react'
import CategoriesView from '../Categories/CategoriesView'
import ListPostsView from '../Posts/ListPostsView'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { handleInitialData } from '../Utils/actions'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

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
          <LoadingBar />
          {loading === true
            ? null
            : <div className="container">
              <h1>Readable</h1>
              <Switch>
                <Route path='/' exact render={() =>
                  <Fragment>
                    <CategoriesView />
                    <br></br>
                    <ListPostsView />
                  </Fragment>
                } />
                {Object.values(categories).map((c) =>
                  <Route key={c.name} path={`/${c.path}`} exact></Route>
                )}
                <Route component={NoMatch} />
              </Switch>
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