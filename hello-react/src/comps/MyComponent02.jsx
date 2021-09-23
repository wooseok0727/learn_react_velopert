import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Class 형 컴포넌트
// class형 컴포넌트에서 defaultProps와 propTypes를 설정할 때
// class 내부에서 지정하는 방법도 있다
class MyComponent02 extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        Hello, {name} <br />
        children 값은 {children} <br />
        좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

// // defaultProps
// // props 값을 따로 지정하지 않았을 때 보여줄 기본값 설정
// MyComponent02.defaultProps = {
//   name: '기본이름',
// };

// // 필수 props를 지정하거나 props의 타입을 지정할때는
// // propTypes 사용
// // yarn add prop-types
// MyComponent02.propTypes = {
//   name: PropTypes.string,
//   // isRequired를 사용하여 필수 propTypes 설정
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent02;
