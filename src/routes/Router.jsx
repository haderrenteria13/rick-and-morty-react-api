import { createBrowserRouter } from "react-router-dom"
import NotFound from "../features/notFound/NotFound"
import Home from "../features/home/Home"
import Character from "../features/characters/Character"
import CharacterDetail from "../features/characters/CharacterDetail"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/personaje",
        element: <Character />,
    },
    {
        path: "/personaje/:id",
        element: <CharacterDetail/>
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default Router