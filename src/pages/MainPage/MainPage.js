import React from "react";
import RedirectButton from "../../components/redirectButton/redirectButton";


const MainPage = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <RedirectButton redirectPath="/logInForm">
        <p>Ya estoy registrado</p>
      </RedirectButton>

      <RedirectButton redirectPath="/register" >
        <p>Quiero registrarme</p>
      </RedirectButton>
    </div>
  );
};
export default MainPage;
