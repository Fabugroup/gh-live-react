import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/Aboutus";
import Welcome from "./components/Welcome";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>

      <div>
        <nav>
          <Link to="/gh-live-react/">Welcome</Link> |
          <Link to="/gh-live-react/HomePage">Home</Link> | 
          <Link to="/gh-live-react/Aboutus">About Us</Link> |
          {/* <a href="https://www.google.com">Google</a> */}
        </nav>
      </div>

      <Routes>
        <Route path="/gh-live-react/" element={<Welcome />} />
         <Route path="/gh-live-react/HomePage" element={<HomePage />} />
        <Route path="/gh-live-react/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;