import React, { useState } from "react";

function Main(props) {

    const [todos, setTodos] = useState([])
    const [todoList, setTodoList] = useState('')
    function add() {

    }
    // <div className='div-flex'>
    //     <input type="checkbox" />
    //     <label>{todos}Какая-то задача</label>
    //     <span className="x">❌</span>
    // </div>
const addTodo = e => {
    
}


    return (
        <>
            <header className="div-flex header">
                <div>
                    <input type="text" className="inpt" id="input"
                        placeholder="Введите задачу" value={todoList}
                        onChange={e => setTodoList(e.target.value)}
                        onKeyPress={addTodo}
                    />
                </div>
                <div>
                    <button className="add" onClick={add}>Добавить</button>
                </div>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    {todos}
                </ul>
            </main>
            <footer className="div-flex footer">
                <div>
                    <button className="del-check">Удалить завершенные</button>
                </div>
                <div>
                    <button className="del-all">Удалить все</button>
                </div>
            </footer>
        </>
    )
}

export default Main