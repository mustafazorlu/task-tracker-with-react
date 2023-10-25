import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import todosArr from "./todos";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState(todosArr);
    const [showBtn, setShowBtn] = useState(false);

    const localStorageHandler = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const addTodoHandler = (todo) => {
        let id = todosArr.length + 1;
        const newTodo = {
            id,
            ...todo,
        };
        ;
        
        
        localStorage.setItem('todos',  JSON.stringify(setTodos([...todos, newTodo])))
        localStorageHandler();
        console.log(todos);
    };

    const deleteHandler = (todoID) => {
        setTodos(todos.filter((todo) => todo.id !== todoID));
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
    const storage = JSON.parse(localStorage.getItem('todos'))
    return (
        <div className="app">
            <Header setShowBtn={setShowBtn} showBtn={showBtn} />

            {showBtn && <AddTodo addTodoHandler={addTodoHandler} />}

            {todos.length > 0 ? (
                <Todos
                    todos={storage}
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
