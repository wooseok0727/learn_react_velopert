import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  gildong: {
    name: "홍길동",
    description: "의적",
  },
  moonsu: {
    name: "박문수",
    description: "암행어사",
  },
};

const Profile = ({ match }) => {
  console.log(match);
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
