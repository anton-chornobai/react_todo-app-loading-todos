import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
};
const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="todoapp__main">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </section>
  );
};

export default TodoList;