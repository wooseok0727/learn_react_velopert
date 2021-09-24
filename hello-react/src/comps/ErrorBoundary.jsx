import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 렌더링 도중 에러 발생하였을때 오류 UI를 보여준다
  // error : 에러종류
  // info : 에러 위치
  // 서버 API를 호출하여 따로 수집할 수 있다
  // 자신에게 발생하는 에러는 잡아 낼수 없고
  // this.props.children 으로 전달되는 컴포넌트에서
  // 발생하는 에러만 잡아낼수 있다
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    console.log(this.props.children); // children = LifeCycleSample
    if (this.state.error) return <div>에러 발생!</div>;
    return this.props.children;
  }
}
