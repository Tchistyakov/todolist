

function Header() {
    return (
        <header className="div-flex header">
            <div>
                <input type="text" className="inpt" id="input" placeholder="Введите задачу" />
            </div>
            <div>
                <button className="add" onClick={}>Добавить</button>
            </div>
        </header>
    )
}

export default Header