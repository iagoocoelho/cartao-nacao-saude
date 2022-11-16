import React from "react";
import { MainContainer } from "components/container/MainContainer";

import {
  IconBedHospital,
  IconTooth,
  IconExamHospital,
  IconBrain,
  IconNurse,
  IconTeledicine,
  IconLifeInsurance,
  IconFuneral,
  IconLife,
  IconPharmacy,
  IconMedicalReport,
} from "assets/svg";
import Carousel from "react-multi-carousel";
import "./benefitsContainer.scss";

export const BenefitsContainer = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="benefits">
      <MainContainer>
        <div className="row text-center">
          <h2 className="fs-2 title">
            Conheça todos <span>nossos benefícios</span>
          </h2>
        </div>

        <Carousel
          swipeable
          ssr
          itemClass="image-item"
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay
          autoPlaySpeed={6000}
          rewind
        >
          <div className="card">
            <div className="card-body">
              <IconTeledicine width="60px" height="60px" />
              <h5 className="card-title">Telemedicina</h5>
              <p className="card-text">
                Orientação médica on-line 24 horas por dia, direto no seu
                celular, tablet ou computador.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconLifeInsurance width="60px" height="60px" />
              <h5 className="card-title">Seguro de Vida</h5>
              <p className="card-text">
                R$5.500,00 para um dos momentos mais delicados.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconFuneral width="60px" height="60px" />
              <h5 className="card-title">Auxílio Funeral</h5>
              <p className="card-text">
                Em caso de falecimento do beneficiário auxílio funerário no
                valor de R$5.000,00. Além de cesta básica no valor de R$1.600,00
                pagos em 4 parcelas de R$400,00
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconLife width="60px" height="60px" />
              <h5 className="card-title">Seguro Acidentes Pessoais</h5>
              <p className="card-text">
                Seguro de acidentes pessoais no valor de R$5.000,00 após
                confirmação de incapacidade e invalidez em exercer sua função ou
                óbito.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconPharmacy width="60px" height="60px" />
              <h5 className="card-title">Descontos em farmácias</h5>
              <p className="card-text">
                Conte com 2.000 lojas de farmácia com descontos de 5% a 30% em
                medicamentos e perfumaria.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconMedicalReport width="60px" height="60px" />
              <h5 className="card-title">Especialidades Médicas</h5>
              <p className="card-text">
                Todas as especialidades médicas para realização de consultas
                presenciais e online.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconNurse width="60px" height="60px" />
              <h5 className="card-title">Análises Clínicas</h5>
              <p className="card-text">
                Mais de 5 mil exames laboratoriais de análises clínicas como
                hemograma, vitaminas, colesterol, HIV e outros.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconBedHospital width="60px" height="60px" />
              <h5 className="card-title">Procedimentos Ambulatoriais</h5>
              <p className="card-text">
                Procedimentos realizados em ambulatório como exérese,
                histerossalpingografia, endoscopia, cirurgias e outros.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconTooth width="60px" height="60px" />
              <h5 className="card-title">Odontologia</h5>
              <p className="card-text">
                Cirurgiões dentistas e especialistas. Tratamentos odontológicos
                de baixa e alta complexidade, próteses, preventivos e estéticos.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconExamHospital width="60px" height="60px" />
              <h5 className="card-title">Exames de Imagem</h5>
              <p className="card-text">
                Exames de imagem como ultrassom, tomografia, ressonância,
                mamografia, Raio-X, densitometria óssea e outros.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <IconBrain width="60px" height="60px" />
              <h5 className="card-title">Psicologia</h5>
              <p className="card-text">
                Consultas e sessões de terapia com profissionais de diversas
                abordagens para o cuidado da saúde mental.
              </p>
            </div>
          </div>
        </Carousel>
      </MainContainer>
    </div>
  );
};

export default BenefitsContainer;
