import React from "react";
import { withRouter } from "react-router-dom";

// withRouter 함수는 Hoc(Higher-oder Componet)
// 라우트로 사용된 컴포넌트가 아니어도
// match, location, history 객체에 접근할수 있게 해준다
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        // JSON.stringify의 두번째 세번째 파라미터를
        // null, 2로 설정해 주면 JSON에 들여쓰기가 적용된 상태로
        // 문자열이 만들어진다
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
