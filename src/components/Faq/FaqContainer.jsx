import React from "react";
import { MainContainer } from "components/container/MainContainer";
import "./faq.scss";

export const FaqContainer = () => {
  return (
    <div className="faq">
      <MainContainer>
        <div className="col px-2 text-center">
          <h2 className="fs-2 title">FAQ</h2>
        </div>
        <div className="col">
          <ul className="nav nav-pills nav-fill" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active fw-bold"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Rede <span className="green-color">Credenciada</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Tele<span className="green-color">Medicina</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link green-color"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Seguros
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <div className="accordion" id="accordion-rede-credenciada">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-1"
                      aria-expanded="false"
                      aria-controls="question-rede-1"
                    >
                      O CART??O NA????O SA??DE ?? um plano de sa??de?
                    </button>
                  </h2>
                  <div
                    id="question-rede-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-1"
                  >
                    <div className="accordion-body">
                      O CART??O NA????O SA??DE n??o ?? um plano de sa??de convencional.
                      Somos um Sistema de Sa??de, com teleatendimento, seguros e
                      com credenciamento focado em consultas e exames com
                      descontos. Voc?? paga o que utiliza, por??m, um valor mais
                      acess??vel. Al??m disso, pode contar com uma equipe de
                      atendimento humanizada para solucionar d??vidas e encontrar
                      a melhor op????o na hora de cuidar da sa??de.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-2"
                      aria-expanded="false"
                      aria-controls="question-rede-2"
                    >
                      Como proceder no dia da consulta ou exame?
                    </button>
                  </h2>
                  <div
                    id="question-rede-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-2"
                  >
                    <div className="accordion-body">
                      <p>
                        1. Tenha em m??os o cart??o virtual de identifica????o
                        dentro do prazo de validade, informe que utilizar?? a
                        rede/conv??nio NIPOMED CONSULTA.
                      </p>
                      <p>
                        2. No dia agendado, o pagamento da consulta, exame ou
                        procedimento deve ser realizado diretamente para o
                        local. A forma de pagamento varia de acordo com o
                        estabelecimento escolhido.
                      </p>
                      <p>
                        3. Agende o retorno Em caso de consulta, ?? necess??rio
                        atentar para o prazo de retorno (alguns locais t??m prazo
                        de 10, 15, 20 ou 30 dias corridos). O retorno n??o ??
                        cobrado, salvo casos que tenham sido previamente
                        informados.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-3"
                      aria-expanded="false"
                      aria-controls="question-rede-3"
                    >
                      Quais especialidades est??o dispon??veis em nossa REDE
                      CREDENCIADA?
                    </button>
                  </h2>
                  <div
                    id="question-rede-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-3"
                  >
                    <div className="accordion-body">
                      <p>
                        Nossa REDE CREDENCIADA n??o tem restri????o de utiliza????o,
                        desde que haja disponibilidade de rede contratada na
                        regi??o, todo associado poder?? utilizar rede privada de
                        atendimento com valores mais acess??veis.
                      </p>

                      <p className="fw-bold">
                        *Consultar disponibilidade das especialidades e
                        procedimentos na sua regi??o.
                      </p>

                      <p className="fw-bold">Exames:</p>

                      <ul>
                        <li>An??lises Cl??nicas</li>
                        <li>Ultrassom</li>
                        <li>Doppler</li>
                        <li>Resson??ncia Magn??tica</li>
                        <li>Tomografia Computadorizada</li>
                        <li>Testes Al??rgicos</li>
                        <li>Exames Cardiol??gicos</li>
                        <li>Exames Ginecol??gicos</li>
                        <li>Exames Oftalmol??gicos</li>
                        <li>Exames Neurol??gicos</li>
                        <li>Exames Auditivos</li>
                        <li>Exames Gen??ticos</li>
                        <li>Endoscopia</li>
                        <li>Colonoscopia</li>
                        <li>Mamografia</li>
                        <li>Densitometria ??ssea</li>
                        <li>Raio-X</li>
                        <li>Panor??mica</li>
                        <li>Bi??psias</li>
                        <li>Covid-19 Detec????o e P??s Vacina</li>
                        <li>Medicina Nuclear</li>
                        <li>Bioimped??nciometria</li>
                        <li>Outros Procedimentos:</li>
                        <li>
                          Procedimentos que podem ser realizados em n??vel
                          ambulatorial (na pr??pria cl??nica ou laborat??rio), como
                          Histerossalpingografia, Ex??rese, Implantes dent??rios,
                          entre outros.
                        </li>
                      </ul>

                      <p className="fw-bold">Consultas M??dicas:</p>

                      <ul>
                        <li>Acupuntura</li>
                        <li>Alergia e Imunologia</li>
                        <li>Angiologia e Vascular</li>
                        <li>Cardiologia</li>
                        <li>Cirurgia Geral (apenas consulta)</li>
                        <li>Cl??nica M??dica</li>
                        <li>Coloproctologia</li>
                        <li>Dermatologia</li>
                        <li>Endocrinologia e Metabologia</li>
                        <li>Gastroenterologia</li>
                        <li>Geriatria</li>
                        <li>Ginecologia e Obstetr??cia</li>
                        <li>Hematologia e Hemoterapia</li>
                        <li>Homeopatia</li>
                        <li>Infectologia</li>
                        <li>Mastologia</li>
                        <li>Nefrologia</li>
                        <li>Neurologia</li>
                        <li>Nutrologia</li>
                        <li>Oftalmologia</li>
                        <li>Ortopedia e Traumatologia</li>
                        <li>Otorrinolaringologia</li>
                        <li>Pediatria</li>
                        <li>Pneumologia</li>
                        <li>Psiquiatria</li>
                        <li>Reumatologia</li>
                        <li>Urologia</li>
                      </ul>

                      <p className="fw-bold">Odontologia:</p>

                      <ul>
                        <li>Cl??nico Geral</li>
                        <li>Dent??stica</li>
                        <li>Periodontia</li>
                        <li>Ortodontia</li>
                        <li>Endodontia</li>
                        <li>Odontopediatria</li>
                        <li>Implantodontia</li>
                      </ul>

                      <p className="fw-bold">Outras especialidades:</p>
                      <ul>
                        <li>Psicologia diversas abordagens</li>
                        <li>Nutri????o</li>
                        <li>Fisioterapia</li>
                        <li>RGP</li>
                        <li>Fonoaudiologia</li>
                        <li>Ozonioterapia</li>
                        <li>Outros servi??os</li>
                        <li>Home Care</li>
                        <li>Coleta Domiciliar</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-4"
                      aria-expanded="false"
                      aria-controls="question-rede-4"
                    >
                      Os pre??os das consultas e procedimentos s??o iguais em
                      todos os locais de atendimento?
                    </button>
                  </h2>
                  <div
                    id="question-rede-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-4"
                  >
                    <div className="accordion-body">
                      <p>
                        N??o. Os valores e formas de pagamento variam de acordo
                        com o local de atendimento escolhido.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-5"
                      aria-expanded="false"
                      aria-controls="question-rede-5"
                    >
                      Qual o valor de consulta?
                    </button>
                  </h2>
                  <div
                    id="question-rede-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-5"
                  >
                    <div className="accordion-body">
                      <p>
                        O valor das consultas varia por regi??o, estabelecimento
                        e especialidade, por??m sempre com valor mais acess??vel
                        que o particular. Na cidade de S??o Paulo, por exemplo,
                        as consultas com Cl??nico Geral iniciam em m??dia a partir
                        de R$60,00.
                      </p>
                      <p>
                        A maioria das consultas tem direito a retorno de 15, 20
                        ou 30 dias.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-6"
                      aria-expanded="false"
                      aria-controls="question-rede-6"
                    >
                      Qual a forma de pagamento das consultas ou exames?
                    </button>
                  </h2>
                  <div
                    id="question-rede-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-6"
                  >
                    <div className="accordion-body">
                      <p>
                        O pagamento varia de acordo com o estabelecimento
                        escolhido podendo ser: Dinheiro, Cart??o de D??bito,
                        Cart??o de Cr??dito, Cheque, TED, PIX. Alguns
                        estabelecimentos tamb??m oferecem a op????o de
                        parcelamento. Esta decis??o fica ?? crit??rio do
                        estabelecimento de sa??de escolhido, por este motivo, ??
                        importante confirmar esta informa????o no ato do
                        agendamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-7"
                      aria-expanded="false"
                      aria-controls="question-rede-7"
                    >
                      Existe algum tipo de car??ncia para exames especiais?
                    </button>
                  </h2>
                  <div
                    id="question-rede-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-7"
                  >
                    <div className="accordion-body">
                      <p>
                        Diferente do plano de sa??de, n??o existe car??ncia para
                        nenhum tipo de exame. Voc?? pode utilizar todos os
                        benef??cios e agendar qualquer exame dispon??vel na rede
                        credenciada de imediato, sem restri????es.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-8"
                      aria-expanded="false"
                      aria-controls="question-rede-8"
                    >
                      Onde posso utilizar a REDE CREDENCIADA?
                    </button>
                  </h2>
                  <div
                    id="question-rede-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-8"
                  >
                    <div className="accordion-body">
                      <p>
                        A rede de estabelecimentos de sa??de ?? ampla e pode
                        abranger todo territ??rio nacional de acordo com o fluxo
                        de clientes em cada regi??o.
                      </p>
                      <p>
                        No entanto, ?? importante validar a disponibilidade de
                        rede credenciada e especialidades que ir?? utilizar na
                        sua cidade e proximidades. Caso n??o encontre algum
                        estabelecimento de sa??de na proximidade, ?? poss??vel
                        indicar cl??nicas e laborat??rios para futuro
                        credenciamento (n??o h?? garantias de credenciamento,
                        por??m ser?? analisado pelo setor respons??vel).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-9"
                      aria-expanded="false"
                      aria-controls="question-rede-9"
                    >
                      Como posso saber os valores que vou pagar na consulta ou
                      exame?
                    </button>
                  </h2>
                  <div
                    id="question-rede-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-9"
                  >
                    <div className="accordion-body">
                      <p>
                        ?? poss??vel consultar os valores de consulta, exames e
                        procedimentos solicitando atendimento atrav??s do chat ou
                        formul??rio dentro do aplicativo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-rede-10">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-rede-10"
                      aria-expanded="false"
                      aria-controls="question-rede-10"
                    >
                      ?? preciso ter o pedido m??dico para agendar exames?
                    </button>
                  </h2>
                  <div
                    id="question-rede-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-10"
                  >
                    <div className="accordion-body">
                      <p>
                        Sim. O agendamento de exames ser?? realizado apenas
                        mediante ao envio do pedido m??dico, pois ser?? exigido
                        pelo laborat??rio. Ter o pedido m??dico ?? importante para
                        verificar se o exame or??ado ?? realmente o mesmo que o
                        m??dico solicitou. Voc?? pode solicitar o seu pedido de
                        exame atrav??s da nossa telemedicina. Copyright @ 2022 -
                        Cart??o Na????o Sa??de - Todos os direitos reservados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              <div className="accordion" id="accordion-telemedicina">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-1"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-1"
                    >
                      Como s??o feitas as avalia????es m??dicas pelo Einstein
                      Conecta?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-1"
                  >
                    <div className="accordion-body">
                      Todas as avalia????es s??o realizadas por videochamada,
                      atrav??s da internet, de forma que tanto m??dico quanto
                      paciente veem um ao outro ao vivo, podendo interagir
                      livremente como em uma consulta face a face. Para o exame
                      f??sico, o m??dico observar?? durante a consulta, atrav??s da
                      c??mera, o estado geral, o padr??o respirat??rio, sinais de
                      dor e desconforto, al??m de poder avaliar garganta, olhos e
                      les??es de pele. O m??dico tamb??m poder?? pedir ao paciente
                      para realizar determinadas manobras que ajudem a elucidar
                      melhor o diagn??stico e otimizar a conduta. No caso de
                      atendimentos pedi??tricos, o m??dico poder?? pedir o aux??lio
                      do respons??vel para obter outros dados importantes na
                      avalia????o do exame f??sico. Ele poder?? orientar o
                      respons??vel a auxili??-lo na avalia????o de les??es de pele
                      (textura, descama????o, calor local), na avalia????o da dor em
                      algum membro ou regi??o do corpo, na avalia????o da perfus??o
                      da pele, na contagem da frequ??ncia respirat??ria ??? n??mero
                      de respira????es por minuto ??? entre outros.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-2"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-2"
                    >
                      Como ?? feito o diagn??stico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-2"
                  >
                    <div className="accordion-body">
                      <p>
                        Os dados obtidos pelo m??dico durante a avalia????o
                        possibilitar??o a constru????o de uma hip??tese diagn??stica,
                        embasada nos mais recentes protocolos cl??nicos nacionais
                        e internacionais, devidamente adaptados para as
                        avalia????es por telemedicina. Todos os atendimentos geram
                        um relat??rio completo, contendo a hip??tese diagn??stica e
                        orienta????es m??dicas personalizadas, que ser??o enviados
                        ao paciente por e-mail. Caso seja pertinente ?? situa????o,
                        poder??o ser encaminhadas tamb??m receitas m??dicas ou
                        atestados.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-3"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-3"
                    >
                      E se o m??dico n??o conseguir fazer a avalia????o a dist??ncia?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-3"
                  >
                    <div className="accordion-body">
                      <p>
                        Em mais de 80% dos casos a avalia????o por telemedicina
                        pelo Einstein Conecta ?? suficiente para uma orienta????o
                        m??dica segura. No entanto, quando ?? identificado um
                        sinal de gravidade que indique que a consulta por
                        telemedicina n??o ?? segura ou houver a necessidade de
                        avalia????o f??sica presencial para um diagn??stico mais
                        preciso, o paciente ser?? orientado a procurar um
                        atendimento presencial. Mesmo nestes casos um relat??rio,
                        explicando as raz??es do encaminhamento, ?? enviado ao
                        paciente, que pode levar ao local de atendimento para
                        otimizar a continuidade do cuidado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-4"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-4"
                    >
                      Quem realiza os atendimentos do Einstein Conecta?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-4"
                  >
                    <div className="accordion-body">
                      <p>
                        O paciente ser?? atendido pela equipe m??dica com a
                        qualidade Einstein, com ampla experi??ncia em atendimento
                        de emerg??ncias, treinada em atendimento por telemedicina
                        e nos protocolos Einstein de atendimento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-5"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-5"
                    >
                      Einstein Conecta ?? um tipo de conv??nio m??dico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-5"
                  >
                    <div className="accordion-body">
                      <p>
                        N??o, o Einstein Conecta ?? um servi??o do Centro de
                        Telemedicina do Hospital Israelita Albert Einstein.
                        Realizamos orienta????o m??dica on-line para casos de baixa
                        complexidade como resfriados, dor nas costas, infec????o
                        urin??ria, dor de cabe??a, diarreia, entre outros.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-6"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-6"
                    >
                      A realiza????o de exames est?? inclusa na contrata????o?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-6"
                  >
                    <div className="accordion-body">
                      <p>
                        N??o, a contrata????o do Einstein Conecta d?? direito a ter
                        acesso a orienta????es, mas n??o est??o inclusos exames e
                        nem a solicita????o dos mesmos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-7"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-7"
                    >
                      Como funciona o atendimento?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-7"
                  >
                    <div className="accordion-body">
                      <p className="fw-bold">O atendimento ?? rapido e f??cil</p>
                      <ul>
                        <li>
                          Acesse o Einstein Conecta pelo link
                          ???telemedicina.einstein.br??? ou pelo aplicativo
                          ???Einstein Conecta??? , dispon??vel nas lojas App Store ou
                          Play Store
                        </li>
                        <li>
                          <strong>2 ???</strong> Na ??rea de login, digite o seu
                          e-mail e senha cadastrados e clique em ???Enviar???. Obs.:
                          no site, ?? preciso clicar no bot??o ???Login??? para
                          acessar a ??rea.
                        </li>
                        <li>
                          <strong>3 ???</strong> Clique no bot??o ???iniciar o
                          atendimento???
                        </li>
                        <li>
                          <strong>4 ???</strong> Selecione a pessoa (titular ou
                          dependente) para a qual deseja atendimento
                        </li>
                        <li>
                          <strong>5 ???</strong> Clique no bot??o ???Iniciar
                          atendimento??? e pronto: em instantes voc?? ser??
                          atendido.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-8"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-8"
                    >
                      Posso ser atendido sempre pelo mesmo m??dico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-8"
                  >
                    <div className="accordion-body">
                      <p>
                        N??o. O atendimento do Einstein Conecta ?? o mesmo de um
                        pronto atendimento, ou seja, voc?? ser?? atendido pelo
                        primeiro m??dico dispon??vel.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-9"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-9"
                    >
                      Devo utilizar o Einstein Conecta em casos de emerg??ncia?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-9"
                  >
                    <div className="accordion-body">
                      <p>
                        Sempre que houver algum dos sintomas abaixo,
                        recomendamos que o atendimento seja feito em um pronto
                        atendimento presencial de sua rede credenciada ou que
                        ligue para o 192 ou 193:
                      </p>

                      <ul className="list-style-dot">
                        <li>
                          Falta de ar, dor no peito, palpita????es ou arritmias;
                        </li>
                        <li>Convuls??es ou altera????es neurol??gicas;</li>
                        <li>Perda de consci??ncia/desmaio;</li>
                        <li>
                          Acidentes automobil??sticos, ferimentos cortantes ou
                          fraturas;
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-10">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-10"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-10"
                    >
                      Estou fora do Brasil, posso usar o servi??o?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-10"
                  >
                    <div className="accordion-body">
                      <p>
                        Sim, voc?? pode utilizar os servi??os do Conecta a partir
                        de qualquer lugar do mundo com acesso a banda larga de
                        internet (exceto regi??es com controle de acesso
                        governamental)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-11">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-11"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-11"
                    >
                      A receita m??dica tem validade em outros pa??ses?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-11"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-11"
                  >
                    <div className="accordion-body">
                      <p>
                        N??o. A receita m??dica tem validade apenas em territ??rio
                        brasileiro. No entanto, nossa equipe est?? preparada para
                        orientar a compra de medicamentos sintom??ticos que
                        estejam dispon??veis na prateleira de farm??cias em outros
                        pa??ses, sem necessidade de receita m??dica. Por outro
                        lado, caso seja necess??ria uma receita m??dica,
                        recomendamos que procure um servi??o m??dico local ou
                        consulte seu seguro sa??de para outras op????es.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-12">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-12"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-12"
                    >
                      O servi??o ?? compat??vel com quais sistemas operacionais?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-12"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-12"
                  >
                    <div className="accordion-body">
                      <p>
                        O aplicativo do Einstein Conecta est?? dispon??vel para os
                        sistemas operacionais Android e iOS. Alternativamente, o
                        sistema no site do Einstein Conecta ?? uma aplica????o web
                        que funciona nos navegadores Chrome ou Firefox, ou seja,
                        n??o depende do sistema operacional (Windows, Linux,
                        etc???)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-13">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-13"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-13"
                    >
                      E se a minha conex??o com a internet cair durante a
                      consulta?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-13"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-13"
                  >
                    <div className="accordion-body">
                      <p>
                        Assim que restabelecer a sua conex??o, reinicie o fluxo
                        de atendimento para retomar a consulta.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-14">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-14"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-14"
                    >
                      O que devo fazer se a imagem da minha c??mera n??o estiver
                      funcionando?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-14"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-14"
                  >
                    <div className="accordion-body">
                      <p>
                        Voc?? pode verificar se ela n??o est?? somente desativada
                        na tela da videoconfer??ncia, tocando/clicando no bot??o
                        com o desenho de uma c??mera. Caso n??o resolva, entre em
                        contato com o suporte t??cnico pelo telefone (11)
                        2151-7690.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-telemedicina-15">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-telemedicina-15"
                      aria-expanded="false"
                      aria-controls="question-telemedicina-15"
                    >
                      Onde ficam armazenados os dados do meu prontu??rio
                      eletr??nico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-15"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-15"
                  >
                    <div className="accordion-body">
                      <p>
                        Os prontu??rios eletr??nicos s??o armazenados nos
                        servidores do Einstein de forma segura, conforme
                        determina????o legal, garantindo a privacidade necess??ria
                        ao acesso dos dados m??dicos dos pacientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex="0"
            >
              <div className="accordion" id="accordion-seguros">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-seguros-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-seguros-1"
                      aria-expanded="false"
                      aria-controls="question-seguros-1"
                    >
                      Quais s??o os seguros que estou contratando?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-1"
                  >
                    <div className="accordion-body">
                      Assist??ncia Funer??ria, Seguro de vida, t??tulo de
                      captaliza????o, acidentes pessoais, no valor de R$5.500,00,
                      tudo isso incluso no seu pacote.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-seguros-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-seguros-2"
                      aria-expanded="false"
                      aria-controls="question-seguros-2"
                    >
                      Como fa??o para solicitar o recebimento do seguro?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-2"
                  >
                    <div className="accordion-body">
                      <p>
                        No momento que voc?? mais precisar ?? s?? entrar em contato
                        com nossa central na porto seguro atrav??s do n??mero 0800
                        703 0377.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-seguros-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-seguros-3"
                      aria-expanded="false"
                      aria-controls="question-seguros-3"
                    >
                      Se eu ganhar o sorteio como fa??o para receber os
                      R$5.500,00 pr??miado?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-3"
                  >
                    <div className="accordion-body">
                      <p>
                        S??o 5 chances por m??s de ganhar o sorteio. Se o seu cpf
                        for o sorteado voc?? receber?? uma liga????o da Porto Seguro
                        que far?? o procedimento necess??rio para depositar o
                        pagamento de R$5.500,00 direto em sua conta banc??ria.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-seguros-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-seguros-4"
                      aria-expanded="false"
                      aria-controls="question-seguros-4"
                    >
                      Qual a idade limite para os meus direitos no meu pacote de
                      seguros assitenciais?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-4"
                  >
                    <div className="accordion-body">
                      <p>
                        O limite de idade para aderir a este contrato para
                        efeitos de recebimento dos benef??cios de seguro de
                        acidentes pessoais, ux??lio cesta b??sica e aux??lio
                        Funeral ?? de 74 (setenta e quatro) anos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="questions-seguros-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#question-seguros-5"
                      aria-expanded="false"
                      aria-controls="question-seguros-5"
                    >
                      Qual a garantia que eu tenho sobre meu pacote de seguros
                      assist??nciais contratados?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-5"
                  >
                    <div className="accordion-body">
                      <p>
                        *O seguro de acidentes pessoais, cesta b??sica, aux??lio
                        funeral e t??tulo de capitaliza????o s??o garantidos pela
                        PORTO SEGURO CIA. DE SEGUROS GERAIS S.A., C??digos Susep
                        7068-0 e 21.198-4, CNPJ 61.198.164/0001-60, Processo
                        Susep Seguro de Pessoas n?? 005.00089/00, e que a
                        aceita????o do seguro estar?? sujeita ?? an??lise de risco, e
                        o registro deste plano na Susep n??o implica, por parte
                        da autarquia, incentivo ou recomenda????o a sua
                        comercializa????o. Em caso de sinistro, entrar em contato
                        com a Central da EMISSORA PORTO SEGURO pelo telefone
                        0800 703 0377.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default FaqContainer;
