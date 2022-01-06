import Main from '../Main/Main'
import { useState, setTodoText } from 'react'

function Header( {handleSubmit},  ) {
    return (
            <header className="div-flex header">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inpt"
                        placeholder="Введите задачу" value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                    <button className="add">Добавить</button>
                </form>
            </header>
            )
}

export default Header