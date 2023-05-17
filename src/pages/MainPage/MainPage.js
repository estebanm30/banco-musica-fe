import React from "react";
import RedirectButton from "../../components/redirectButton/redirectButton";

const MainPage = () => {
  return (
    <div className="container">
      <h1>Bienvenido</h1>
      <div>
        <RedirectButton className="button_login" redirectPath="/logInForm">
          <p>Ya estoy registrado</p>
        </RedirectButton>
      </div>
      <div>
        <RedirectButton redirectPath="/register">
          <p>Quiero registrarme</p>
        </RedirectButton>
      </div>
    </div>
  );
};
export default MainPage;
