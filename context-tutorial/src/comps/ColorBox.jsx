import React, { useContext } from "react";
import ColorContext from "../contexts/color";
// import { ColorConsumer } from "../contexts/color";

/*
    Consumer  사이에 중괄호를 열어서 그 안에 함수를 넣어주었다
    이러한 패턴을 Function as a child, 혹은 Render Props 라고 한다
    컴포넌트의 children이 있어야 할 자리에 
    일반 JSX 혹은 문자열이 아닌 함수를 전달!
*/

/*
    const RenderPropsSample = ({children}) => {
        return <div>결과: {children(5)} </div>'
    }

    exprot default RenderPropsSample;

    만약 위와 같은 컴포넌트가 있다면 추후 사용할 때 다음과 같이 사용할 수 있다

    <RenderPropsSample>{value => 2 * value}</RenderPropsSample>;

    RenderPropsSample에 children props로 파라미터에 2를 곱해서 반환하는
    함수를 전달하면 해당 컴포넌트에서는 이 함수에 5를 
    인자로 넣어서 "결과: 10"을 렌더링 한다
*/

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: state.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

// Consumer 대신 useContext 사용해보기
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
