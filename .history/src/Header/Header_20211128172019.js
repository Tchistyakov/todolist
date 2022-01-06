import React, { useState } from "react";

function Header() {

    let [todos, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')

    function add() {
        todos.push(<Tag />)
        setTodos(todos => [...todos])
        setTodoList('')
    }

    function Tag() {
        let id = 'id' + Number(new Date())
        return (
            <>
                <div className='div-flex todo' id={id}>
                    <input type="checkbox" />
                    <label className="task">{todoList}</label>
                    <span className="x" onClick={() => clouseX(id)}>❌</span>
                </div>
            </>
        )
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

export default Header