import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 타입 정의
// 액션의 이름은 문자열 형태로 주로 대문자로 작성하고
// 액션 이름은 고유해야 한다
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 정의
// 액션 객체는 type 값을 반드시 갖고 있어야 한다
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//초깃값 설정 형태는 자유
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의 : 변화를 일으키는 함수
// state가 undefined 일 때는 initialState를 기본값으로 사용
// 리듀서 함수가 맨 처음 호출될 때는 state 값이 undefined
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 정의
// 상태가 업데이트될 때마다 호출된다
const render = () => {
  const state = store.getState(); // 현재 상태 불러오기
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
// subscribe
store.subscribe(render);

// 액션 발생시키기 (dispatch)
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
