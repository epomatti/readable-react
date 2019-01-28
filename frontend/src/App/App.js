import React, { Component } from 'react'
import CategoriesView from '../Categories/CategoriesView';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Readable</h1>
        <CategoriesView />
      </div>
    );
  }
}

export default App