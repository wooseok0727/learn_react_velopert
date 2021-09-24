import React, { Component } from 'react';

export default class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 부모에게 받은 color 값을 state에 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트를 만든고, 첫 렌더링을 다 마친후 실행
  // 라이브러리 또는 프레임워크의 함수 호출, 이벤트 등록 setTimeout, setInteval
  // 네트워크 요청 같은 비동기 작업 처리
  componentDidMount() {
    console.log('componentDidMount');
  }

  // props 또는 state를 변경했을때 리렌더링을 시작할지 여부를 지정하는 메서드
  // true or false 반환
  // 따로 생성하지 않으면 기본값 true
  // 컴포넌트 업데이틔 성능을 개선할떄는 매우 중요하게 사용된다
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않는다
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트를 DOM에서 제거할때 실행
  // componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // redner에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전 호출
  // 주로 업데이트하기 직전의 값을 참고할 일이 있을때 활용
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 컴포넌트가 이전에 가졌던 데이터에 접근 가능
  // snapshot 값을 전달받을 수 있다
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 에러테스트 
          {this.props.missing.value}
        */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
