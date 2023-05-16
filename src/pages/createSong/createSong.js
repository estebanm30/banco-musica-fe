import React from "react";

const CreateSong = () => {
    return (
        <div>
            <h1>Crear una nueva cancion ----</h1>
            <form>
                <label for="songName">Ingrese el nombre de la cancion: </label>
                <input
                name="songName"
                type="text"
                className="songName"
                ></input>

            </form>
        </div>
    )
}

export default CreateSong