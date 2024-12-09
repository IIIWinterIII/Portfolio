import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About</Link>
          </li>
          <li>
          <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
          <Link to="/skills">Skills</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
