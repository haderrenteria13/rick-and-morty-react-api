const BASE_URL = 'https://rickandmortyapi.com/api/'

export const fetchCharacters = async () => {
    try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching characters:", error)
        throw error
    }
}

export const fetchCharactersByID = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/character/${id}`)
        if (!response.ok) {
            throw new Error("Error al obtener datos del personaje")
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching character by id', error)
        throw error
    }
}

export const fetchLocations = async () => {
    try {
        const response = await fetch(`${BASE_URL}/location`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching locations:", error)
        throw error
    }
}

export const fetchEpisodes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/episode`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching episodes:", error)
        throw error
    }
}