import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./oursPackagesContainer.scss";

export const CardPackage = ({ data }) => {
  return (
    <div class="card shadow-lg rounded">
      <div class="card-body">
        <h5 class="card-title">{data.packageName}</h5>
        <div className="container-pack">
          <div className="container-price m-0">
            <span className="currency">R$</span>
            <span className="price">{data.firstPrice}</span>
            <span className="last-price">{data.lastPrice}</span>
          </div>
        </div>
        <p className="classe">Por mês</p>
        <h5 className="green-color">Características</h5>
        <ul class="card-description p-0">
          {!!data.features.length &&
            data.features.map((carac) => {
              if (carac.active) {
                return (
                  <li>
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
                  <li className="inactive">
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
      </div>
    </div>
  );
};

export default CardPackage;
