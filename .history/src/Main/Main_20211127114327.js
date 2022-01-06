import React, { useState } from "react";

function Main() {

    let [todos, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')

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

    function add() {
        todos.push(<Tag />)
        setTodos(todos => [...todos])
        setTodoList('')
    }

    function clouseX(elem) {
        document.querySelector("#" + elem).remove();
    }

    function deletedAll() {
        let del = document.querySelectorAll('.todo')
        del.forEach((elem) => elem.remove())
    }

    function removeChecked() {
        let checked = document.querySelectorAll('input[type="checkbox"]:checked');
        for (let i = 0; i < checked.length; i++) {
            checked[i].parentElement.parentElement.remove();
        }
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
                    <button className="del-check" onClick={() => removeChecked()}>Удалить завершенные</button>
                </div>
                <div>
                    <button className="del-all" onClick={() => deletedAll()}>Удалить все</button>
                </div>
            </footer>
        </>
    )
}

export default Main