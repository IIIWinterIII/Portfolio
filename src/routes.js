import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

import { faHome, faUser, faDisplay, faFileLines, faAddressCard } from "@fortawesome/free-solid-svg-icons"

const routes = [
    {
        path: "/",
        component: Home,
        // exact: true,
        name: "Home",
        icons: faHome,
    },
    {
        path: "/about",
        component: About,
        name: "About",
        icons: faUser,
    },
    {
        path: "/projects",
        component: Projects,
        name: "Projects",
        icons: faDisplay,
    },
    {
        path: "/resume",
        component: Resume,
        name: "Resume",
        icons: faFileLines,
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
        icons: faAddressCard,
    },
]

export default routes;