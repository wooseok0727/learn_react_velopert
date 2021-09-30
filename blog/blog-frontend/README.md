# React

## settings

- yarn add react-router-dom

- yarn add styled-components

- yarn add redux react-redux redux-actions immer redux-devtools-extension

- Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서가  
  하나의 파일에 다 정의되어 있는 리덕스 모듈 구성

- yarn add axios redux-saga

## 회원 인증 구현

- 회원가입과 로그인 구현
- 헤더 컴포넌트 생성 및 로그인 유지

## 글쓰기 기능 구현

- 에디터 UI 구현 : Quill라이브러리 사용  
  yarn add quill
- 에디터 하단 컴포넌트 UI 구현
- 리덕스로 글쓰기 상태 관리

## 포스트 조회 기능 구현

- 포스트 읽기 페이지
- 포스트 목록 페이지
- yarn add qs
- 페이지네이션

## 수정/삭제 기능 구현

- 포스트 수정
- 포스트 삭제
- react-helmet-async 로 meta 태그 설정  
  yarn add react-helmet-async

### 프로젝트 빌드하기

- 클라이언트 yarn build
- 서버를 통해 blog-frontend/build 디렉터리 안의 파일을  
  사용할 수 있도록 koa-static 사용하여 정적 파일 제공 기능 구현
- yarn add koa-static
