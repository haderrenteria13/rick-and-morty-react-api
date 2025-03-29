import { createBrowserRouter } from "react-router-dom"
import NotFound from "../features/notFound/NotFound"
import Navbar from "../components/layout/Navbar"
import Home from "../features/home/Home"
import Character from "../features/characters/Character"
import CharacterDetail from "../features/characters/CharacterDetail"
import Episodes from "../features/episodes/Episodes"
import Locations from "../features/locations/Locations"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/personajes",
                element: <Character />,
            },
            {
                path: "/personaje/:id",
                element: <CharacterDetail />
            },
            {
                path: "/episodios",
                element: <Episodes />
            },
            {
                path: "/locaciones",
                element: <Locations />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default Router