# TODO-APP

- yarn add node-sass@4.14.1 classnames react-icons

## TodoTemplate

- 화면을 가운데 정렬하고 타이틀을 보여주기
- children으로 내부 JSX을 props로 받아 와서 렌더링

## TodoInsert

- 새로운 항목 입력하고 추가하는 컴포넌트
- state를 통해 인풋의 상태 관리

## TodoListItem

- 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
- todo 객체를 props로 받아와서 상태에 따른 다른 스타일의 UI를 보여주기

## TodoList

- todos 배열을 props로 받아 온 후 이를 배열 내장 함수 map을 사용해서  
  여러 개의 TodoListItem 컴포넌트로 변환하여 보여주기
