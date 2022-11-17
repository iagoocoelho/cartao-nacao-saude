import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { slugfy } from "common/utils";
import "./oursPackagesContainer.scss";

export const CardPackage = ({ data }) => {
  return (
    <Card className="shadow-lg rounded">
      <Card.Body>
        <Card.Title>{data.description}</Card.Title>
        <div className="container-pack">
          <div className="container-price m-0">
            <span className="currency">R$</span>
            <span className="price">
              {
                data.price
                  .toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    currency: "BRL",
                  })
                  .split(",")[0]
              }
            </span>
            <span className="last-price">
              {
                data.price
                  .toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    currency: "BRL",
                  })
                  .split(",")[1]
              }
            </span>
          </div>
        </div>
        <p className="classe">Por mês</p>
        <h5 className="green-color">Características</h5>
        <ul className="card-description p-0">
          {data.package_details.map((carac) => {
            if (carac.included) {
              return (
                <li key={carac.id}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size={"lg"}
                    color={"#30c342"}
                    className="pe-2"
                  />
                  {carac.description}
                </li>
              );
            } else {
              return (
                <li className="inactive" key={carac.id}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={"lg"}
                    color={"#E55555"}
                    className="pe-3"
                  />
                  {carac.description}
                </li>
              );
            }
          })}
        </ul>

        <div className="text-center py-4">
          <Link
            className="btn-green"
            to={{
              pathname: slugfy(data.description),
            }}
            state={{ packageId: data.id, vendor_cpf: data.vendor_cpf }}
          >
            Assinar
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPackage;
