# SSR 서버 사이드 렌더링

- UI를 서버에서 렌더링하는 것을 의미
- SSR을 구현하면 사용자가 웹 서비스를 방문했을 때 서버 쪽에서  
  초기 렌더링을 대신해준다
- 서버 사이드 렌더링을 구현하면 첫 번째 렌더링은 서버를 통해 하지만,  
  그 이후에는 브라우저에서 처리한다

## 장점

- 구글, 네이버, 다음 등의 검색 엔진이 우리가 만든  
  웹 애플리케이션의 페이지를 원할하게 수집할 수 있다
- 웹 서비스의 검색 엔진 최적화를 위해서라면 SSR을 구현해 주는것이 좋다
- SSR을 통해 초기 렌더링 성능을 개선할 수 있다

## 단점

- 서버 리소스가 사용된다
- 수많은 사용자가 동시에 웹 페이지에 접속하면 서버에 과부하가 발생할 수있다
- 사용자가 많은 서비스라면 캐싱과 로드 밸런싱을 통해 성능을 최적화 해주어야 한다
- 프로젝트의 구조가 좀 더 복잡해질 수 있고, 데이터 미리 불러오기,  
  코드 스플리팅과의 호환 등 고려해야 할 사항이 많아져 어려워질수 있다

### settings

- yarn add react-router-dom
- yarn add webpack-node-externals
- yarn add redux react-redux redux-thunk axios
- yarn add redux-saga
- yarn add @loadable/component @loadable/server @loadable/webpack-plugin @loadable/babel-plugin
