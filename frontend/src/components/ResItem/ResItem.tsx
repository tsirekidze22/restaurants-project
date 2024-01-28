import React from "react";
import "./ResItem.scss";

interface Restaurant {
  name: string;
  address: string;
  tags: string[];
  status: string;
  creationDate: Date;
  hours: {
    open: string;
    close: string;
  };
  rate: string;
  imageSrc: string;
  description: string;
}

type Props = {
  res: Restaurant;
};

const ResItem: React.FC<Props> = ({ res }) => {
  return (
    <li key={res.name} className="d-flex flex-column flex-md-row res-item">
      <div
        className="col-12 col-md-5 p-3 res-img-container"
        style={{
          backgroundImage: `url(${res.imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-inline-flex align-items-center img-tag col-auto gap-2 bg-light-red px-3 py-2">
          <img src="/assets/images/star.svg" alt="star" />
          <span>{res.rate}</span>
        </div>
      </div>
      <div className="text-section px-4 py-3 col-12 col-md-7">
        <h3>{res.name}</h3>
        <ul className="py-2">
          {res.tags.map((tag, index) => (
            <li key={tag} className="d-inline-flex gap-1">
              <span className="res-tag">{tag}</span>
              {index < res.tags.length - 1 && (
                <span className="me-1">&bull;</span>
              )}
            </li>
          ))}
        </ul>
        <p className="desc text-secondary py-3">{res.description}</p>
        <div className="d-flex py-2 align-items-center justify-content-between">
          {`${res.hours.open} - ${res.hours.close}`}
          <h4
            className="status"
            style={{
              color: res.status === "open" ? "#5EAE53" : "salmon",
            }}
          >
            {res.status}
          </h4>
        </div>

        <div className="address d-flex align-items-center gap-2">
          {res.address}
          <img src="/assets/images/address-icon.svg" alt="working" />
        </div>
      </div>
    </li>
  );
};

export default ResItem;
