import React, { useState } from "react";

function Main() {

    let [todo, setTodos] = useState([])
    let [todoList, setTodoList] = useState('')

    function Tag(props) {
        const item = {
            checked: false,
            task: { todoList },
            // id: 'id' + Number(new Date()),
        }

        function checkedChange() {
            item.checked = !item.checked
        }

        return (
            <div className='div-flex todo' id={props.id} >
                <input type="checkbox" checked={item.checked} onChange={() => checkedChange()} />
                <label className="task">{todoList}</label>
                <span className="x" onClick={() => clouseX(props.id)}>❌</span>
            </div>
        )
    }

    function addTask() {
        todo.push(<Tag id={'id' + Number(new Date())} />)
        setTodos(todo => [...todo])
        setTodoList('')
        console.log(todo.length)
        console.log(todo)
    }

function deleteTask(id) {
    let newtodo = todo.filter((elem) => {
        return elem.props.id != id
    })
    console.log(todo.length)
    console.log(todo)
    setTodos(newtodo)
}

    function clouseX(id) {
        deleteTask()
    }

    //    function deletedAll() {
    //        let del = document.querySelectorAll('.todo')
    //        del.forEach((elem) => elem.remove())
    //    }

    //    function removeChecked() {
    //        let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    //        checked.forEach((elem) => elem.parentElement.remove())
    //    }

    return (
        <>
            <header className="div-flex header">
                <div>
                    <input type="text" className="inpt" id="input"
                        placeholder="Введите задачу" value={todoList}
                        onChange={event => setTodoList(event.target.value)}
                    />
                </div>
                <div>
                    <button className="add" onClick={addTask}>Добавить</button>
                </div>
            </header>
            <main className="main">
                <ul type="none" id="todo" className="list">
                    {todo}
                </ul>
            </main>
            <footer className="div-flex footer">
                <div>
                    <button className="del-check" >Удалить завершенные</button>
                </div>
                <div>
                    <button className="del-all" >Удалить все</button>
                </div>
            </footer>
        </>
    )
}

export default Main