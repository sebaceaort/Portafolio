export const TodoItem = ({ item, onDeleteTodo}) => {
  const { description, id,  } = item;
  const handleDelete = () => {
    onDeleteTodo(id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="aling-self-center">{description}</span>
      <button className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    </li>
  );
};
