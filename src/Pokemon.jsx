import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard';
import './index.css';
export const Pokemon = () => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [Error, setError] = useState(null)
    const [search, setSearch] = useState("")

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url)
                const data = await res.json();
                return data
            })
            const detailedResponse = await Promise.all(detailPokemonData)
            setPokemon(detailedResponse)
            setLoading(false)
            console.log(detailedResponse);
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    }
    useEffect(() => {
        fetchPokemon();
    }, [])

    //search functionality 
    let searchData = [];
    if (pokemon) {
        searchData = pokemon.filter((cur) => cur.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (loading) {
        return (<div>
            <h1>Loading....</h1>
        </div>
        )
    }
    if (Error) {
        return (
            <div>
                <h1>{Error.massage} </h1>
            </div>
        )

    }
    return (
        <>
            <section className='container'>
                <header>
                    <h1>Lest catch pokemon</h1>
                </header>
                <div className='pokemon-search'>
                    <input type="text"
                        placeholder='search Pokemon'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
                <div>
                    <ul className='grid-three-cols'>
                        {
                            searchData.map((curPokemon) => {
                                return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}
