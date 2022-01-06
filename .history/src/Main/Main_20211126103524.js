import { useState} from "react";

function Main() {

    const [todos, setTodos] = useState([])

    // <div className='div-flex'>
    //     <input type="checkbox" />
    //     <label>{todos}Какая-то задача</label>
    //     <span className="x">❌</span>
    // </div>

    return (
        <>
            <header className="div-flex header">
                <div>
                    <input type="text" className="inpt" id="input" placeholder="Введите задачу" />
                </div>
                <div>
                    <button className="add" onClick={AddTask}>Добавить</button>
                </div>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    
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