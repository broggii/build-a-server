import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
    reversedText: '',
  };
  handleSubmit = e => {
    e.preventDefault();

    fetch('/api/v1/reversify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ reversifyThis: this.state.input }),
    })
      .then(response => response.json())
      .then(reversedText => this.setState({ reversedText }))
      .catch(e, console.log(e));
  };
  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <h3>Client side: {this.state.input}</h3>
        <h3>Server side: {this.state.reversedText}</h3>
      </div>
    );
  }
}

export default App;
