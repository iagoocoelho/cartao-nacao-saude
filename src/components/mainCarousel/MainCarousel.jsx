import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./mainCarousel.scss";
import logoEinstein from "assets/img/logo-einstein.png";
import portoSeguroLogo from "assets/img/porto-seguro-logo.png";

export const MainCarousel = () => {
  return (
    <div className="main-carousel">
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="image doctor" />
          <div className="image overlay" />
          <Carousel.Caption>
            <h3>Cuidado e atenção para a saúde da Nação Brasileira</h3>
            <p>
              Benefícios e descontos em consultas, exames e muito mais. Venha
              conhecer.
            </p>
            <button className="btn-green-hover-blue shadow-lg">
              Saiba Mais
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image einsteinConecta" />
          <div className="image overlay" />
          <Carousel.Caption>
            <img src={logoEinstein} alt="" />
            <p>
              Orientação médica on-line 24 horas por dia, direto no seu celular,
              tablet ou computador
            </p>
            <button className="btn-green-hover-blue shadow-lg">
              Saiba Mais
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image doctorBlood" />
          <div className="image overlay" />
          <Carousel.Caption>
            <h3>Consultas, Exames e Rede de Farmácias</h3>
            <p>
              Consultas presenciais, exames laboratoriais e farmácias com até
              80% de desconto
            </p>
            <button className="btn-green-hover-blue shadow-lg">
              Saiba Mais
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image seguros" />
          <div className="image overlay" />
          <Carousel.Caption>
            <img src={portoSeguroLogo} alt="" />
            <p>Seguros Assistenciais</p>
            <button className="btn-green-hover-blue shadow-lg">
              Saiba Mais
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image educacaoCruzeiroSul" />
          <div className="image overlay" />
          <Carousel.Caption>
            <h3 className="fw-bold">
              Educação com descontos especiais Cruzeiro do Sul
            </h3>
            <button className="btn-green-hover-blue shadow-lg">
              Saiba Mais
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container-pack">
        <p className="text f-subtitle">Pacotes Mensais a partir de:</p>

        <div className="container-price m-0">
          <span className="currency">R$</span>
          <span className="price">24</span>
          <span className="last-price">,90</span>
          <p className="classe">Individual</p>
        </div>

        <div className="container-price m-0">
          <span className="currency">R$</span>
          <span className="price">79</span>
          <span className="last-price">,90</span>
          <p className="classe">Familiar</p>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
