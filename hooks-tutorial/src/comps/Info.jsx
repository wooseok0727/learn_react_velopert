import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //   useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   });

  //   useEffect(() => {
  //     console.log("마운트될 때만 실행");
  //   }, []);

  //   // 특정 값 업데이트 될때만
  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  // 클래스형 컴포넌트였다면
  // componentDidUpdate(prevProps, prevState) {
  //    if(prevProps.value !== this.props.value) {
  //      doSomething();
  //     }
  // }

  // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한
  // 작업을 수행하고 싶다면 뒷정리(cleanUp) 함수를 반환해주어야 한다
  // 언마운트 될때만 뒷정리 함수를 호출하고 싶으면
  // 두번째 파라메터에 빈 배열
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanUp");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
