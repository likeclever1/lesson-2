import React, {Component} from 'react';
import './App.css';

import NewsPost from './NewsPost';

class App extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
      newsInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({
      newsInput: e.target.value
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState({
        newsInput: '',
        news: [
          ...this.state.news,
          {
            text: this.state.newsInput
          }
        ]
      });
    }
  }

  render() {
    const {
      news,
      newsInput
    } = this.state;

    return (
      <div className="App">
        <input type="text"
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />

        {news.map((n, index) => (
          <NewsPost
            key={ index }
            text={ n.text } />
        ))}
      </div>
    );
  }
}

export default App;
