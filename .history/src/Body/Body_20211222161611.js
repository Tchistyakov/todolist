import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import body from "./body.module.css";

let counter = 0;

function Body() {


  
  return (
    <>
      <h1>Список Покупок</h1>
      <div className={body.window}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Body;
