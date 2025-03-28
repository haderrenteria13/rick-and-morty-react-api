import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharactersByID } from '../../services/rickAndMortyApi'

const CharacterDetail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useState(() => {
        const getCharacter = async () => {
            try {
                const data = await fetchCharactersByID(id)
                setCharacter(data)
            } catch (error) {
                setError("Error al cargar el personaje")
            } finally {
                setLoading(false)
            }
        }

        getCharacter()
    }, [id])

    if (loading) {
        return (
            <p>Cargando...</p>
        )
    }

    if (error) {
        return (
            <p>{ error }</p>
        )
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
        </div>
    )
}

export default CharacterDetail