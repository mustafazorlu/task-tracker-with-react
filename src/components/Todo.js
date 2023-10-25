import React from "react";
import { FaTimes } from "react-icons/fa";

const Todo = ({ todo, reminderHandler, deleteHandler }) => {
    return (
        <div
            className="todo"
            style={{ borderLeft: `${todo.reminder ? "5px solid orange" : ""}` }}
            onDoubleClick={() => reminderHandler(todo.id)}
        >
            <div>
                <h4 className="title">{todo.title}</h4>
                <span className="date">{todo.date}</span>
            </div>
            <span className="times_wrapper">
                <FaTimes style={{ cursor: "pointer" }} onClick={() => deleteHandler(todo.id)} />
            </span>
        </div>
    );
};

export default Todo;
