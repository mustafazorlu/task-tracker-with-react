import React, { useState } from "react";

const AddTodo = ({ addTodoHandler }) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDate, setTodoDate] = useState("");
    const [todoReminder, setTodoReminder] = useState(false);

    const submitAddForm = (e) => {
        e.preventDefault();

        if (!todoTitle || !todoDate) {
            alert("Please fill all inputs.");
            return;
        }

        addTodoHandler({
            title: todoTitle,
            date: todoDate,
            reminder: todoReminder,
        });

        setTodoDate("");
        setTodoTitle("");
        setTodoReminder(false);
    };

    return (
        <>
            <form className="add_form" onSubmit={submitAddForm}>
                <div className="form-element">
                    <input
                        type="text"
                        placeholder="Görevi yazın.."
                        value={todoTitle}
                        onChange={(e) => setTodoTitle(e.target.value)}
                    />
                </div>
                <div className="form-element">
                    <input
                        type="text"
                        placeholder="Zamanı yazın.."
                        value={todoDate}
                        onChange={(e) => setTodoDate(e.target.value)}
                    />
                </div>
                <div className="form-element checkbox_wrapper">
                    <label htmlFor="todo-reminder">Bu görevi hatırlat</label>
                    <input
                        type="checkbox"
                        id="todo-reminder"
                        checked={todoReminder}
                        value={todoReminder}
                        onChange={(e) =>
                            setTodoReminder(e.currentTarget.checked)
                        }
                    />
                </div>
                <input type="submit" value="Ekle" className="submit_btn btn" />
            </form>
        </>
    );
};

export default AddTodo;
