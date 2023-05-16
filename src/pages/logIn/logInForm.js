import React from "react";

const LogInForm = () => {
  return (
    <div>
      <h1>Ingresar a mi pefil</h1>
      <form>
        <p>
            <label for = "username_login">Ingrese su Nombre de usario: </label>
            <input
            name="username_login"
            type="text"
            id="username_login"
            placeholder="Ingrese su contraseña"
            ></input>
        </p>
        <p>
            <label for = "password_login">Ingrese su contraseña: </label>
            <input
            name="password_login"
            type="text"
            id="password_login"
            placeholder="Ingrese su contraseña"
            ></input>
        </p>
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default LogInForm;
