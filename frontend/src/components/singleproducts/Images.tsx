interface Img {
  img: string;
  country: string;
}



const Images = ({ img, country }: Img) => {
  return (
    <div className="img__container">
      <img src={img} alt={country} title={country} />
    </div>
  );
};

export default Images;
