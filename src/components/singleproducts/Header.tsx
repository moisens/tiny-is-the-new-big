import "./singleproduct.scss";
import Images from "./Images";
import { Housedata } from "../../types/interface-housedata";

const Header = ({ productData, status, error }: Housedata) => {
  const { product } = productData;

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;

  return (
    <header className="head__container">
      {status === "resolved" &&
        product?.image.map((image) => <Images img={image} key={image} />)}
    </header>
  );
};

export default Header;
