import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener el detalle del Pokémon');
        }
        const data = await response.json();
        setPokemon(data);
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
  

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Pokémon: {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Tipo: {  `${pokemon.types[0].type.name}`}</p>
      <p>HP: {  `${pokemon.stats[0].base_stat} `}</p>
      <p>Attack: {  `${pokemon.stats[1].base_stat} `}</p>
      <p>Defense: {  `${pokemon.stats[2].base_stat} `}</p>
      
   
    </div>
  );
}

export default PokemonDetail;






