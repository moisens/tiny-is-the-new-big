import "./App.scss";
import Nav from "./components/nav/Navigation";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
