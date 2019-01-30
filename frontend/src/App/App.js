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
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true
            ? null
            : <div className="container">
              <h1>Readable</h1>
              <Switch>
                <Route to='/' exact render={props =>
                  <Fragment>
                    <CategoriesView />
                    <br></br>
                    <ListPostsView />
                  </Fragment>
                } />
                <Route path="/categories/:id" exact></Route>
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
    loading: categories === null || posts === null
  }
}
export default connect(mapStateToProps)(App)