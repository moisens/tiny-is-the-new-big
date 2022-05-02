import { ServiceProps } from "../../../types/Interface";
import Button from "../../button/Button";
import { useState } from "react";

const Tab = ({ services }: ServiceProps) => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <div className="services__btns__container">
        {services.map((service, index) => {
          const { id, title, icon } = service;
          return (
            <Button
              className={
                index === value
                  ? "services__btns activeTab__btn"
                  : "services__btns"
              }
              as="button"
              handleClick={() => setValue(index)}
              key={id}
            >
              <div className="btns__icons__container">{icon}</div>
              {title}
            </Button>
          );
        })}
      </div>
      <article className="services__tab__content">
        {services.map((service, index) => (
          <p
            className={
              index === value
                ? "services__tab__P activeTab__text"
                : "services__tab__P"
            }
            key={service.id}
          >
            {service.text}
          </p>
        ))}
      </article>
    </>
  );
};

export default Tab;
