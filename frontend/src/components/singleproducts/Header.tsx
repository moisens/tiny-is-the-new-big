import "./singleproduct.scss";
import { CardProps } from "../../types/interface-Dataproducts";
import Images from "./Images";

const Header = ({ data, status, error }: CardProps) => {
  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "reject") throw error;

  return (
    <header className="head__container">
      {status === "resolved" &&
        data.map((house) => {
          const { image, country, ref } = house;
          return image.map((img) => {
            return <Images img={img} country={country} key={ref} />;
          });
        })}
    </header>
  );
};

export default Header;
