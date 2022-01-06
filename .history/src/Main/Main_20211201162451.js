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
            editState: false,
        }

        setTodoText('')
        setItems([...items, todo])
    }

    function handleItemCheck(id) {
        const changed = items.map(item => ({
            ...item,
            checked: item.id === id ? !item.checked : item.checked
        }))
        setItems(changed)
    }

    function handleItemRemove(id) {
        const filtered = items.filter(item => item.id !== id)
        setItems(filtered)
    }

    function removeDone() {
        const filtered = items.filter(item => !item.checked)
        setItems(filtered)
    }

    function removeAll() {
        setItems([])
    }

    function handleItemRename(id) {
        const changed = items.map(item => ({
            ...item,
            editState: item.id === id ? !item.editState : item.editState
        }))
        setItems(changed)
    }

    function handleTextRename(text) {
        // const changed = items.map(item => ({
        //     ...item,
        //     text: item.id === id ? 
        // }))
        // setItems(changed)
console.log()
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
                                <label className={item.editState ? 'inputvisiblenone' : 'inputvisible'}>{item.text}</label>
                                <input type='text' className={item.editState ? 'inputvisible inpt' : 'inputvisiblenone inpt'}
                                    placeholder={item.text} value={item.text}
                                    onChange={(e) => handleTextRename(e.target.value)}
                                />
                                <span className="x" onClick={() => handleItemRename(item.id)}>✏️</span>
                                <span className="x" onClick={() => handleItemRemove(item.id)}>🗑</span>
                            </div>
                        )
                    })}
                </ul>
            </main>
            <footer className="div-flex footer">
                <div>
                    <button className="del-check" onClick={removeDone}>Удалить завершенные</button>
                </div>
                <div>
                    <button className="del-all" onClick={removeAll}>Удалить все</button>
                </div>
            </footer>
        </>
    )
}

export default Main