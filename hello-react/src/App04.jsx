import React, { Component } from 'react';
import LifeCycleSample from './comps/LifeCycleSample';
import ErrorBoundary from './comps/ErrorBoundary';
// import IterationSample from './comps/IterationSample';

// class App04 extends Component {
//   render() {
//     return <IterationSample />;
//   }
// }

// 랜덤 색상 생성
// 1677721 를 hex(16진수)로 표현하면 ffffff
// 000000 ~ ffffff 반환
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App04 extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App04;
