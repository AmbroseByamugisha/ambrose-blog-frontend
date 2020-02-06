import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delete_post } from '../actions'
  
class PostButtons extends Component{
  handleDeletePost = (event) => {
    const { dispatch } = this.props
    dispatch(delete_post(this.props.post[0]["id"]))
    console.log(this.props.post[0]["id"])
    console.log(this.props)
    //console.log(posts)
    event.preventDefault()
  }
    render(){
    return(
        <div>
            <button>Edit</button>
              <button onClick={this.handleDeletePost}>
                Delete 
              </button>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostButtons)
