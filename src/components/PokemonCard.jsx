import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  // console.log(pokemon);
  // const pokemon = pokemonList[0];
  // const pokemon = { name: "mew" };

  // If imgSrc exists in pokemon then add img with src and alt, otherwise add p with "?????"
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>?????</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

// I will get an error message in console.log . is it this message? https://app.screencast.com/Q9aLiFmqzI0Z4
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
