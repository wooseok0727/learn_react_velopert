# Context API

- 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때  
  유용한 기능
- 사용자 로그인정보, 애플리케이션 환경설정, 테마 등
- 리덕스, 리액트 라우터, styled-components 등의 라이브러리는  
  Context API를 기반으로 구현되어 있다

## Context API를 사용한 전역 상태 관리 흐름 이해하기

- 기존에는 컴포넌트 간에 상태를 교류해야 할 때 무조건 부모 -> 자식 흐름으로  
  props를 통해 전달했다
- Context API를 통해 더욱 쉽게 상태를 교류 할 수 있게 된다

## Context API 사용법 익히기

## 동적 Context 사용하기

## Consumer 대신 Hook 또는 static contextType 사용하기

### useContext Hook

- useContext를 사용하면 함수형 컴포넌트에서 Context를 아주 편하게 사용할 수 있다
- Hook 은 함수형 컴포넌트에서만 사용할 수 있다

### static contexType

- 클래스형 컴포넌트에서 Context를 좀 더 쉽게 사용하고 싶을 때
- static contextType 를 정의하면 클래스 메서드에서도 Context에 넣어 둔 함수를  
  호출 할수 있다는 장점이 있다
- 단점은 한 클래스에서 하나의 Context 밖에 사용하지 못한다
- 함수형 컴포넌트로 useContext를 사용하는 것이 좋다
