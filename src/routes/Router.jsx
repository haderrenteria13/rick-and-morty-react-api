import { createBrowserRouter } from "react-router-dom"
import NotFound from "../features/notFound/NotFound"
import Home from "../features/home/Home"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default Router