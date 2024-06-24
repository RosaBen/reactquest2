export default function NavBar({
  handlePrev,
  handleNext,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <div className="nav-buttons">
      {pokemonIndex > 0 && <button onClick={handlePrev}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </div>
  );
}