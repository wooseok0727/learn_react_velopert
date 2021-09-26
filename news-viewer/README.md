# New Viewer Project

- https://newsapi.org 에서 제공하는 API 사용
- styled-componenets 활용하여 프로젝트 스타일링

## axios로 API 호출해서 데이터 받아오기

- 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트
- HTTP 요청을 Promise 기반으로 처리한다
- yarn add axios

## newsapi API 키 발급받기

## 뉴스 뷰어 UI 만들기

- yarn add styled-components

## 데이터 연동하기

## 카테고리 기능 구현하기

## 리액트 라우터 적용하기

- yarn add react-router-dom

## usePromise 커스텀 Hook 만들기

# API를 연동하여 개발할 때 절대 잊지말아야 할 유의 사항

- useEffect 에 등록하는 함수는 async로 작성하면 안된다
- 그 대신 함수 내부에 async 함수를 따로 만들어 주어야 한다
