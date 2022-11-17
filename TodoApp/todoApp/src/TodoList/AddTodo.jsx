import { useState } from "react";

export const AddTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo={
        id: new Date().getTime(), description:value, done: false
    }
    onNewTodo(newTodo);
    setValue("");
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1"
          onClick={(e) => handleSubmit(e)}
        >
          Agregar
        </button>
      </form>
    </>
  );
};
