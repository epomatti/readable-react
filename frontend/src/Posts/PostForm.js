import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddPost, handleUpdatePost } from './actions'

class PostForm extends React.Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }
  componentDidMount() {
    const { post } = this.props
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
    const { dispatch, match } = this.props
    e.preventDefault()
    match.params.id
      ? dispatch(handleUpdatePost({
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
        category: this.state.category
      }))
      : dispatch(handleAddPost(this.state))
  }
  render() {
    const { categories, post } = this.props
    const { title, body, author, category } = this.state
    const viewTitle = post ? "Edit Post" : "New post"
    return (
      <div>
        <h1 className="mt-4">{viewTitle}</h1>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder='Give a nice title for your post' value={title} onChange={e => this.changeField('title', e)} />
          </div>
          <div className="form-group">
            <label >Body</label>
            <textarea className="form-control" placeholder='The content of your post' rows="3" value={body} onChange={e => this.changeField('body', e)} />
          </div>
          <div className="form-group">
            <label >Author</label>
            <input type="text" className="form-control" placeholder='Creator' value={author} onChange={e => this.changeField('author', e)} />
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
            <button type="submit" className="btn btn-primary" style={{ paddingLeft: 20, paddingRight: 20 }} onClick={e => this.submit(e)}>Submit</button>
            <Link
              className="btn btn-secondary"
              style={{ marginLeft: 5 }}
              type="submit"
              to="/">Cancel</Link>
          </div>
        </form>
      </div >
    )
  }
}
function mapStateToProps({ categories, posts }, { match }) {
  return {
    categories,
    post: match.params.id ? Object.values(posts).filter(p => p.id === match.params.id)[0] : null
  }
}
export default connect(mapStateToProps)(PostForm)