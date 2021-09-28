const Koa = require('koa');

const app = new Koa();

// ctx = Context의 줄임말로 웹 요청과 응답에 관한 정보를 지니고 있다
// next는 현재 처리중인 미들웨어의 다음 미들웨어로 호출하는 함수
// 미들웨어를 등록하고 next 함수를 호출하지 않으면
// 그다음 미들웨어를 처리하지 않는다
// 주로 다음 미들웨어를 처리할 필요가 없는
// 라우트 미들웨어를 나중에 설정 할 때 이러한 구조로
// next를 생략하여 미들웨어를 작성한다
// 미들웨어는 app.use를 사용하여 등록되는 순서대로 처리된다

// next 함수를 호출하면 Primise를 반환한다
// 이는 Koa가 Express와 차별화되는 부분이다
// next 함수가 반환하는 Promise는 다음에 처리해야
// 할 미들웨어가 끝나야 완료된다

// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);

//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401; // Unauthorized
//     return;
//   }
//   //   next().then(() => {
//   //     console.log('END');
//   //   });
//   await next();
//   console.log('END');
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });

// app.use((ctx) => {
//   ctx.body = 'hello world';
// });

app.listen(4000, () => {
  console.log('Listening to prot 4000');
});
