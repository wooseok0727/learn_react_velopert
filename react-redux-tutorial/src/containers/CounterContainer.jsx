import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../comps/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  // useDispatch를 사용할때는 useCallback과 함께 사용하는 습관을 들이자
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect 함수 내부에 익명 함수 형태로 선언해도 문제가 되지않는다
// 취향에 따라 이렇게 사용해두 된다

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// bindActionCreators 유틸 함수로 dispatch 감싸기
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
// )(CounterContainer);

// mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌
// 액션 생성 함수로이루어진 객체 형태로 넣어주기
// connect 함수가 내부적으로 bindActionCreators 작업을 대신해준다
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);
