import React, { useRef } from "react";

interface ITodoForm {
  onAdd(title: string): void;
}

const TodoForm: React.FC<ITodoForm> = (props) => {
  //TS будет требовать указания типа данных стейта, а также элемента HTML, из которого будет получено состояние или реф
  const ref = useRef<HTMLInputElement>(null);

  //Аналогично, требуется указывать тип event. ! в current необходим, чтобы TS не выдавал ошибку о том, что current может быть
  //null, как в начальном состоянии
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  }

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        onKeyDown={onKeyDown}
        id="title"
        type="text"
        placeholder="Введите название"
      />
      <label htmlFor="title" className="active">
        Название задачи
      </label>
    </div>
  );
};

export default TodoForm;
