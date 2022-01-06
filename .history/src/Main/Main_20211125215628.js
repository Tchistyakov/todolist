import AddTask from "../AddTask/AddTask"

function Main() {

    return (
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
                <AddTask />
            </ul>
        </main>
    )
}

export default Main