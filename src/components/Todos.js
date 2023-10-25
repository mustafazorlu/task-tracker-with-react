import Todo from "./Todo";

const Todos = ({ todos, reminderHandler, deleteHandler }) => {
    //

    return (
        <div className="todos">
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    reminderHandler={reminderHandler}
                    deleteHandler={deleteHandler}
                />
            ))}
        </div>
    );
};

export default Todos;
