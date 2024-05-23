/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServicesCard = ({ serviceDetails }) => {
  return (
    <li>
      <Link to={serviceDetails.linkTo}>
        <img
          src={serviceDetails.imageUrl}
          className="bg-blue-900 rounded-md mb-3"
        />
        <h3 className="text-white font-semibold">{serviceDetails.title}</h3>
        <p className="text-white">
          <span className="text-blue-500">Avg Price: </span>{" "}
          {serviceDetails.avgPrice}
        </p>
      </Link>
    </li>
  );
};

export default ServicesCard;
