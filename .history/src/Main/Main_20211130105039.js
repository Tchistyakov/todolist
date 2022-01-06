import React, { useState } from "react";

function Main() {
    let [todoText, setTodoText] = useState('')
    let [items, setItems] = useState([])

    function handleSubmit(event) {
        let counter = 0
        event.preventDefault()
        const todo = {
            checked: false,
            text: todoText,
            id: counter++,
        }
        setTodoText('')
        setItems([...items, todo])
    }

    function handleItemCheck(id) {
        console.log('#id', id)
    }

    function handleItemRemove(id) {
        console.log('#id', id)
    }

    return (
        <>
            <header className="div-flex header">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inpt"
                        placeholder="Введите задачу" value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                    <button className="add">Добавить</button>
                </form>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    {items.map((item) => {
                        return (
                            <div className='div-flex todo' key={item.id} >
                                <input type="checkbox" onClick={() => handleItemCheck(item.id)} />
                                {item.text}
                                <span className="x" onClick={() => handleItemRemove(item.id)}>❌</span>
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