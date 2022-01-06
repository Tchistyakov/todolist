import Button from "../Component/Button";

function Footer({removeDone, removeAll}) {
  return (
    <footer className="div_flex footer">
      <div>
        <Button 
        typebtn="del_check" func={removeDone}>
          Удалить завершенные
        </Button>
      </div>
      <div>
        <Button typebtn="del_all" func={removeAll}>
          Удалить все
        </Button>
      </div>
    </footer>
  );
}

export default Footer