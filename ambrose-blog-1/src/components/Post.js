import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostButtons from './PostButtons'
import EditPost from './EditPost'
import { Redirect } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post, loggedIn, isdeleted, isEditing } = this.props;
    if(!isdeleted && !post.editing ){
    return (
        <div className="post">
          {
            post.map((post) => (!post.editing ?
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h5>{post.body}</h5>
        </div> : <EditPost post={post}
          key={post.id}/>
        ))
          }
          <div>
            {!loggedIn && !isEditing ? <PostButtons post={post}
          key={post.id}/> : null}
          </div>
        </div>
      )} else{
        return(<Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location,
                     isdeleted: false }
          }}
        />)
      }
    }    
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  const posts = state.posts.posts
  return {
    post_id: id,
    loggedIn: state.auth.loggedIn,
    post: posts.filter(post=>post.id===id),
    isdeleted: state.posts.isdeleted,
    isEditing: state.posts.isEditing
  }
}
export default connect(mapStateToProps)(Post);