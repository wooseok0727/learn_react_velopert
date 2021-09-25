import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import About from "./comps/About";
import Home from "./comps/Home";
import Profiles from "./comps/Profiles";
import HistorySample from "./comps/HistorySample";

/*
  리액트 라우터를 사용할때는 a 태그를 직접 사용하면 안된다
  a 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 떄문에
  애플리케이션이 들고 있던 상태들을 모두 날려 버린다

  Link 컴포넌트를 사용하여 페이지를 전환하면
  페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서
  HTML5 History API를 사용하여 페이지의 주소만 변경한다
  Link 컴포넌트 자체는 a 태그로 이루어져 있지만,
  페이지 전환을 방지하는 기능이 내장되어 있다
*/

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      {/*  
        Switch 컴포넌트는 일치하는 단 하나의 라우트만 렌더링시켜준다
        Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여줄
        Not Found 페이지도 구현할 수 있다
      */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
