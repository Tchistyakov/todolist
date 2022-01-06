import Button from "../Component/Button";
import style from "./Footer.module.css"

function Footer({removeDone, removeAll}) {
  return (
    <footer className="div-flex ${style.footer}">
    {/* <footer className={[div_flex, style.footer].join(' ')}> */}
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