import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <main>
      <nav className='flex p-4 justify-between'>
        <NavLink to={"/home"}>
          <h1>Rick and Morty</h1>
        </NavLink>

        <ul className='flex gap-3'>
          <li>
            <NavLink to={"/personajes"}>Personajes</NavLink>
          </li>
          <li>
            <NavLink to={"/episodios"}>Episodios</NavLink>
          </li>
          <li>
            <NavLink to={"/locaciones"}>Locaciones</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet/>
    </main>
  )
}

export default Navbar