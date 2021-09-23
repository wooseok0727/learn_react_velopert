import React from 'react';
import PropTypes from 'prop-types';

// ES6 arrow function
const MyComponent = ({ name, favoriteNumber, children }) => {
  // ES6 비구조화할당(destructuring assignment)
  // const { name, children } = props;

  return (
    <div>
      Hello, {name} <br />
      children 값은 {children} <br />
      좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

// defaultProps
// props 값을 따로 지정하지 않았을 때 보여줄 기본값 설정
MyComponent.defaultProps = {
  name: '기본이름',
};

// 필수 props를 지정하거나 props의 타입을 지정할때는
// propTypes 사용
// yarn add prop-types
MyComponent.propTypes = {
  name: PropTypes.string,
  // isRequired를 사용하여 필수 propTypes 설정
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
