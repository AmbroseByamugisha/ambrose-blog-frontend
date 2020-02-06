import React, { Component } from 'react'
import { add_post } from '../actions'
import { connect } from 'react-redux'

class CreatePost extends Component {
    state = {id: Date.now(), body: "", title: ""}
    
    handleTitleChange = ({ target }) => {
        this.setState({ title: target.value })
    }

    handleBodyChange = ({ target }) => {
        this.setState({ body: target.value })
    }

    // post title input and truncate the body
    handleSubmit = (event) => {

        const { dispatch } = this.props
        //const { body, title } = this.state
        
        dispatch(add_post(this.state))
        event.preventDefault()
        }
        render() {
            return(
                <form>
                <input onChange={this.handleTitleChange} placeholder="post title"  name="title" />
                <input onChange={this.handleBodyChange} placeholder="What's on your mind"  name="body" />
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
            )
        }

}

export default connect()(CreatePost)