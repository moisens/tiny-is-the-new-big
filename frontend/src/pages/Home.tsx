import "../components/home/home.scss";
import Header from "../components/home/header/Header";
import Partner from "../components/home/partners/Partner";
import About from "../components/home/about/About";
import MultiImage from "../components/home/image-component/MultiImage";
import Service from "../components/home/services/Service";
import Location from "../components/home/location/Location";
import PeopleSays from "../components/home/peoplesays/PeopleSays";
import Contact from "../components/home/contact/Contact";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import { datas } from "../utils/multi-img-utils";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Partner />
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <About />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <MultiImage datas={datas} />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Service />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Location />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <PeopleSays />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Contact />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
