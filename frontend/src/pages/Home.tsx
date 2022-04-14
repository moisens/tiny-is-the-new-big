import "../components/home/home.scss";
import Header from "../components/home/header/Header";
import Partner from "../components/home/partners/Partner";
import About from "../components/home/about/About";
import Service from "../components/home/services/Service";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Partner />
      <About />
      <Service />
    </div>
  )
}

export default Home;
