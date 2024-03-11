import { IconProps } from "../../../types/Interface";

const IconsComponent = (props: IconProps) => {
  const { iconsItems } = props;

  return (
    <>
      {iconsItems.map((stars) => (
        <div key={stars.id} className="star">{stars.star}</div>
      ))}
    </>
  );
};

export default IconsComponent;
