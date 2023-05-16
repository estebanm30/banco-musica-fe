import React from "react";
import RedirectButton from "../../components/redirectButton/redirectButton";

const Register = () => {
  return (
    <div>
      <h1>Nuevo registro</h1>
      <form>
      <p>
        <label for ="username_register">Ingrese un Nombre de usuario:</label>
        <input
          id="username_register"
          type="text"
          placeholder="Crea tu Nombre de usuario"
          name="username_register"
        />
      </p>
      <p>
        <label for="name">¿Cual es su nombre completo?: </label>
        <input
          id="name"
          type="text"
          placeholder="Ingrese Su Nombre"
          name="name"
        />
      </p>
      <p>
        <label for="password_regiter">Ingrese su contraseña: </label>
        <input
          id="password_regiter"
          type="password"
          placeholder="Ingrese una contraseña"
          name="password_regiter"
        />
      </p>
      <p>
        <label for="isArtist">¿Desea crear una cuenta de artista? </label>
        <input
          id="isArtist"
          type="checkbox"
          placeholder="isArtist"
          name="isArtist"
        />
      </p>
      <button>Registrarme</button>
      </form>
    </div>
  );
};

export default Register;
