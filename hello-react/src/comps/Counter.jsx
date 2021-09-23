import React, { Component } from 'react';

// class 형 컴포넌트의 state
export default class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state의 초깃값 설정하기
  //     // class형 컴포넌트에서는 state 초기값은 객체 형태
  //     // 함수형에서 값의 형태는 자유이다
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  /* constructor를 사용하지않는 방식 */
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    // state를 조회할 때는 this.state로 조회
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState를 사용하여
            // state에 새로운 값을 넣을 수 있다
            // this.setState({ number: number + 1 });

            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({ number: prevState.number + 1 }));

            // this.setState가 끝난 후 특정 작업 실행하기
            // setState 2번째 파라미터로 콜백함수를 등록하여 작업을 처리할 수있다
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
