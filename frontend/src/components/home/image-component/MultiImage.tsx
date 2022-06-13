import "./multiImg.scss";
import { dataImages } from "../../../types/interface-MultiImg";

const MultiImage = ({ datas }: dataImages) => {

  return (
    <div className="image__container">
      {datas.map((data) => {
        const { id, image } = data;//Add name in the utils file and types file!!!
        return (
          <div className="singleImg__container" key={id}>
            <img
              src={image}
              alt="img-1"
              title="name"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MultiImage;
