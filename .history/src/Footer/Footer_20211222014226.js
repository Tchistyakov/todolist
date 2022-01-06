import Button from "../Component/Button";

function Footer() {
  return (
    <footer className="div-flex footer">
      <div>
        <Button typebtn="del-check" func={removeDone}>
          Удалить завершенные
        </Button>
      </div>
      <div>
        <Button typebtn="del-all" onClick={removeAll}>
          Удалить все
        </Button>
      </div>
    </footer>
  );
}

export 