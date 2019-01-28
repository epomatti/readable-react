import React, { Component, Fragment } from 'react'
import CategoriesView from '../Categories/CategoriesView'
import ListPostsView from '../Posts/ListPostsView'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
    Go back to the <Link to="/">root page</Link>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

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

        </div>
      </Router>
    );
  }
}

export default App