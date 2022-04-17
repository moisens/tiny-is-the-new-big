import "../components/home/home.scss";
import Header from "../components/home/header/Header";
import Partner from "../components/home/partners/Partner";
import About from "../components/home/about/About";
import Service from "../components/home/services/Service";
import Location from "../components/home/location/Location";
import PeopleSays from "../components/home/peoplesays/PeopleSays"

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Partner />
      <About />
      <Service />
      <Location />
      <PeopleSays />
    </div>
  )
}

export default Home;
