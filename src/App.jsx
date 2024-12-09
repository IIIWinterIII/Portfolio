import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
