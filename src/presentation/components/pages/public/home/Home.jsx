/**
 *
 * todo: Página principal
 *
 */

import { useState } from "react";
import "../../../../styles/style.css";
import Details from "../../../molecules/details/Details";

const Home = () => {
  const [phrase, setPhrase] = useState("");
  const [inputValue, setInputValue] = useState("");

  //todo: Requerimientos
  const items = {
    frog: ["brr", "birip", "brrah", "croac"],
    dragonFly: ["fiu", "plop", "pep"],
    cricket: ["cric-cric", "trri-trri", "bri-bri"],
  };

  //todo: Array de canciones
  const songs = [
    ["brr", "fiu", "cric-cric", "brrah"],
    ["pep", "birip", "trri-trri", "croac"],
    ["bri-bri", "plop", "cric-cric", "brrah"],
  ];

  //todo: Buscamos el indice de una canción
  function handlePhrase(sound, song) {
    return song.indexOf(sound);
  }

  //todo: Buscamos el sonido y devolvemos el resto de los sonidos
  function searchSound(event) {
    event.preventDefault();
    const soundSearch = inputValue;
    const remainingSounds = searchSoundInSounds(soundSearch);
    setPhrase(
      remainingSounds.length > 0
        ? `Cuando nos da ${soundSearch}, debe reproducir: ${remainingSounds.join(
            "  "
          )}`
        : `Cuando nos da ${remainingSounds}, no debería reproducir nada según todas las canciones.`
    );
  }

  //todo:Busca sonido en la canción
  function searchSoundInSounds(sound) {
    for (const song of songs) {
      const indice = handlePhrase(sound, song);
      if (indice !== -1) {
        return song.slice(indice + 1);
      }
    }

    return [];
  }

  return (
    <div className="form-group container col-4 my-3 ">
      <Details items={items} songs={songs} />
      <form onSubmit={searchSound}>
        <div className="form-group">
          <input
            placeholder="Ingresa una frase"
            name="phrase"
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
      <div className="text-center p-3 content-response">
        <p>{phrase}</p>
      </div>
    </div>
  );
};

export default Home;
