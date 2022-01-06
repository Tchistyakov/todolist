import React, { useState } from "react";

function Main() {
    
    let [todo, setTodo] = useState([])
    let [todoList, setTodoList] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const item = {
            checked: false,
            task: todoList,
            id: 'id' + Number(new Date()),
        }
        setTodo([...todoList, item])
    }

    return (
        <>
            <header className="div-flex header">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inpt" id="input"
                        placeholder="Введите задачу" value={todoList}
                        onChange={event => setTodoList(event.target.value)}
                    />
                </form>
                <div>
                    <button className="add">Добавить</button>
                </div>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    {todoList.map()
                    return (
                    <div className='div-flex todo' id={props.id} >
                        <input type="checkbox" checked={item.checked} onChange={() => checkedChange()} />
                        <label className="task">{todoList}</label>
                        <span className="x" onClick={() => clouseX(props.id)}>❌</span>
                    </div>
                )}
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