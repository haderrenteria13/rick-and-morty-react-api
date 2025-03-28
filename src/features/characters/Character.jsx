import React, { useEffect, useState } from 'react'
import { fetchCharacters } from '../../services/rickAndMortyApi'
import { Link, Outlet } from 'react-router-dom'

const Character = () => {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState([])

  useEffect (() => {
    const getCharacters = async () => {
      try{
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
    <div>
      <p className='underline'>Home</p>
      <ul>
        {character.map((character) => (
          <React.Fragment key={character.id}>
            <li>{character.name}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <Link to={`/personaje/${character.id}`}>Link</Link>
          </React.Fragment>
        ))}
      </ul>
      <Outlet/>
    </div>
  )
}

export default Character