import React from 'react';
// import React, { Fragment } from "react";
import './App.css';

// function App() {
//   return (
//     <Fragment>
//       <h1>HELLO</h1>
//       <h2>REACT</h2>
//     </Fragment>
//   );
// }

// var : scope 함수단위
// const , let : scope 블록단위

/*
  JSX 내부의 자바스크립트 표현식에서 if 문 사용불가
  JSX 밖에서 if문을 사용하여 사전에 값 설정하거나,
  { } 안에 조건부연산자(삼항 연산자) 사용 
*/

function App() {
  const style = {
    // background-color 는 backgroundColor와 같이 카멜표기법으로 작성
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 px로 지정된다
  };

  const name = 'WORLD!!';

  // falsy 한 값인 0은 예외적으로 화면에 나타난다
  const number = 0;
  // undefined만 반환하여 렌더링하는 상황 금지 OR(||) 연산자 활용
  // JSX 내부에서 undefined를 렌덩링하는 것은 괜찮다.
  const name2 = undefined;

  return (
    <>
      {/* JSX 주석 */}
      <div
        className="react" // 시작태그를 여러줄로 작성하게되면 여기에 주석 작성가능
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타난다 */
      <input />
    </>
  );
  // return (
  //   <div
  //     style={{
  //       // background-color 는 backgroundColor와 같이 카멜표기법으로 작성
  //       backgroundColor: "black",
  //       color: "aqua",
  //       fontSize: "48px", // font-size -> fontSize
  //       fontWeight: "bold", // font-weight -> fontWeight
  //       padding: 16, // 단위를 생략하면 px로 지정된다
  //     }}
  //   >
  //     {name}
  //   </div>
  // );

  // return <div style={style}>{name}</div>;
  // return <div>{name2 || "리액트"}</div>;
  // return <div>{name2}</div>;
  // return name2 || "값이 undefined입니다";
  // <div>{name === "WORLD!!" ? <h1>HELLO {name}</h1> : null}</div>
  // <div>{number && <h1>HELLO {name}</h1>}</div>
  // <div>{name === "WORLD!!" && <h1>HELLO {name}</h1>}</div>
}

export default App;
