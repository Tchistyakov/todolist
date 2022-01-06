import React, { useEffect, useState } from "react";

function Header() {

    let [todos, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')

    function add() {
        todos.push(<Tag />)
        setTodos(todos => [...todos])
        setTodoList('')
    }

    return (
        <>
            <header className="div-flex header">
                <div>
                    <input type="text" className="inpt" id="input"
                        placeholder="Введите задачу" value={todoList}
                        onChange={event => setTodoList(event.target.value)}
                    />
                </div>
                <div>
                    <button className="add" onClick={add}>Добавить</button>
                </div>
            </header>
        </>
    )
}

export default 