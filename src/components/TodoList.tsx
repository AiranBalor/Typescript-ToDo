import React from "react";
import { ITodo } from "./interfaces";
// Два синтаксиса записи функций в интерфейсах. Идентичны друг другу.
type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onConfirm: (event:React.MouseEvent, id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onConfirm }) => {
  if (todos.length === 0) {
    return <p className="center">Дел пока нет!</p>
  }

  const confirmHandler = (event: React.MouseEvent, id: number ) => {
    event.preventDefault();
    onConfirm(event, id);
  }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        //Обрати внимание на способы вызова функций в обработчиках событий - либо стрелочный коллбек, либо метод bind на функции 
        //(null - потому что контекст в данном случае не нужен)
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => confirmHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
