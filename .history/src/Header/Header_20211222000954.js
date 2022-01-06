import Button from '../Component/Button'

function Header( {handleSubmit, setTodoText, todoText} ) {
    return (
            <header className="div-flex header">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inpt"
                        placeholder="Введите задачу" value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                    <Button color="black">Добавить</Button>
                    {/* <button className="add">Добавить</button> */}
                </form>
            </header>
            )
}

export default Header