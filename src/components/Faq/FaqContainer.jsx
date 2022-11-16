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
                      O CARTÃO NAÇÃO SAÚDE é um plano de saúde?
                    </button>
                  </h2>
                  <div
                    id="question-rede-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-1"
                  >
                    <div className="accordion-body">
                      O CARTÃO NAÇÃO SAÚDE não é um plano de saúde convencional.
                      Somos um Sistema de Saúde, com teleatendimento, seguros e
                      com credenciamento focado em consultas e exames com
                      descontos. Você paga o que utiliza, porém, um valor mais
                      acessível. Além disso, pode contar com uma equipe de
                      atendimento humanizada para solucionar dúvidas e encontrar
                      a melhor opção na hora de cuidar da saúde.
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
                        1. Tenha em mãos o cartão virtual de identificação
                        dentro do prazo de validade, informe que utilizará a
                        rede/convênio NIPOMED CONSULTA.
                      </p>
                      <p>
                        2. No dia agendado, o pagamento da consulta, exame ou
                        procedimento deve ser realizado diretamente para o
                        local. A forma de pagamento varia de acordo com o
                        estabelecimento escolhido.
                      </p>
                      <p>
                        3. Agende o retorno Em caso de consulta, é necessário
                        atentar para o prazo de retorno (alguns locais têm prazo
                        de 10, 15, 20 ou 30 dias corridos). O retorno não é
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
                      Quais especialidades estão disponíveis em nossa REDE
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
                        Nossa REDE CREDENCIADA não tem restrição de utilização,
                        desde que haja disponibilidade de rede contratada na
                        região, todo associado poderá utilizar rede privada de
                        atendimento com valores mais acessíveis.
                      </p>

                      <p className="fw-bold">
                        *Consultar disponibilidade das especialidades e
                        procedimentos na sua região.
                      </p>

                      <p className="fw-bold">Exames:</p>

                      <ul>
                        <li>Análises Clínicas</li>
                        <li>Ultrassom</li>
                        <li>Doppler</li>
                        <li>Ressonância Magnética</li>
                        <li>Tomografia Computadorizada</li>
                        <li>Testes Alérgicos</li>
                        <li>Exames Cardiológicos</li>
                        <li>Exames Ginecológicos</li>
                        <li>Exames Oftalmológicos</li>
                        <li>Exames Neurológicos</li>
                        <li>Exames Auditivos</li>
                        <li>Exames Genéticos</li>
                        <li>Endoscopia</li>
                        <li>Colonoscopia</li>
                        <li>Mamografia</li>
                        <li>Densitometria Óssea</li>
                        <li>Raio-X</li>
                        <li>Panorâmica</li>
                        <li>Biópsias</li>
                        <li>Covid-19 Detecção e Pós Vacina</li>
                        <li>Medicina Nuclear</li>
                        <li>Bioimpedânciometria</li>
                        <li>Outros Procedimentos:</li>
                        <li>
                          Procedimentos que podem ser realizados em nível
                          ambulatorial (na própria clínica ou laboratório), como
                          Histerossalpingografia, Exérese, Implantes dentários,
                          entre outros.
                        </li>
                      </ul>

                      <p className="fw-bold">Consultas Médicas:</p>

                      <ul>
                        <li>Acupuntura</li>
                        <li>Alergia e Imunologia</li>
                        <li>Angiologia e Vascular</li>
                        <li>Cardiologia</li>
                        <li>Cirurgia Geral (apenas consulta)</li>
                        <li>Clínica Médica</li>
                        <li>Coloproctologia</li>
                        <li>Dermatologia</li>
                        <li>Endocrinologia e Metabologia</li>
                        <li>Gastroenterologia</li>
                        <li>Geriatria</li>
                        <li>Ginecologia e Obstetrícia</li>
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
                        <li>Clínico Geral</li>
                        <li>Dentística</li>
                        <li>Periodontia</li>
                        <li>Ortodontia</li>
                        <li>Endodontia</li>
                        <li>Odontopediatria</li>
                        <li>Implantodontia</li>
                      </ul>

                      <p className="fw-bold">Outras especialidades:</p>
                      <ul>
                        <li>Psicologia diversas abordagens</li>
                        <li>Nutrição</li>
                        <li>Fisioterapia</li>
                        <li>RGP</li>
                        <li>Fonoaudiologia</li>
                        <li>Ozonioterapia</li>
                        <li>Outros serviços</li>
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
                      Os preços das consultas e procedimentos são iguais em
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
                        Não. Os valores e formas de pagamento variam de acordo
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
                        O valor das consultas varia por região, estabelecimento
                        e especialidade, porém sempre com valor mais acessível
                        que o particular. Na cidade de São Paulo, por exemplo,
                        as consultas com Clínico Geral iniciam em média a partir
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
                        escolhido podendo ser: Dinheiro, Cartão de Débito,
                        Cartão de Crédito, Cheque, TED, PIX. Alguns
                        estabelecimentos também oferecem a opção de
                        parcelamento. Esta decisão fica à critério do
                        estabelecimento de saúde escolhido, por este motivo, é
                        importante confirmar esta informação no ato do
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
                      Existe algum tipo de carência para exames especiais?
                    </button>
                  </h2>
                  <div
                    id="question-rede-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-7"
                  >
                    <div className="accordion-body">
                      <p>
                        Diferente do plano de saúde, não existe carência para
                        nenhum tipo de exame. Você pode utilizar todos os
                        benefícios e agendar qualquer exame disponível na rede
                        credenciada de imediato, sem restrições.
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
                        A rede de estabelecimentos de saúde é ampla e pode
                        abranger todo território nacional de acordo com o fluxo
                        de clientes em cada região.
                      </p>
                      <p>
                        No entanto, é importante validar a disponibilidade de
                        rede credenciada e especialidades que irá utilizar na
                        sua cidade e proximidades. Caso não encontre algum
                        estabelecimento de saúde na proximidade, é possível
                        indicar clínicas e laboratórios para futuro
                        credenciamento (não há garantias de credenciamento,
                        porém será analisado pelo setor responsável).
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
                        É possível consultar os valores de consulta, exames e
                        procedimentos solicitando atendimento através do chat ou
                        formulário dentro do aplicativo.
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
                      É preciso ter o pedido médico para agendar exames?
                    </button>
                  </h2>
                  <div
                    id="question-rede-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-rede-10"
                  >
                    <div className="accordion-body">
                      <p>
                        Sim. O agendamento de exames será realizado apenas
                        mediante ao envio do pedido médico, pois será exigido
                        pelo laboratório. Ter o pedido médico é importante para
                        verificar se o exame orçado é realmente o mesmo que o
                        médico solicitou. Você pode solicitar o seu pedido de
                        exame através da nossa telemedicina. Copyright @ 2022 -
                        Cartão Nação Saúde - Todos os direitos reservados
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
                      Como são feitas as avaliações médicas pelo Einstein
                      Conecta?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-1"
                  >
                    <div className="accordion-body">
                      Todas as avaliações são realizadas por videochamada,
                      através da internet, de forma que tanto médico quanto
                      paciente veem um ao outro ao vivo, podendo interagir
                      livremente como em uma consulta face a face. Para o exame
                      físico, o médico observará durante a consulta, através da
                      câmera, o estado geral, o padrão respiratório, sinais de
                      dor e desconforto, além de poder avaliar garganta, olhos e
                      lesões de pele. O médico também poderá pedir ao paciente
                      para realizar determinadas manobras que ajudem a elucidar
                      melhor o diagnóstico e otimizar a conduta. No caso de
                      atendimentos pediátricos, o médico poderá pedir o auxílio
                      do responsável para obter outros dados importantes na
                      avaliação do exame físico. Ele poderá orientar o
                      responsável a auxiliá-lo na avaliação de lesões de pele
                      (textura, descamação, calor local), na avaliação da dor em
                      algum membro ou região do corpo, na avaliação da perfusão
                      da pele, na contagem da frequência respiratória – número
                      de respirações por minuto – entre outros.
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
                      Como é feito o diagnóstico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-2"
                  >
                    <div className="accordion-body">
                      <p>
                        Os dados obtidos pelo médico durante a avaliação
                        possibilitarão a construção de uma hipótese diagnóstica,
                        embasada nos mais recentes protocolos clínicos nacionais
                        e internacionais, devidamente adaptados para as
                        avaliações por telemedicina. Todos os atendimentos geram
                        um relatório completo, contendo a hipótese diagnóstica e
                        orientações médicas personalizadas, que serão enviados
                        ao paciente por e-mail. Caso seja pertinente à situação,
                        poderão ser encaminhadas também receitas médicas ou
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
                      E se o médico não conseguir fazer a avaliação a distância?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-3"
                  >
                    <div className="accordion-body">
                      <p>
                        Em mais de 80% dos casos a avaliação por telemedicina
                        pelo Einstein Conecta é suficiente para uma orientação
                        médica segura. No entanto, quando é identificado um
                        sinal de gravidade que indique que a consulta por
                        telemedicina não é segura ou houver a necessidade de
                        avaliação física presencial para um diagnóstico mais
                        preciso, o paciente será orientado a procurar um
                        atendimento presencial. Mesmo nestes casos um relatório,
                        explicando as razões do encaminhamento, é enviado ao
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
                        O paciente será atendido pela equipe médica com a
                        qualidade Einstein, com ampla experiência em atendimento
                        de emergências, treinada em atendimento por telemedicina
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
                      Einstein Conecta é um tipo de convênio médico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-5"
                  >
                    <div className="accordion-body">
                      <p>
                        Não, o Einstein Conecta é um serviço do Centro de
                        Telemedicina do Hospital Israelita Albert Einstein.
                        Realizamos orientação médica on-line para casos de baixa
                        complexidade como resfriados, dor nas costas, infecção
                        urinária, dor de cabeça, diarreia, entre outros.
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
                      A realização de exames está inclusa na contratação?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-6"
                  >
                    <div className="accordion-body">
                      <p>
                        Não, a contratação do Einstein Conecta dá direito a ter
                        acesso a orientações, mas não estão inclusos exames e
                        nem a solicitação dos mesmos.
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
                      <p className="fw-bold">O atendimento é rapido e fácil</p>
                      <ul>
                        <li>
                          Acesse o Einstein Conecta pelo link
                          “telemedicina.einstein.br” ou pelo aplicativo
                          “Einstein Conecta” , disponível nas lojas App Store ou
                          Play Store
                        </li>
                        <li>
                          <strong>2 –</strong> Na área de login, digite o seu
                          e-mail e senha cadastrados e clique em “Enviar”. Obs.:
                          no site, é preciso clicar no botão “Login” para
                          acessar a área.
                        </li>
                        <li>
                          <strong>3 –</strong> Clique no botão “iniciar o
                          atendimento”
                        </li>
                        <li>
                          <strong>4 –</strong> Selecione a pessoa (titular ou
                          dependente) para a qual deseja atendimento
                        </li>
                        <li>
                          <strong>5 –</strong> Clique no botão “Iniciar
                          atendimento” e pronto: em instantes você será
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
                      Posso ser atendido sempre pelo mesmo médico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-8"
                  >
                    <div className="accordion-body">
                      <p>
                        Não. O atendimento do Einstein Conecta é o mesmo de um
                        pronto atendimento, ou seja, você será atendido pelo
                        primeiro médico disponível.
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
                      Devo utilizar o Einstein Conecta em casos de emergência?
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
                          Falta de ar, dor no peito, palpitações ou arritmias;
                        </li>
                        <li>Convulsões ou alterações neurológicas;</li>
                        <li>Perda de consciência/desmaio;</li>
                        <li>
                          Acidentes automobilísticos, ferimentos cortantes ou
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
                      Estou fora do Brasil, posso usar o serviço?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-10"
                  >
                    <div className="accordion-body">
                      <p>
                        Sim, você pode utilizar os serviços do Conecta a partir
                        de qualquer lugar do mundo com acesso a banda larga de
                        internet (exceto regiões com controle de acesso
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
                      A receita médica tem validade em outros países?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-11"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-11"
                  >
                    <div className="accordion-body">
                      <p>
                        Não. A receita médica tem validade apenas em território
                        brasileiro. No entanto, nossa equipe está preparada para
                        orientar a compra de medicamentos sintomáticos que
                        estejam disponíveis na prateleira de farmácias em outros
                        países, sem necessidade de receita médica. Por outro
                        lado, caso seja necessária uma receita médica,
                        recomendamos que procure um serviço médico local ou
                        consulte seu seguro saúde para outras opções.
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
                      O serviço é compatível com quais sistemas operacionais?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-12"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-12"
                  >
                    <div className="accordion-body">
                      <p>
                        O aplicativo do Einstein Conecta está disponível para os
                        sistemas operacionais Android e iOS. Alternativamente, o
                        sistema no site do Einstein Conecta é uma aplicação web
                        que funciona nos navegadores Chrome ou Firefox, ou seja,
                        não depende do sistema operacional (Windows, Linux,
                        etc…)
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
                      E se a minha conexão com a internet cair durante a
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
                        Assim que restabelecer a sua conexão, reinicie o fluxo
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
                      O que devo fazer se a imagem da minha câmera não estiver
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
                        Você pode verificar se ela não está somente desativada
                        na tela da videoconferência, tocando/clicando no botão
                        com o desenho de uma câmera. Caso não resolva, entre em
                        contato com o suporte técnico pelo telefone (11)
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
                      Onde ficam armazenados os dados do meu prontuário
                      eletrônico?
                    </button>
                  </h2>
                  <div
                    id="question-telemedicina-15"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-telemedicina-15"
                  >
                    <div className="accordion-body">
                      <p>
                        Os prontuários eletrônicos são armazenados nos
                        servidores do Einstein de forma segura, conforme
                        determinação legal, garantindo a privacidade necessária
                        ao acesso dos dados médicos dos pacientes.
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
                      Quais são os seguros que estou contratando?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-1"
                  >
                    <div className="accordion-body">
                      Assistência Funerária, Seguro de vida, título de
                      captalização, acidentes pessoais, no valor de R$5.000,00,
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
                      Como faço para solicitar o recebimento do seguro?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-2"
                  >
                    <div className="accordion-body">
                      <p>
                        No momento que você mais precisar é só entrar em contato
                        com nossa central na porto seguro através do número 0800
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
                      Se eu ganhar o sorteio como faço para receber os
                      R$5.000,00 prêmiado?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-3"
                  >
                    <div className="accordion-body">
                      <p>
                        São 5 chances por mês de ganhar o sorteio. Se o seu cpf
                        for o sorteado você receberá uma ligação da Porto Seguro
                        que fará o procedimento necessário para depositar o
                        pagamento de R$5.000,00 direto em sua conta bancária.
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
                        efeitos de recebimento dos benefícios de seguro de
                        acidentes pessoais, uxílio cesta básica e auxílio
                        Funeral é de 74 (setenta e quatro) anos.
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
                      assistênciais contratados?
                    </button>
                  </h2>
                  <div
                    id="question-seguros-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="questions-seguros-5"
                  >
                    <div className="accordion-body">
                      <p>
                        *O seguro de acidentes pessoais, cesta básica, auxílio
                        funeral e título de capitalização são garantidos pela
                        PORTO SEGURO CIA. DE SEGUROS GERAIS S.A., Códigos Susep
                        7068-0 e 21.198-4, CNPJ 61.198.164/0001-60, Processo
                        Susep Seguro de Pessoas nº 005.00089/00, e que a
                        aceitação do seguro estará sujeita à análise de risco, e
                        o registro deste plano na Susep não implica, por parte
                        da autarquia, incentivo ou recomendação a sua
                        comercialização. Em caso de sinistro, entrar em contato
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
