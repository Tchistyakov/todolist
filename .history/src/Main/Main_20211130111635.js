import React, { useState } from "react";

let counter = 0

function Main() {
    let [todoText, setTodoText] = useState('')
    let [items, setItems] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const todo = {
            checked: false,
            text: todoText,
            id: counter++,
        }
        console.log(`# todo`, todo)
        setTodoText('')
        setItems([...items, todo])
    }

    function handleItemCheck(id) {
        const changed = items.map((item) => ({
            ...item, 
            cheked: item.id == id ? !item.cheked : item.checked
        }))
        setItems(changed)
    }

    function handleItemRemove(id) {
        const filtered = items.filter((item) => item.id !== id)
        setItems(filtered)
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