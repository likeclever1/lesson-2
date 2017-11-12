import React, {Component} from 'react';
import './NewsPost.css';

import Comment from './Comment';

class NewsPost extends Component {
  constructor() {
    super();

    this.state = {
      commentInput: '',
      comments: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      commentInput: e.target.value
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState(state => ({
        commentInput: '',
        comments: [
          ...state.comments,
          {
            id: Math.random().toString(36).substr(2, 9),
            text: state.commentInput
          }
        ]
      }));
    }
  }

  handleDelete(id) {
    this.setState({
      comments: this.state.comments.filter(c => c.id !== id)
    });
  }

  render() {
    const {
      text
    } = this.props;

    const {
      commentInput,
      comments
    } = this.state;

    return (
      <div className="news-post">
        <p>{ text }</p>

        <input type="text" className="comment-input"
          value={commentInput}
          onChange={ this.handleChange }
          onKeyDown={ this.handleKeyDown }
        />

        {comments.map(c => (
          <Comment
            key={ c.id}
            id={ c.id }
            text={ c.text }
            onDelete={ this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default NewsPost;
