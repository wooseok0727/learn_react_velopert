import React, { useCallback, useState } from 'react';
// https://react-icons.github.io/react-icons/icons?name=md
// import { 아이콘 이름 } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import '../css/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick 으로도 사용할 수 있지만
  // onSubmit 같은 경우 인풋에서 Enter를 눌렀을때도 발생하기 때문
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킨다
      // 이를 방지하기
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
