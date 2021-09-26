import React, { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    // ColorContext 의 color 기본값은 Provider를 사용하지 않았을 때만 사용된다
    // 만약 Provider는 사용했는데 value를 명시하지 않았다면,
    // 이 기본값을 사용하지 않기 때문에 오류가 발생
    // Provider를 사용할때는 value 값을 명시해 주어야 한다
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;

/*
    createContext의 기본값은 실제 Provider의 value에 넣은
    객체의 형태와 일치시켜 주는 것이 좋다
    Context 코드를 볼 때 내부 값이 어떻게 구성되어 있는지
    파악하기도 쉽고, 실수로 Provider를 사용하지 않았을 때
    리액트 애플리케이션에서 에러가 발생하지 않는다

*/
