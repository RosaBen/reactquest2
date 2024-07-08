import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./styles/navbar.css";

import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setIndex] = useState(0);

  //  si pokemonIndex est > 0, donc retire  1 à set Index de pokemonIndex sinon mets la taille du tableau -1 (index commence par 0 donc la longueur doit deduire 1 pour tomber sur le numéro correct)
  const handlePrev = () => {
    setIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length - 1);
  };
  //  si pokemonIndex est < la taille du tableau -1 (index commence par 0 donc la longueur doit deduire 1 pour tomber sur le numéro correct), donc rajoute  1 à set Index de pokemonIndex sinon mets zéro pour repartir de index 0
  const handleNext = () => {
    setIndex(pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0);
  };

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <section>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <NavBar
        handlePrev={handlePrev}
        handleNext={handleNext}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
    </section>
  );
}

export default App;
