import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import todosArr from "./todos";
import { useState, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify([{}]));
        }
    });


    const addTodoHandler = (todo) => {
        let id = todos.length + 1;
        const newTodo = {
            id,
            ...todo,
        };
        setTodos([...todos, newTodo]);

        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const deleteHandler = (todoID) => {
        setTodos(todos.filter((todo) => todo.id !== todoID));
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const reminderHandler = (todoID) => {
        setTodos(
            todos.map((todo) =>
                todo.id === todoID
                    ? { ...todo, reminder: !todo.reminder }
                    : todo
            )
        );
    };

    return (
        <div className="app">
            <Header setShowBtn={setShowBtn} showBtn={showBtn} />

            {showBtn && <AddTodo addTodoHandler={addTodoHandler} />}

            {todos.length > 0 ? (
                <Todos
                    todos={todos}
                    reminderHandler={reminderHandler}
                    deleteHandler={deleteHandler}
                />
            ) : (
                "Henüz bir yapılacak eklenmedi."
            )}
        </div>
    );
}

export default App;
