import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  // reduce a = 누적값 , b 더할 값
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // useCallback 컴포넌트가 처음 렌더링될 때만 함수 생성
  // 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때
  // 만들었던 함수를 계속해서 재사용하게 된다
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // useCallbak number 혹은 list가 바뀌었을 때만 함수 생성
  // number와 list의 내용이 바뀌거나 새로운 항목이 추가될 때
  // 새로 만들어진 함수를 사용하게 된다
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  // useMemo는 렌더링 전,
  // useEffect는 렌더링 후에 발생
  // 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고
  // 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
