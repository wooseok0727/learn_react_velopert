# redux를 사용하여 리액트 상태 관리

- yarn add redux react-redux
- 가장 많이 사용하는 패턴은  
  프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것
- 이런 패턴은 리덕스를 사용하는 데 필수 사항은 아니다

- Redux DevTools
- yarn add redux-devtools-extension

## 프레젠테이셔널 컴포넌트

- 주로 상태 관리가 이루어지지 않고, 그저 props를 받아와서  
  화면에 UI를 보여주기만 하는 컴포넌트

## 컨테이너 컴포넌트

- 리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고  
  리덕스 스토어에 액션을 디스패치하기도 한다

## redux-actions

- redux-actions 라이브러리와 immer 라이브러리를 활용하면  
  리덕스를 훨씬 편하게 사용할 수 있다

- yarn add redux-actions
- yarn add immer

## connect 대신 Hooks 사용

- connect 함수 대신 react-redux 에서 제공하는 Hook 을 사용
- useSelector : connect 함수를 사용하지 않고도  
  리덕스의 상태를 조회 할수 있다
- useDispatch : 컴포넌트 내부에서 스토어의 내장함수 dispatch를  
  사용할 수 있게 해준다
- useStore : 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용할 수있다  
  useStore는 정말 어쩌다가 스토어에 직접 접근해야 하는 상황에만 사용  
  이를 사용해야 하는 상황은 흔치 않다
- useActions : 여러개의 액션을 사용해야 하는 경우 코드를 훨씬 깔끔하게 할수있다

## connet 와 hooks

- connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우,  
  해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의  
  props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화된다
- useSelector를 사용하여 리덕스 상태를 조회했을 때는 이 최적화 작업이 자동으로  
  이루어지지 않으므로 성능 최적화를 위해서는 React.memo를 컨테이너 컴포넌트에  
  사용해주어야 한다
- 지금 프로젝트에서는 TodosContatiner의 부모컴포넌트인 App 컴포넌트가  
  리렌더링되는 일이 없으므로 불필요한 성능 최적화이다
