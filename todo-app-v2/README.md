# 컴포넌트 성능 최적화

### 많은 데이터 렌더링하기

### 크롬 개발자 도구를 통한 성능 모니터링

### React.memo를 통한 컴포넌트 리렌더링 성능 최적화

### onToggle과 onRemove가 새로워지는 현상 방지하기

### react-virtualized를 사용한 렌더링 최적화

- 현재 초기 데이터가 2500개 등록되어 있는데 실제 화면에 나오는  
  항목은 9개 뿐이다 나머지는 스크롤해야만 볼수 있다
- 현재 컴포넌트가 맨 처음 렌더링 될 때 2500개 컴포넌트 중  
  2491개 컴포넌트는 스크롤하기 전에 보이지 않음에도 불구하고  
  렌더링이 이루어지고 있다
- react-virtualized를 사용하면 스크롤되기 전에 보이지 않는  
  컴포넌트는 렌더링하지 않고 크기만 차지하게끔 할 수 있다
- 그리고 스크롤이 되면 해당 스크롤 위치에서 보여 주어야 할  
  컴포넌트를 자연스럽게 렌더링 시킨다
- yarn add react-virtualized

### 프로덕션 모드로 구동하기

- yarn build
- yarn global add serve
- serve -s build
