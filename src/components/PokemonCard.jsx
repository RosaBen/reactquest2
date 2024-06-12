export default function PokemonCard ({ pokemon }){
    console.log(pokemon);
    // const pokemon = pokemonList[0];
    // const pokemon = { name: "mew" };
// if imgSrc exists in pokemonList then add img with src and alt otherwise add p with "?????" 
    return  <figure>{pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>?????</p>)}<figcaption>{pokemon.name}</figcaption></figure>;


}