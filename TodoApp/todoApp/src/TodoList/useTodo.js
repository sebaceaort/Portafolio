import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = []
const init=()=>{
  return JSON.parse(localStorage.getItem('todos')) ||[]
}

export const useTodo = () => {

   const [todos, dispach] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo) => {
    const action = { type: "ADD-TODO", payload: newTodo };
    dispach(action);
  };

  const onDeleteTodo = (id) => {
    const action = { type: "DELETE-TODO", payload: id };
    dispach(action);
  };
  return {
    todos,
    onDeleteTodo,
    onNewTodo,
  }
}
