import React, { useState } from "react";

function Main() {

    let [todo, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')

    function Tag() {
        const item = {
            checked: false,
            task: {todoList},
            id: 'id' + Number(new Date()),
        }

        return (
            <div className='div-flex todo' id={item.id}>
                <input type="checkbox" checked={item.checked} onChange={() => checkedChange()}/>
                <label className="task">{todoList}</label>
                <span className="x" >❌</span>
            </div>
        )
    }

    checkedChange()

    function addTask() {
        todo.push(<Tag />)
        setTodos(todo => [...todo])
        setTodoList('')
    }

    //    function clouseX(elem) {
    //        document.querySelector("#" + elem).remove();
    //    }

    //    function deletedAll() {
    //        let del = document.querySelectorAll('.todo')
    //        del.forEach((elem) => elem.remove())
    //    }

    //    function removeChecked() {
    //        let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    //        checked.forEach((elem) => elem.parentElement.remove())
    //    }

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
                    <button className="add" onClick={addTask}>Добавить</button>
                </div>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    {todo}
                </ul>
            </main>
            <footer className="div-flex footer">
                <div>
                    <button className="del-check" >Удалить завершенные</button>
                </div>
                <div>
                    <button className="del-all" >Удалить все</button>
                </div>
            </footer>
        </>
    )
}

export default Main