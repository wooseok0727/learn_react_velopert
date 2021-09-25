import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './comps/TodoTemplate';
import TodoInsert from './comps/TodoInsert';
import TodoList from './comps/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트',
      checked: true,
    },
    {
      id: 2,
      text: '리액트',
      checked: true,
    },
    {
      id: 3,
      text: '리액트',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  // useState가 아닌 useRef 을 사용하는 이유는
  // id 값은 렌더링되는 정보가 아니기 때문
  // 화면에 보이지도 않고 이 값이 바뀐다고 해서 컴포넌트가
  // 리렌더링될 필요가 없다
  // 단순히 새로운 항목을 만들 때 참조되는 값
  const nextId = useRef(4);

  // onInsert 함수는 컴포넌트의 성능을 아낄 수 있도록
  // useCallback으로 감싸기
  // props로 전달해야 할 함수를 만들 때는 useCallback을 사용하여
  // 함수를 감싸는 것을 습관화하기
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        cheked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
