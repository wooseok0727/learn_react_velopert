// generator
// 함수를 작성할 때 함수를 특정 구간에 멈춰 놓을수도 있고,
// 원할 때 다시 돌아가게 할 수도 있다

function* generatorFucntion() {
  console.log("안녕하세요");
  yield 1;
  console.log("제너레이터 함수");
  yield 2;
  console.log("function*");
  yield 3;
  return 4;
}

const generator = generatorFucntion();

generator.next();
// 안녕하세요
// {value: 1, done: false}
generator.next();
// 제너레이터 함수
// {value: 2, done: false}
generator.next();
// function*
// {value: 3, done: false}
generator.next();
// {value: 4, done: true}
generator.next();
// {value: undefined, done: true}

function* sumGenerator() {
  console.log("sumGenerator가 만들어졌습니다");
  let a = yield;
  let b = yield;
  yield a + b;
}

const sum = sumGenerator();
sum.next();
// subGenerator가 만들어졌습니다
// {value: undefined, done: false}
sum.next(1);
// {value: undefined, done: false}
sum.next(2);
// {value: 3, done: false}
sum.next();
// {value: undefined, done: true}

function* watchGenerator() {
  console.log("모니터링 중..");
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log("이전 액션: ", prevAction);
    prevAction = action;
    if (action.type === "HELLO") {
      console.log("안녕하세요");
    }
  }
}
const watch = watchGenerator();

watch.next();
// 모니터링 중..
// {value: undefined, done: false}
watch.next({ type: "TEST" });
// 이전 액션: null
// {value: undefined, done: false}
watch.next({ type: "HELLO" });
// 이전 액션: {type: 'TEST'}
// 안녕하세요
// {value: undefined, done: false}
