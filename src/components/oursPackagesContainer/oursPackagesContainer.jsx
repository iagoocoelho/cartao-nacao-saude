import React from "react";
import { MainContainer } from "components/container/MainContainer";
import CardPackage from "./cardPackage";
import "./oursPackagesContainer.scss";

export const OursPackagesContainer = () => {
  return (
    <div className="ours-packages" id="pacotes">
      <MainContainer>
        <div class="col">
          <h2 className="fs-2 title text-center">Nossos Pacotes</h2>

          <div className="packages-container">
            <CardPackage
              data={{
                packageName: "Individual",
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

export default OursPackagesContainer;
