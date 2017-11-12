import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const {
      onDelete
    } = this.props;
    onDelete(id);
  }
  render() {
    const {
      text,
      id
    } = this.props;

    return (
      <div>
        <p>
          { text }
          <span className="delete"
            onClick={ () => this.handleDelete(id) }>x</span>  
        </p>
        
      </div>
    );
  }
}

export default Comment;
