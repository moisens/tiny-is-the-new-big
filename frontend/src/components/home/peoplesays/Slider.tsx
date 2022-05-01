import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { sliderPeople } from "../../../utils/utils";
import SlidePeople from "./SlidePeople";

const Slider = () => {
  return (
    <div className="peoplesSlider__container">
      <div className="slider__previous">
        <HiOutlineArrowNarrowLeft />
      </div>
      <SlidePeople sliderPeople={sliderPeople} />
      <div className="slider__next">
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
};

export default Slider;
