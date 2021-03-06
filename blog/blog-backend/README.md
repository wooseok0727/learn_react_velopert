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

### MongoDB mongoose 와 dotenv

- yarn add mongoose dotenv

### mongoose

- 스키마(schema) : 컬렉션에 들어가는 문서 내부의 각 필드의 형식을  
  정의하는 객체
- 모델(model) : 스키마를 사용하여 만드는 인스턴스로,  
  데이터베이스에서 실제 작업을 처리할수 있는 함수들을 지니고 있는 객체

### dotenv

- 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구
- 서버에 주소나 계정 및 비밀번호 민감한 정보들이나  
  환경별로 달라질 수 있는 값은 코드 안에 직접 작성하지 않고  
  환경변수로 설정하는 것이 좋다
- .gitignore 에서 환경변수 파일 제외

### esm 으로 ES 모듈 import/export 문법 사용하기

- yarn add esm

### Joi

- 객체 검증을 수월하게 해주는 라이브러리
- yarn add joi

### JWT (JSON Web Token)

- 데이터가가 JSON으로 이루어져 있는 토큰
- 두 개체가 서로 안전하게 정보를 주고받을 수 있도록 웹 표존으로 정의된 기술
- JWT 토근을 만들기 위해서 jsonwebtoken 모듈 설치
- yarn add jsonwebtoken

### bcrypt

- 비밀번호 보안을 위한 단방향 해싱 함수를 지원해주는 라이이브러리
- yarn add bcrypt

### HTML 필터링하기

- yarn add sanitize-html
- HTML을 작성하고 보여주어야 하는 서비스에서 매우 유용하다
- 단순히 HTML을 제거하는 기능뿐만 아니라
- 특정 HTML만 허용하는 기능도 있기 때문에
- 글쓰기 API에서 사용하면 손쉽게 악성 스크립트 삽입을 막을 수 있다
