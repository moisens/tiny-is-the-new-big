import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { sliderPeople } from "../../../utils/utils";
import SlidePeople from "./SlidePeople";

const Slider = () => {
  return (
    <div className="peoplesSlider__container">
      <SlidePeople sliderPeople={sliderPeople} />
    </div>
  );
};

export default Slider;
