import { IoIosQrScanner } from "react-icons/io";
import { MdOutlineBed, MdOutlineShower } from "react-icons/md";
import React from "react"

const houseConfiguration = (
  size: number | undefined,
  bedroom: number | undefined,
  bathroom: number | undefined
) => {
  return (
    <React.Fragment>
      <div className="card__item">
        <IoIosQrScanner size="1.4rem" />
        <p className="card__P">{size} sqft</p>
      </div>
      <div className="card__item">
        <MdOutlineBed size="1.4rem" />
        <p className="card__P">{bedroom}</p>
      </div>
      <div className="card__item">
        <MdOutlineShower size="1.4rem" />
        <p className="card__P">{bathroom}</p>
      </div>
    </React.Fragment>
  );
};

export default houseConfiguration;