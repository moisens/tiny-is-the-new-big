import "./scss/App.scss";
import Nav from "./components/nav/Navigation";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Location from "./pages/Location";
import Singleproduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="rent" element={<Rent />} />
        <Route path="location" element={<Location />} />
        <Route path="/details-tiny-house/:_id" element={<Singleproduct />} />
        <Route path="*"  element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
