// вешаем слушатели на события

document.querySelector('.add').addEventListener('click', addTask);
document.querySelector('.del-all').addEventListener('click', deletedAll);
document.querySelector('.del-check').addEventListener('click', removeChecked);

// функция удаления элемента/элементов по checkbox

function removeChecked() {

  let checked = document.querySelectorAll('input[type="checkbox"]:checked');
  for (let i = 0; i < checked.length; i++) {
    checked[i].parentElement.parentElement.remove();
  }
}

// функция удаления элемента по нажатию крестика

function clouseX(elem) {
  document.querySelector("#" + elem).remove();
}

// функция добавления текущих задач

function addTask() {
  let inputValue = document.getElementById("input").value;
  let id = "d" + +new Date();
  let list = `
        <div>
          <input type="checkbox">
          <label>${inputValue}</label>
        </div>
        <div>
          <span class="x" onclick='clouseX("${id}")'>❌</span>
        </div>`;

  let li = document.createElement("li");
  li.id = id;
  li.className = "li";
  li.innerHTML = list;
  document.getElementById("todo").appendChild(li);
  document.getElementById("input").value = "";
}

// Удаляет все элементы по нажатию кнопки "удалить все"

function deletedAll() {
  let pass = document.querySelectorAll("li");
  for (let i = 0; i < pass.length; i++) {
    pass[i].remove();
  }
}




// Общий план:
// 1. Верстка
// 2. Находим элементы
// +  Объявить массив (забрать значение из хранилища)
// 3. Разбиваем на функции
//   - добавить
//   - удалить один
//   - удалить все
//   - отметить выполненное
//   - удалить выбранные
// 4. Размышляем над функцией добавить
//   - получить значение из инпута
//   - добавить в массив
//   - добавили массив в хранилище
//   - отрисовать в html
// 5. Удалить все
//   - почистить массив
//   - добавили массив в хранилище
//   - почистить html
// 6. Удалить один
//   - слушатель на «x»
//   - найти индекс элемента
//   - удаляем из массива по индексу
//   - добавили массив в хранилище
//   - рисуем html
// 7. Отметить выполненное
//   - слушатель на чекбокс
//   - зачеркивание текста
//   - найти индекс элемента
//   - записать в массив чекнут или нет
//   - добавили массив в хранилище
// 8. Удалить выбранные
//   - находим их индекс
//   - удаляем из массива
//   - добавили массив в хранилище
//   - удалить из html