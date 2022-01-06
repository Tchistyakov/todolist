import Button from "../Component/Button";

function Footer({removeDone, removeAll}) {
  return (
    // <footer className="div-flex footer">
    <footer className={[]}>
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

export default Footer