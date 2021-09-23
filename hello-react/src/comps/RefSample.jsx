import React, { Component } from 'react';

export default class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
        <button onClick={this.handleFocus}>클릭</button>
      </div>
    );
  }
}
