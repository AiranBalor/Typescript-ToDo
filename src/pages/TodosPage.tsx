import React, { useState, useEffect } from "react";
import ConfirmPopup from "../components/ConfirmPopup";
import { ITodo, ISelectedTask } from "../components/interfaces";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

//поскольку TS не знает, что такое браузерный метод confirm, требуется явно указывать, у какого объекта метод следует искать(в данном случае window)
//альтернативный способ - объявить переменную через declare:
// declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [confirmPopupOpen, setConfirmPopupOpen] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<ISelectedTask>();

  const closeByESC = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      return closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeByESC)

    return () => {
      document.removeEventListener('keydown', closeByESC)
      }
    }
  )

  useEffect(() => {
    const savedTodos = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as ITodo[];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const setSelectedTask = (id: number) => {
    setSelectedTodo((prevState) => {
      return {
        ...prevState,
        id: id,
      };
    });
  };

  const onDelete = () => {
    removeHandler(selectedTodo!.id);
    setConfirmPopupOpen((prevState) => (prevState = false));
  };

  const confirmDeletion = (event: React.MouseEvent, id: number) => {
    setConfirmPopupOpen((prevState) => (prevState = true));
    setSelectedTask(id);
  };

  const removeHandler = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    setSelectedTodo(undefined);
  };

  const closePopup = () => {
    setConfirmPopupOpen((prevState) => (prevState = false));
  };

  return (
    <>
      <TodoForm onAdd={addToDo}></TodoForm>
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onConfirm={confirmDeletion}
      ></TodoList>
      <ConfirmPopup
        isOpen={confirmPopupOpen}
        onDelete={onDelete}
        onClose={closePopup}
      ></ConfirmPopup>
    </>
  );
};

export default TodosPage;
