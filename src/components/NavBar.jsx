import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index) => {
    const selectedPokemon = pokemonList[index];
    setPokemonIndex(index);
    alert(selectedPokemon.name);
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          onClick={() => handleClick(index)}
          key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
