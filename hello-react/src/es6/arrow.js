// 서로 가리키고 있는 this 값이 다르다
setTimeout(function () {
  console.log('hello world');
}, 1000);

setTimeout(() => {
  console.log('hello world');
}, 1000);

function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark(); // 검둥이 : 멍멍!

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이 : 멍멍!

// 일반 함수는 자신이 종속된 객체를 this
// 화살표 함수는 자신이 종속된 인스턴스를 this
// 화살표 함수는 값을 연산하여 바로 반환해야 할때
// 사용하면 가독성을 높일 수 있다

function twice(value) {
  return value * 2;
}

// 이렇게 따로 { } 를 열어 주지않으면 연산한 값을 그대로 반환한다는 의미
const triple = (value) => value * 3;
