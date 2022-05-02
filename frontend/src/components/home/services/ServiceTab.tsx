import { ServiceProps } from "../../../types/Interface";
import Button from "../../button/Button";

const Tab = ({ services }: ServiceProps) => {
  return (
    <>
      <div className="services__btns__container">
        {services.map((service) => {
          const { id, title, icon } = service;
          return (
            <Button className="services__btns" as="button" handleClick={() => console.log('ff')
            } key={id}>
              <div className="btns__icons__container">{icon}</div>
              {title}
            </Button>
          );
        })}
      </div>
      <div className="services__tab__content">
        {services.map((service) => (
          <p className="services__tab__P" key={service.id}>
            {service.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default Tab;
