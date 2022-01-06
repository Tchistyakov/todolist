import React, { useState } from "react";

function Main() {

    let [todos, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')

    function Tag() {
        return (
            <>
                <div className='div-flex' id = {+Number new Date()}>
                    <input type="checkbox" />
                    <label>{todoList}</label>
                    <span className="x" >❌</span>
                </div>
            </>
        )
    }

    function clouseX(elem) {
        document.querySelector("#" + elem).remove();
      }

    function add() {
        todos.push(<Tag />)

        console.log(todos)
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