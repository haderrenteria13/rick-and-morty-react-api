import React from 'react'
import Starfield from 'react-starfield'

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Bienvenido al Universo de Rick and Morty</h1>
        <p className="mt-4 text-lg">Explora personajes, episodios y locaciones</p>
      </div>
    </div>
  )
}

export default Home