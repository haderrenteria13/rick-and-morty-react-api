import React, { useEffect, useState } from 'react'
import { fetchCharacters } from '../../services/rickAndMortyApi'
import { NavLink } from 'react-router-dom'

const Character = () => {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters()
        setCharacter(data.results)
      } catch (error) {
        console.log("Error fetching:", error)
      } finally {
        setLoading(false)
      }
    }

    getCharacters()
  }, [])

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-4 gap-5'>
        {character.map((character) =>
          <div key={character.id} className='card'>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
            <NavLink to={`/personaje/${character.id}`}>Saber más</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Character