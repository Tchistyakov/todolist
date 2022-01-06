function Main({
  handleItemCheck,
  handleTextRename,
  handleItemRename,
  handleItemRemove,
  handleEditing,
  items,
}) {
  return (
    <>
      <main className="main">
        <ul type="none" id="todo" className="list">
          {items.map((item) => {
            return (
              <div className="div_flex todo" key={item.id}>
                <input
                  type="checkbox"
                  onClick={() => handleItemCheck(item.id)}
                />
                <label
                  className={
                    item.editState ? "inputvisiblenone" : "inputvisible"
                  }
                >
                  {item.text}
                </label>
                <form onSubmit={(e) => handleEditing(e.target.val)}>
                  <input
                    type="text"
                    className={
                      item.editState
                        ? "inputvisible inpt"
                        : "inputvisiblenone inpt"
                    }
                    placeholder={item.text}
                    defaultValue={item.text}
                    onChange={(e) => handleTextRename(e.target.value, item.id)}
                  />
                </form>
                <span className="x" onClick={() => handleItemRename(item.id)}>
                  ✏️
                </span>
                <span className="x" onClick={() => handleItemRemove(item.id)}>
                  🗑
                </span>
              </div>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default Main;
