import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update_post } from '../actions';


class EditPost extends Component {
  // state = { title: "", body: ""}

  //     handleTitleChange = ({ target }) => {
  //         this.setState({ title: target.value })
  //     }
  
  //     handleBodyChange = ({ target }) => {
  //       this.setState({ body: target.value })
  //     }
    
  //     handleUpdatePost = (event) => {
  //       const { dispatch } = this.props
  //       dispatch(update_post(this.props.post[0]["id"], this.state))
  //       console.log(this.props.post["id"])
  //       console.log(this.state)
  //       //event.preventDefault()
  //     };

      handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newBody = this.getBody.value;
        const data = {
          newTitle,
          newBody
        }
        this.props.dispatch(update_post(this.props.post.id, data))
      }
  render() {
    return (
      <div key={this.props.post.id}>
      <form onSubmit={this.handleEdit}>
        <input required type="text" ref={(input) => this.getTitle = input}
          defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
        <textarea required rows="5" ref={(input) => this.getBody = input}
          defaultValue={this.props.post.body} cols="28" placeholder="Enter Post" /><br /><br />
        <button>Update</button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(EditPost);