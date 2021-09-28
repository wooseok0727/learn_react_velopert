# Koa

- Express의 기존 개발 팀이 개발한 프레임워크
- Express는 미들웨어, 라우팅, 템플릿, 파일 호스팅 등과 같은  
  다양한 기능이 자체적으로 내장되어 있지만
- Koa는 미들웨어 기능만 갖추고 있으며 나머지는  
  다른 라이브러리를 적용하여 사용한다
- Koa는 우리가 필요한 기능들만 붙여서 서버를 만들 수  
  있기 때문에 Express보다 훨씬 가볍다
- 추가로 Koa는 async/await 문법을 정식으로 지원하기 떄문에  
  비동기 작업을 더 편하게 관리할 수 있다
- Express 도 async/await 문법을 사용할 수 있지만,  
  오류를 처리하는 부분이 제대로 작동하지 않을 수 있다  
  express-async-errors 라는 라이브러리를 따로 사용해야 한다

- Node.js 로 서버를 개발할 때 어떤 프레임워크를 사용할지는  
  개인적인 취향에 달라질수 있다

### ESLint 와 Prettier 설정

- yarn add --dev eslint
- yarn run eslint --init  
  To check syntax and find problems  
  CommonJS  
  None of these
  Node (Space)  
  JSON
- Prettier에서 관리하는 코드 스타일은 ESLint에서 관리하지 않도록
- yarn add eslint-config-prettier

### koa-router

- Koa 자체에 이 기능이 내장되어 있지는 않으므로 모듈을 설치해야한다
- yarn add koa-router

### PostMan

- REST API 요청 테스팅을 쉽게 할수 있는 프로그램
- https://www.getpostman.com

### 컨트롤러

- 라우트 함수만 모아 놓은 파일을 컨트롤러라고 한다

### koa-bodyparser 미들웨어

- POST/PUT/PATCH 같은 메서드의 Request Body에 JSON 형식으로  
  데이터를 넣어 주면 이를 파싱하여 서버에서 사용할 수 있게 한다

- yarn add koa-bodyparser
