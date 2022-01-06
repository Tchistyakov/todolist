import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>ToDo List</h1>
    <div className="window">
        <header className="div-flex header">
            <div>
                <input type="text" className="inpt" id="input" value="" placeholder="Введите задачу" />
            </div>
            <div>
                <button className="add">Добавить</button>
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
                <button clasNames="del-all">Удалить все</button>
            </div>
        </footer>
    </div>
    </>
  );
}

export default App;
