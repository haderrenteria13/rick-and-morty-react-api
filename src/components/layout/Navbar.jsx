import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <main>
            <nav className='flex py-5 px-44 justify-between top-0 left-0 w-full text-white z-50 shadow-md'>
                <NavLink to={"/home"}>
                    <h1>Rick and Morty</h1>
                </NavLink>

                <ul className='flex gap-3'>
                    <li>
                        <NavLink to={"/personajes"}>Personajes</NavLink>
                    </li>
                </ul>
            </nav>

            <div>
                <Outlet />
            </div>
        </main>
    )
}

export default Navbar