import React from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from './actions'

class NewPost extends React.Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }
  componentDidMount() {
    const { post } = this.props
    // todo
    if (post) {
      this.setState({
        ...post
      })
    }
  }
  changeField = (name, event) => {
    this.setState({ [name]: event.target.value })
  }
  submit = (e) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(handleAddPost(this.state))
  }
  render() {
    const { categories } = this.props
    const { title, body, author, category } = this.state
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" value={title} onChange={e => this.changeField('title', e)} />
          </div>
          <div className="form-group">
            <label >Body</label>
            <textarea className="form-control" rows="3" value={body} onChange={e => this.changeField('body', e)} />
          </div>
          <div className="form-group">
            <label >Author</label>
            <input type="text" className="form-control" value={author} onChange={e => this.changeField('author', e)} />
          </div>
          <div className="form-group">
            <label>Select the Category</label>
            <select className="form-control" value={category} onChange={e => this.changeField('category', e)}>
              <option></option>
              {Object.values(categories).map(c =>
                <option key={c.name} >{c.name}</option>
              )}
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-primary" onClick={e => this.submit(e)}>Submit</button>
          </div>
        </form>
      </div >
    )
  }
}
function mapStateToProps({ categories }) {
  return {
    categories
  }
}
export default connect(mapStateToProps)(NewPost)