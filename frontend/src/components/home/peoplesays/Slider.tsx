import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";


const Slider = () => {
  return (
    <div className="peoplesSlider__container">
      <div className="slider__previous">
        <HiOutlineArrowNarrowLeft />
      </div>
      {/*Map from here*/}
      <div className="peopleSlide__content">
        <div className="peopleSlider__img">
          <div className="people__avatar">
            <img
              src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649899897/tiny%20is%20the%20new%20big/christopher-campbell-rDEOVtE7vOs-unsplash_vnbxj5.jpg"
              alt="avatar"
            />
          </div>
          <h4 className="people__person">Jackeline Snow</h4>
        </div>
        <div className="people__stars">
          <div className="star">
            <AiFillStar />
          </div>
          <div className="star">
            <AiFillStar />
          </div>
          <div className="star">
            <AiFillStar />
          </div>
          <div className="star">
            <AiFillStar />
          </div>
          <div className="star">
            <BsStarHalf />
          </div>
        </div>
        <p className="people__saying">
          Broker ipsum dolor sit amet, consectetuer noted architect elit. Modern
          interior commodo ligula eget dolor. Cum sociis panoramic views
          penatibus et magnis dis downtown loft.
        </p>
      </div>
      {/*end herE*/}
      <div className="slider__next">
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
};

export default Slider;
