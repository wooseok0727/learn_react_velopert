import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ? 를 생략
  });
  // 쿼리의 파싱 결과 값은 문자열
  // 숫자를 받아와야할때는 parseInt
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>ABOUT</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습</p>
      {showDetail && <p>detail 값이 true</p>}
    </div>
  );
};

export default About;
