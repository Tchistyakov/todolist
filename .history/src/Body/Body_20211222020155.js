import Main from "../Main/Main";
import body from "./body.module.css";

function Body() {
  return (
    <>
      <h1>Список Покупок</h1>
      <div className={body.window}>
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Body;
