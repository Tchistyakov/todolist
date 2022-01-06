import AddTask from "../AddTask/AddTask"

function Main() {

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
                    <AddTask />
                    <AddTask />
                    <AddTask />
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