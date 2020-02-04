import React, { Component } from 'react'
import { connect } from 'react-redux';
 

class PostSummary extends Component {

    truncateString =(str, num) => {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
          return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...'
      }
    
    render() {
        return (
        <div className="post">
        <h5 className="post_title">{this.props.post.title}</h5>
        <p className="post_message">{this.truncateString(this.props.post.body, 15)}</p>
        </div>
        );
    }
}
export default connect()(PostSummary)