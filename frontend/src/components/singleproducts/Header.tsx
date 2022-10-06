import "./singleproduct.scss";
import Images from "./Images";
import { Housedata } from "../../types/interface-housedata";
import { useParams } from "react-router-dom";

const Header = ({ productData, statusType }: Housedata) => {
  const { products } = productData;
  const { _id } = useParams();
  const singleTinyHouse = products?.find(product => product._id === _id)
  console.log("Single", singleTinyHouse?.image);
  
  
  
  if (statusType === "pending") return <h2>Loading...</h2>;
  if (statusType === "rejected") throw new Error(statusType);

  return (
    <header className="head__container">
      {singleTinyHouse?.image.map(image => (
        <Images img={image} key={image} />
      ))}
    </header>
  );
};

export default Header;
