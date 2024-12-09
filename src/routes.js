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
        name: "Home"
    },
    {
        path: "/about",
        component: About,
        name: "About"
    },
    {
        path: "/portfolio",
        component: Portfolio,
        name: "Portfolio"
    },
    {
        path: "/skills",
        component: Skills,
        name: "Skills"
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact"
    },
]

export default routes;