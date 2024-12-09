import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

const routes = [
    {
        path: "/",
        component: Home,
        // exact: true,
    },
    {
        path: "/About",
        component: About,
    },
    {
        path: "/Portfolio",
        component: Portfolio,
    },
    {
        path: "/Skills",
        component: Skills,
    },
    {
        path: "/Contact",
        component: Contact,
    },
]

export default routes;