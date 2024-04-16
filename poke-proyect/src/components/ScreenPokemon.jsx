
const ScreenPokemon = ({pokemones, position}) => {
    return (
        <div className="image-container">
            {pokemones.map((pokemon, idx) => (
                <div className="image-box" key={pokemon.id} style={{background: idx === position ? '#494b0179' : 'transparent'}}>
                    <img className="image" src={pokemon.sprites.front_default} alt="" />
                    <div className="name">{pokemon.name}</div>
                </div>
            ))}
        </div>
    )
};

export default ScreenPokemon