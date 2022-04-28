import { IconProps } from "../../../types/Interface";

const IconsComponent = <TIcons,>(props: IconProps<TIcons>) => {
  const { iconsItems } = props;

  return (
    <>
      {iconsItems.map((stars) => (
        <div key={stars.id}>{stars.star}</div>
      ))}
    </>
  );
};

export default IconsComponent;
