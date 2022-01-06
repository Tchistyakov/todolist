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
        setTodoList('')
        setTodo([...todo, item])
    }

    function handleItemCheck() {
        
    }

    return (
        <>
            <header className="div-flex header">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inpt"
                        placeholder="Введите задачу" value={todoList}
                        onChange={(e) => setTodoList(e.target.value)}
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
                                <input type="checkbox" onClick={handleItemCheck} />
                                <label className="task">{item.text}</label>
                                <span className="x" onClick={handleItemRemove}>❌</span>
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