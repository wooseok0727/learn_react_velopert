const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.get('/', (ctx) => {
  ctx.body = '홈';
});

// 파라미터와 쿼리
// 정해진 규칙은 따로 없지만
// 일반적으로 파라미터는 처리할 작업의 카테고리를 받아 오거나,
// 고유 ID 혹은 이름으로 특정 데이터를 조회할 때 사용한다

// 쿼리는 옵션에 관련된 정보를 받아온다
// 예를 들어 여러 항목을 리스팅하는 API라면,
// 어떤 조건을 만족하는 항목을 보여 줄지
// 또는 어떤 기준으로 정렬할지를 정해야 할 때 쿼리를 사용

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  // name의 존재 유무에 따라 다른 결과 출력
  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  // id의 존재 유무에 따라 다른 결과 출력
  ctx.body = id ? `포스트 #${id}` : `포스트 아이디가 없습니다`;
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to prot 4000');
});
