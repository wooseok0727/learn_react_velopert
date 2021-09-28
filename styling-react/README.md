# 컴포넌트 스타일링

## 일반 CSS

- 컴포넌트를 스타일링하는 가장 기본적인 방식

## Sass

- 자주 사용되는 CSS 전처리기(pre-processor) 중 하나로  
  확장된 CSS 문법을 사용하여 CSS 코드를 더욱 쉽게 작성할 수 있게 해준다
- yarn add sass
- sass library
- yarn add open-color include-media

## CSS Module

- 스타일을 작성할때 CSS 클래스가 다른 CSS 클래스의 이름과  
  절대 충돌하지 않도록 파일마다 고유한 이름을 자동 생성해주는 옵션
- classnames 는 CSS 클래스를 조건부로 설정할때 매우 유용한 라이브러리
- yarn add classnames

## styled-components

- 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성함과  
  동시에 해당 스타일이 적용된 컴포넌트를 만들수 있게 해준다
- CSS-in-JS
- yarn add styled-components

### creat-react-app

- creat-react-app 으로 만든 프로젝트는 프로젝트 구조의 복잡도를  
  낮추기 위해 세부 설정이 모두 숨겨져 있다
- 이를 커스터마이징하려면 프로젝트 디렉터리에서 yarn eject 명령어를  
  통해 세부 설정을 밖으로 꺼내 주어야 한다
