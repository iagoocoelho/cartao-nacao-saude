import React, { useEffect, useRef, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "components/container/MainContainer";
import CardPackage from "./cardPackage";
import { connect } from "react-redux";
import * as packagesActions from "store/packages/actions";
import "./oursPackagesContainer.scss";

export const OursPackagesContainer = ({ packagesRequest, packagesState }) => {
  const { search } = useLocation();
  const [packages, setPackages] = useState([]);
  const [vendorId, setVendorId] = useState("");

  useMemo(() => {
    if (search) setVendorId(search);
  }, [search]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!packagesState.loading && !!packagesState.packages.length) {
      setPackages(packagesState.packages);
    }
  }, [packagesState.loading, packagesState.packages]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      packagesRequest();
    }
  }, [packagesRequest]);

  return (
    <div className="ours-packages" id="pacotes">
      <MainContainer>
        <div className="col">
          <h2 className="fs-2 title text-center">Nossos Pacotes</h2>

          <div className="packages-container">
            <CardPackage
              data={{
                packageName: "Individual",
                packageId: 1,
                vendor_cpf: vendorId,
                href: "individual",
                firstPrice: "24",
                lastPrice: ",90",
                features: [
                  {
                    desc: "Sem direito a dependentes/adicionais.",
                    active: false,
                  },
                  {
                    desc: "Telemedicina Einstein Conecta 24h",
                    active: true,
                  },
                  {
                    desc: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 30% em farmácias",
                    active: false,
                  },
                  {
                    desc: "Descontos de até 80% em consultas e exames",
                    active: false,
                  },
                  {
                    desc: "Concorra a R$5.000,00 todos os meses.",
                    active: true,
                  },
                  {
                    desc: "Sem rede credenciada",
                    active: false,
                  },
                ],
              }}
            />

            <CardPackage
              data={{
                packageName: "Individual Plus",
                packageId: 2,
                vendor_cpf: vendorId,
                href: "individual-plus",
                firstPrice: "37",
                lastPrice: ",90",
                features: [
                  {
                    desc: "Sem direito a dependentes/adicionais.",
                    active: false,
                  },
                  {
                    desc: "Telemedicina Einstein Conecta 24h",
                    active: true,
                  },
                  {
                    desc: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 30% em farmácias.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 80% em consultas e exames",
                    active: true,
                  },
                  {
                    desc: "Concorra a R$5.000,00 todos os meses.",
                    active: true,
                  },
                  {
                    desc: "Sem rede credenciada",
                    active: true,
                  },
                ],
              }}
            />

            <CardPackage
              data={{
                packageName: "Familiar",
                packageId: 3,
                vendor_cpf: vendorId,
                href: "familiar",
                firstPrice: "79",
                lastPrice: ",90",
                features: [
                  {
                    desc: "Com direito até 3 dependentes/adicionais.",
                    active: true,
                  },
                  {
                    desc: "Telemedicina Einstein Conecta 24h",
                    active: true,
                  },
                  {
                    desc: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 30% em farmácias.",
                    active: false,
                  },
                  {
                    desc: "Descontos de até 80% em consultas e exames",
                    active: false,
                  },
                  {
                    desc: "Concorra a R$5.000,00 todos os meses.",
                    active: true,
                  },
                  {
                    desc: "Sem rede credenciada",
                    active: false,
                  },
                ],
              }}
            />

            <CardPackage
              data={{
                packageName: "Familiar Plus",
                packageId: 4,
                vendor_cpf: vendorId,
                href: "familiar-plus",
                firstPrice: "79",
                lastPrice: ",90",
                features: [
                  {
                    desc: "Com direito até 3 dependentes/adicionais.",
                    active: true,
                  },
                  {
                    desc: "Telemedicina Einstein Conecta 24h",
                    active: true,
                  },
                  {
                    desc: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 30% em farmácias.",
                    active: true,
                  },
                  {
                    desc: "Descontos de até 80% em consultas e exames",
                    active: true,
                  },
                  {
                    desc: "Concorra a R$5.000,00 todos os meses.",
                    active: true,
                  },
                  {
                    desc: "Sem rede credenciada",
                    active: true,
                  },
                ],
              }}
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    packagesState: state.packages.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    packagesRequest: () => {
      dispatch(packagesActions.packagesRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OursPackagesContainer);
