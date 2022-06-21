import "../components/home/home.scss";
import Header from "../components/home/header/Header";
import Partner from "../components/home/partners/Partner";
import About from "../components/home/about/About";
import MultiImage from "../components/home/image-component/MultiImage";
import Service from "../components/home/services/Service";
import Location from "../components/home/location/Location";
import PeopleSays from "../components/home/peoplesays/PeopleSays"
import Contact from "../components/home/contact/Contact";

//endpoint
import { datas } from "../utils/multi-img-utils";


const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Partner />
      <About />
      <MultiImage datas={datas} />
       <Service />
      <Location />
      <PeopleSays />
      {/*<Contact /> */}
    </div>
  )
}

export default Home;
