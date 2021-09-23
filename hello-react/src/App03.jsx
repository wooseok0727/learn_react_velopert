import React from 'react';
import Say from './comps/Say';
// import Counter from './comps/Counter';
// import MyComponent from './comps/MyComponent';
// import MyComponent02 from './comps/MyComponent02';

// props(properties) 컴포넌트 속성을 설정할 때 사용하는 요소
// props 값은 해당 컴포넌트를 불러와 사용하는 부모컴포넌트에서 설정할수 있다
// 현 상황에서는 App03 컴포넌트가 부모 컴포넌트이다

const App03 = () => {
  // children
  // 컴포넌트 태그 사이의 내용을 보여주는 props
  return <Say />;
};

export default App03;
