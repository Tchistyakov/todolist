import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import body from "./body.module.css";

let counter = 0;

function Body() {
  let [todoText, setTodoText] = useState("");
  let [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const todo = {
      checked: false,
      text: todoText,
      id: counter++,
      editState: false,
    };

    setTodoText("");
    setItems([...items, todo]);
  }

  function handleItemCheck(id) {
    const changed = items.map((item) => ({
      ...item,
      checked: item.id === id ? !item.checked : item.checked,
    }));
    setItems(changed);
  }

  function handleItemRemove(id) {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  }

  function removeDone() {
    const filtered = items.filter((item) => !item.checked);
    setItems(filtered);
  }

  function removeAll() {
    setItems([]);
  }

  function handleItemRename(id) {
    const changed = items.map((item) => ({
      ...item,
      editState: item.id === id ? !item.editState : item.editState,
    }));
    setItems(changed);
  }

  function handleTextRename(text, id) {
    const changed = items.map((item) => ({
      ...item,
      text: item.id === id ? text : item.text,
    }));
    setItems(changed);
  }

  function handleEditing() {
    
  }

  return (
    <>
      <h1>Список Покупок</h1>
      <div className={body.window}>
        <Header
          setTodoText={setTodoText}
          handleSubmit={handleSubmit}
          todoText={todoText}
        />
        <Main
          items={items}
          handleItemCheck={handleItemCheck}
          handleTextRename={handleTextRename}
          handleItemRename={handleItemRename}
          handleItemRemove={handleItemRemove}
          handleEditing={handleEditing}
        />
        <Footer removeDone={removeDone} removeAll={removeAll} />
      </div>
    </>
  );
}

export default Body;
