
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function PokemonList() {
  const [pokemones, setPokemones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemones = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        if (!response.ok) {
          throw new Error('Error al obtener los pokemones');
        }
        const listaPokemones = await response.json();
        const { results } = listaPokemones;

        const newPokemones = results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();

          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
          };
        });

        setPokemones(await Promise.all(newPokemones));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getPokemones();
  }, []);

  const redirectToPokemonDetail = (pokemonId) => {    
    navigate(`/personajes/${pokemonId}`);
  };

  return (
    <>
      <div className='container'>
        {pokemones.map((pokemon) => (
          <div className = 'box' key={pokemon.id} onClick={() => redirectToPokemonDetail(pokemon.id)}>
            <img src={pokemon.img} alt={pokemon.name} />
            <h3># {pokemon.id}</h3>
            <h2>{pokemon.name}</h2>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
