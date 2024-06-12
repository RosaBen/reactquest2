const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default function PokemonCard (){
    const pokemon = pokemonList[0];
// if imgSrc exists in pokemonList then add img with src and alt otherwise add p with "?????" 
    return  <figure>{pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>?????</p>)}<figcaption>{pokemon.name}</figcaption></figure>;


}