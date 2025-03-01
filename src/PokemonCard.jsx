import React from 'react'

export const PokemonCard = ({ pokemonData }) => {
    return (
        <li className='pokemon-card'>
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default}
                    alt={pokemonData.name}
                    className='pokemon-image' />
            </figure>
            <h1 className='pokemon-name'>{pokemonData.name}</h1>
            <div className='pokemon-highlight'>
                <p>
                    {pokemonData.types.map((curType) => curType.type.name).join(", ")}
                </p>
            </div>
            <div className='grid-three-cols1'>
                <p className='pokemon-info'>
                    <span>Height:</span>  {pokemonData.height}
                </p>
                <p className='pokemon-info'>
                    <span>Weight:</span>  {pokemonData.weight}
                </p>
                <p className='pokemon-info'>
                    <span>Speed:</span>  {pokemonData.stats[1].base_stat}
                </p>
            </div>
            <div className="grid-three-cols1">
                <div className="pokemon-info1">
                    <p>{pokemonData.base_experience}</p>
                    <span> Experience:</span>
                </div>
                <div className="pokemon-info1">
                    <p>{pokemonData.stats[1].base_stat}</p>
                    <span>Attack:</span>
                </div>
                <div className="pokemon-info1">
                    <p>
                        {pokemonData.abilities
                            .map((abilityInfo) => abilityInfo.ability.name)
                            .slice(0, 1)
                            .join(", ")}
                    </p>
                    <span> Abilities: </span>
                </div>
            </div>
        </li >
    )
}
