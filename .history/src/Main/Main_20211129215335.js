import React, { useState } from "react";

function Main() {

    let [todoList, setTodoList] = useState('')
    let [todo, setTodo] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const item = {
            checked: false,
            task: todoList,
            id: 'id' + Number(new Date()),
        }
        setTodo([...todo, item])
    }

    return (
        <>
            <header className="div-flex header">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inpt" id="input"
                        placeholder="Введите задачу" value={todo}
                        onChange={event => setTodoList(event.target.value)}
                    />
                </form>
                <div>
                    <button className="add">Добавить</button>
                </div>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    {todo.map((item) => {
                        return (
                            <div className='div-flex todo' key={item.id} >
                                <input type="checkbox" onClick={() => true} />
                                <label className="task">{item.text}</label>
                                <span className="x" onClick={() => true}>❌</span>
                            </div>
                        )
                    })}
                </ul>
            </main>
            <footer className="div-flex footer">
                <div>
                    <button className="del-check" onClick={() => true}>Удалить завершенные</button>
                </div>
                <div>
                    <button className="del-all" onClick={() => true}>Удалить все</button>
                </div>
            </footer>
        </>
    )
}

export default Main