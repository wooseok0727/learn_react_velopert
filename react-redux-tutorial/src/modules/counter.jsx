import { createAction, handleActions } from 'redux-actions';

// 1. 액션타입을 정의하기
// 액션타입은 대문자로 정의하고
// 문자열 내용은 '모듈 이름/액션 이름' 같은 형태

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3. 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// handleActions 함수의 첫번째 파라미터에는
// 각 액션에 대한 업데이트 함수를 넣어주고,
// 두번째 파라미터에는 초기 상태를 넣어준다
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
