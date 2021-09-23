import React, { Component } from 'react';

export default class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  //   constructor(props) {
  //     super(props);
  //     // 함수가 호출될때 this는 호출부에 따라 결정되므로
  //     // 클래스의 임의 메서드가 특정 HTML 요소의
  //     // 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다
  //     // this를 컴포넌트 자신으로 제대로 가리키기 위해서
  //     // 메서드를 this와 바인딩
  //     // 바인딩을 하지않으면 this는 undefined 가 된다
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }

  //   handleClick(e) {
  //     alert(this.state.message);
  //     this.setState({
  //       message: '',
  //     });
  //   }

  // 바인딩 작업없이
  // 바벨의 transform-class-properties 사용하여
  // 화살표 함수형태로 메서드 정의
  handleChange = (e) => {
    this.setState({
      // const name = 'variantKey'
      // const object = {[name]: 'value'};  // { 'variantKey : 'value'}
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>Event</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
