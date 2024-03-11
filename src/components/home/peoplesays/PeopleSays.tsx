import "./peoplesays.scss";
import Slider from "./Slider";
import { sliderPeople } from "../../../utils/utils";

const PeopleSays = () => {
  return (
    <section className="people__container">
      <div className="people__triangle1"></div>
      <h2 className="people__titleH2">What people say about us.</h2>
      <Slider sliderPeople={sliderPeople} />
      <div className="people__triangle2"></div>
    </section>
  );
};

export default PeopleSays;
