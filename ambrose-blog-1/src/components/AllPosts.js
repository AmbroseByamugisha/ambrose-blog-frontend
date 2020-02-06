import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditPost from './EditPost'
import CreatePost from './CreatePost'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import { toggleIsDeleted } from '../actions'

class AllPost extends Component {

  handleToggleIsDeleted = () => {

    const { dispatch } = this.props
    //const { body, title } = this.state
    
    dispatch(toggleIsDeleted())
    }
  render() {
    this.handleToggleIsDeleted()
    const { posts, loggedIn } = this.props
    return (
      <div>
        <div>
          {loggedIn ? <CreatePost/>: null}
        </div>
        <h3 className="post_heading">All Posts</h3>
        {console.log(posts)}
        {posts.map((post) => (
        <div key={post.id}>
          {post.editing ? <EditPost post={post} key={post.id} /> : 
          <Link to={'/post/' + post.id} key={post.id}><PostSummary post={post}
          key={post.id} /></Link> }
        </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loggedIn: state.auth.loggedIn,
    isDeleted: state.isDeleted
  }
}
export default connect(mapStateToProps)(AllPost)