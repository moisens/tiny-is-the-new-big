import "./singleproduct.scss";
import Images from "./Images";
import { Housedata } from "../../types/interface-housedata";

const Header = ({ productData, statusType }: Housedata) => {
  const { product } = productData;

  if (statusType === "pending") return <h2>Loading...</h2>;
  if (statusType === "rejected") throw new Error(statusType);

  return (
    <header className="head__container">
      {statusType === "resolved" && product?.image.map(image => (
        <Images img={image} key={image} />
      ))}
    </header>
  );
};

export default Header;
