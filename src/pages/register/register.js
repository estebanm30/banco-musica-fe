import React from "react";
import RedirectButton from "../../components/redirectButton/redirectButton";
import { useForm } from "react-hook-form";
import './register.css'

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Nuevo registro</h1>
        <p>
          <label for="username_register">Ingrese un Nombre de usuario:</label>
          <input
            id="username_register"
            type="text"
            name="username_register"
            {...register('username',{
              required: true,
              maxLength: 15,
              minLength: 5
            })}
          />
          {errors.username?.type === 'required' && <p>El Usario es requerido</p>}
          {errors.username?.type === 'maxLength' && <p>Debe tener maximo 15 caracteres</p>}
          {errors.username?.type === 'minLength' && <p>Debe tener minimo 5 caracteres</p>}
        </p>
        <p>
          <label for="name">¿Cual es su nombre completo?: </label>
          <input
            id="name"
            type="text"
            name="name"
            {...register('name',{
              required: true,
              minLength: 3,
              maxLength: 30
            })}
          />
          {errors.name?.type === 'required' && <p>El Nombre es requerido</p>}
          {errors.name?.type === 'minLength' && <p>El Nombre debe tener minimo 3 caracteres</p>}
          {errors.name?.type === 'maxLength' && <p>El Nombre debe tener maximo 30 caracteres</p>}
        </p>
        <p>
          <label for="password_regiter">Ingrese su contraseña: </label>
          <input
            id="password_regiter"
            type="password"
            name="password_regiter"
            {...register('password',{
              required: true,
              minLength: 5,
              maxLength: 30
            })}
          />
        </p>
        {errors.password?.type === 'required' && <p>La contraseña es requerida</p>}
        {errors.password?.type === 'minLength' && <p>La contraseña debe tener minimo 5 caracteres</p>}
        {errors.password?.type === 'maxLength' && <p>La contraseña debe tener maximo 30 caracteres</p>}
        <p>
          <label for="isArtist">¿Desea crear una cuenta de artista? </label>
          <input
            id="isArtist"
            type="checkbox"
            placeholder="isArtist"
            name="isArtist"
            {...register('isArtist')}
          />
        </p>
        <input type="submit" value="Registrar"></input>
      </form>
    </div>
  );
};

export default Register;
