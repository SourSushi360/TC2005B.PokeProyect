
const ScreenPokemon = ({pokemones}) => {
    console.log(pokemones);
    return (
        <div className="image-container">
            {pokemones.map((pokemon) => (
                <div className="image-box">
                    <img className="image" key={pokemon.id} src={pokemon.sprites.front_default} alt="" />
                    <div key={pokemon.id} className="name">{pokemon.name}</div>
                </div>
            ))}
        </div>
    )
};

export default ScreenPokemon