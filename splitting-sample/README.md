# Code Splitting

- 파일을 분리하는 작업
- 코드 비동기 로딩을 통해 자바스크립트 함수, 객체,  
  혹은 컴포넌트를 처음에는 불러오지 않고 필요한 시점에 불러와서 사용할 수 있다
- 서버 사이드 렌더링을 할 계획이 없다면 React.lazy 와 Surspense로 구현하고
- 계획이 있다면 Loadable Components를 사용

## React.lazy 와 Suspense를 통한 컴포넌트 코드 스플리팅

- React.lazy : 컴포넌트를 렌더링하는 시점에서 비동기적으로  
  로딩할 수 있게 해주는 유틸 함수
- Suspense : 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를  
  로딩하도록 발동시킬 수 있고, 로딩이 끝나지 않았을 때 보여 줄  
  UI를 설정할 수 있다
- http://reactjs.org/docs/code-splitting.html#reactlazy

## Loadable Components를 통한 컴포넌트 코드 스플리팅

- 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리
- 이점은 서버 사이드 렌더링을 지원한다
- 또한 렌더링하기 전에 필요할 때 스플리팅된 파일을 미리  
  불러올 수 있는 기능도 있다
- 타임아웃, 로딩 UI 딜레이, 서버 사이드 렌더링 호환 등 다양한 기능이 있다
- https://www.smooth-code.com/open-source/loadable-components/docs/delay/
- yarn add @loadable/component

## SSR 서버 사이드 렌더링

- 웹 서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를  
  가능하게 해주는 기술

- SSR을 사용하면 웹 서비스의 초기 렌더링을 사용자의 브라우저가 아닌  
  서버 쪽에서 처리한다
