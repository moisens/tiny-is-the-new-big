import "../components/home/home.scss";
import Header from "../components/home/header/Header";
import Partner from "../components/home/partners/Partner";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Partner />
    </div>
  )
}

export default Home;
