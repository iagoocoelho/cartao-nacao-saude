import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./oursPackagesContainer.scss";

export const CardPackage = ({ data }) => {
  return (
    <div className="card shadow-lg rounded">
      <div className="card-body">
        <h5 className="card-title">{data.packageName}</h5>
        <div className="container-pack">
          <div className="container-price m-0">
            <span className="currency">R$</span>
            <span className="price">{data.firstPrice}</span>
            <span className="last-price">{data.lastPrice}</span>
          </div>
        </div>
        <p className="classe">Por mês</p>
        <h5 className="green-color">Características</h5>
        <ul className="card-description p-0">
          {!!data.features.length &&
            data.features.map((carac, i) => {
              if (carac.active) {
                return (
                  <li key={i}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      size={"lg"}
                      color={"#30c342"}
                      className="pe-2"
                    />
                    {carac.desc}
                  </li>
                );
              } else {
                return (
                  <li className="inactive" key={i}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      size={"lg"}
                      color={"#E55555"}
                      className="pe-3"
                    />
                    {carac.desc}
                  </li>
                );
              }
            })}
        </ul>

        <div className="text-center py-4">
          <Link
            className="btn-green"
            to={{
              pathname: data.href,
            }}
            state={{ packageId: data.packageId, vendor_cpf: data.vendor_cpf }}
          >
            Assinar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPackage;
