import React, { useReducer } from "react";

// function reducet(state, action) {
//   return { ... }; // 불변성을 지키면서 업데이트한 새로운 상태를 반환
// }

// 액션 값은 주로 다음과 같은 형태로 이루어져 있다
// {
//   type: 'INCREMENT',
//   //  다른 값들이 필요하다면 추가로 들어감
// }

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);
  // useReducer를 사용했을 떄의 가장 큰 장점은
  // 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
