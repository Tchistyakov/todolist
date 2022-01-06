import React, { useState } from "react";
import Header from '../Header/Header'

function Main() {

    let [todos, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')





    function clouseX(elem) {
        document.querySelector("#" + elem).remove();
    }

    function deletedAll() {
        let del = document.querySelectorAll('.todo')
        del.forEach((elem) => elem.remove())
    }

    function removeChecked() {
        let checked = document.querySelectorAll('input[type="checkbox"]:checked');
        checked.forEach((elem) => elem.parentElement.remove())
    }

    return (
        <>
            <Header />
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