import React from "react";
import { Link } from "react-router-dom";
import './ServiceContainer.css'

const ServiceContainer = (props) => {
  console.log(props.service);
  const { img, name } = props.service;
  return (
    <Link className="service-container" to="/destination">
      <div className="col mt-5 service-container">
        <div className="card h-100  border-0 shadow-lg">
          <img src={img} className="card-img-top img-fluid p-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center text-primary p-2">{name}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceContainer;
