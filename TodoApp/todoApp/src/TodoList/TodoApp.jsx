import { useTodo } from "./useTodo";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";


export const TodoApp = () => {
  const {todos, onDeleteTodo, onNewTodo,}= useTodo()
  
  return (
    <>
      <h1>
        TodoApp :{todos.length} ,{" "}
        <small>pendientes:{todos.filter((todo) => !todo.done).length}</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((item) => (
              <TodoItem key={item.id} item={item} onDeleteTodo={onDeleteTodo} />
            ))}
          </ul>
        </div>
        <div className="col-5">
          <AddTodo onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
