import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>ToDo List</h1>
    <div class="window">
        <header class="div-flex header">
            <div>
                <input type="text" class="inpt" id="input" value="" placeholder="Введите задачу" />
            </div>
            <div>
                <button class="add">Добавить</button>
            </div>
        </header>
        <main class="main">
            <ul type="none" id="todo" class="list">
              
            </ul>
        </main>
        <footer class="div-flex footer">
            <div>
                <button class="del-check">Удалить завершенные</button>
            </div>
            <div>
                <button class="del-all">Удалить все</button>
            </div>
        </footer>
    </div>
    </>
  );
}

export default App;
