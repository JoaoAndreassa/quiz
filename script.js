// Array com as perguntas e respostas do quiz
var questions = [
  {
    //1
    question: " Quando deve ser utilizado o cartão de interditado? ",
    choices: [
      "Para identificar as peças faltando operação.",
      "Para entregar as peças no final do turno.",
      "Para identificar peças com tratamento térmico.",
      "Para identificar peças não conformes ou suspeitas.",
    ],
    correctAnswer: 3,
  },

  {
    //2
    question:
      "O que é uma intervenção realizada em uma máquina ou equipamento após adetecção de uma falha?",
    choices: [
      "Manutenção Corretiva.",
      "Manutenção Preditiva. ",
      "Manutenção Preditiva. ",
      "Manutenção Planejada",
    ],
    correctAnswer: 0,
  },

  {
    //3
    question:
      "O que é necessário estar no posto de trabalho para que este seja considerado “ok” durante uma auditoria? ",
    choices: [
      "Os meios de medição e inspeção contidos no roteiro, instrução de trabalho, plano de controle e desenho.",
      "Um colaborador executando seu trabalho. ",
      "Os meios de medição e inspeção especificados em desenho. ",

      "Os meios de medição e inspeção similares ao do roteiro. ",
    ],
    correctAnswer: 0,
  },

  {
    //4
    question: "Onde deve-se armazenar peças não-conformes? ",
    choices: [
      "No posto de trabalho sem necessidade de identificação. ",
      "Nos locais pré-definidos de segregação previstos para este fim (área de segregação). ",
      "Em uma caixa de madeira no posto de trabalho.  ",
      "Em uma caixa de papelão no corredor. ",
    ],
    correctAnswer: 1,
  },

  {
    //5
    question: "O que é Picking List?",
    choices: [
      "É um sistema eletrônico que verifica a posição das peças no estoque.",
      "É um sistema informatizado para indicar o controle de processo no abastecimento de linha.",
      "Lista de materiais e quantidades necessárias para atender a ordem de produção ou entrega.",
      "É um sistema informatizado para indicar as peças que não deverão ser montadas",
    ],
    correctAnswer: 2,
  },

  {
    //6
    question:
      " Conforme IATF 16949, item 8.5.4.1 (Preservação – suplemento), a organização deve usar um sistema de gestão de inventário para otimizar o giro do estoque ao longo do tempo e assegurar a rotação do estoque, isto é: ",
    choices: [
      "Avaliar em intervalos planejados apropriados a condição do produto no giro do estoque.",
      "Assegurar a preservação, embalagem, expedição e rotulagem, como providos pelos clientes. ",
      "Utilizar a metodologia FIFO (Primeiro que entra – primeiro que sai",
      "Assegurar a identificação, armazenamento e manuseio, desde a expedição até a entrega/aceitação pelo cliente",
    ],
    correctAnswer: 2,
  },
  {
    //7
    question:
      "Conforme descrito no Plano de Controle quando a frequência solicita, por exemplo, enviar 1 peça para ensaio metalúrgico, isso significa que:",
    choices: [
      "Deve-se enviar como Ajuste de Máquina. ",
      "Deve-se enviar como Periódico/Setup",
      "Deve-se enviar como variação de processo.",
      "Deve-se enviar como Experiência.",
    ],
    correctAnswer: 1,
  },
  {
    //8
    question:
      "Conforme definição da documentação IT-VE-001 (Classificação de Características Especiais) utilizada especificamente para características especiais, a simbologia de Características Especiais “C” significa:",
    choices: [
      " Pode continuar o processo. ",
      "Pode afetar a função. ",
      "Pode afetar segurança. ",
      "Nenhuma das anteriores. ",
    ],
    correctAnswer: 2,
  },
  {
    //9
    question:
      "Conforme definição da documentação IT-VE-001 (Classificação de Características Especiais) utilizada especificamente para características especiais, a simbologia de Características Especiais “F” significa:",
    choices: [
      "Pode afetar o processo.",
      "Pode afetar a função.",
      "Pode afetar segurança. ",
      "Nenhuma das anteriores. ",
    ],
    correctAnswer: 1,
  },
  {
    //10
    question:
      "Ferramenta da qualidade conhecida como diagrama de causa e efeito, que permite identificar e visualizar potenciais de falha, também conhecido por “espinha de peixe”, trata-se do: ",
    choices: [
      "Diagrama de Pareto ou Gráfico de Pareto.",
      "Diagrama de Ishikawa.",
      "Histograma.",
      "Fluxograma",
    ],
    correctAnswer: 1,
  },
  {
    //11
    question:
      "Alguns fatores podem nos levar à uma leitura equivocada nas medições com meios de medição analógicos, como por exemplo:",
    choices: [
      "Erro de paralaxe.",
      "Parafuso de fixação travado.",
      "Não existem erros para este caso.",
      "Utilizar micrometro decimal quando é solicitado centesimal.",
    ],
    correctAnswer: 0,
  },
  {
    //12
    question: "Quando detectamos cestos ou separadores danificados, devemos:",
    choices: [
      "Alojar as peças com cuidado para que não sejam danificadas.",
      "Continuar trabalhando normalmente.",
      "Interditar o cesto ou separadores e solicitar outro para logística. ",
      "Solicitar outro cesto e empilhar as peças umas sobre as outras.",
    ],
    correctAnswer: 2,
  },
  {
    //13
    question:
      "Quando realizamos a compra de peças com o sistema supermercado, devemos:",
    choices: [
      "Coletar os itens identificados pelo pick list, uma peça por compra. ",
      "Coletar os itens identificados pelo pick list, duas peças por compra, alocando as peças umas sobre as outras. ",
      "Coletar os itens selecionados pelo sistema, deixando as peças interditadas.",
      "Não utilizar o pick list, realizar a compra pela própria experiência.",
    ],
    correctAnswer: 0,
  },
  {
    //14
    question:
      "Em que momento o operacional deve-se consultar a documentação de processo?",
    choices: [
      "Somente no setup",
      "Somente inspeção de processo",
      "No final do lote.",
      "Em qualquer momento, os documentos são para suportar a processo.",
    ],
    correctAnswer: 3,
  },
  {
    //15
    question:
      "Conforme o PO (Procedimento Organizacional), Controle de Produto não-conforme é:",
    choices: [
      "Produto com uma situação suspeita, o qual deve não ser classificado e controlado como produto não-conforme.",
      "Produto ou material que não estão conforme com seus requisitos ou especificações estabelecidas, deve ser identificado e controlado para prevenir seu uso ou entrega não pretendido. ",
      "Ação sobre um produto ou serviço não conforme, a fim de torná-lo conforme aos requisitos.",
      "Todas estão corretas. ",
    ],
    correctAnswer: 1,
  },
  {
    //16
    question:
      "Conforme definição da PO (Procedimento Organizacional_ Controle de Produto NC), Retrabalho é:",
    choices: [
      "Produto com uma situação não identificada, o qual deve ser retrabalhado.",
      "Ação sobre um produto ou serviço não conforme, para impedir a sua utilização prevista originalmente.  ",
      "Ação sobre um produto ou serviço não conforme, a fim de torná-lo conforme aos requisitos. Re-inspeções deve ser considerada como retrabalho.",
      "Todas estão corretas.",
    ],
    correctAnswer: 2,
  },
  {
    //17
    question:
      "Conforme a diretiva D SRC2 22-02 (Gestão de Desvios), caso seja identificada uma necessidade de modificação no processo produtivo (máquina, ferramental e equipamentos), mudança provisória, o solicitante deve emitir:",
    choices: ["Um Desvio de Processo.", "Um 5W2H", "Um A3.", "Uma nota D2."],
    correctAnswer: 0,
  },
  {
    //18
    question:
      " Quais são as atividades e passos do operador ao utilizar o Poka Yoke?",
    choices: [
      "No início de cada turno, com uso de um PC, simular um erro no processo observando o funcionamento do sistema.",
      "Caso alguma anormalidade seja encontrada, o processo deve permanecer parado até que ações sejam tomadas.",
      "Somente voltar a trabalhar se o Poka Yoke estiver funcionando corretamente.",
      "Todas estão corretas.",
    ],
    correctAnswer: 3,
  },
  {
    //19
    question:
      "Conforme a diretiva D SRC2 -17-06 (Produção) para Liberação do Processo (Set-up), o que a produção deve fazer antes de iniciar o processo produtivo?",
    choices: [
      "Realizar e registrar a liberação do processo – set-up, somente quando o operador julgar necessário.",
      "Realizar e registrar a liberação do processo – set-up, não fazer apontamentos dos valores dimensionais solicitados.",
      "Realizar e registrar a liberação do processo – set-up, fazer apontamento de todas as características solicitada em relatório.",
      "Nenhuma das anteriores.",
    ],
    correctAnswer: 2,
  },
  {
    //20
    question: "Produto suspeito se define por: ",
    choices: [
      "Produto com uma situação não identificada, o qual deve ser devolvido para sua devida embalagem e seguir o processo normalmente.",
      "Produto com uma situação não identificada, o qual deve ser controlado como produto não conforme.",
      "Produto que não está conforme com seus requisitos e especificações.",
      "Todas estão incorretas.",
    ],
    correctAnswer: 1,
  },
  {
    //21
    question:
      "Por que os 8D's devem ser desenvolvidos em conjunto a um time multifuncional?",
    choices: [
      "Porque precisamos mostrar ao cliente (interno ou externo) que várias pessoas participaram da análise.",
      "Porque precisamos garantir a resolução da causa raiz com as maiores eficiências e eficácias possíveis.",
      "Porque precisamos garantir o seguimento dos 8 passos 8D.",
      "Porque precisamos garantir que todas as áreas possíveis participem ao menos uma vez na solução de um problema",
    ],
    correctAnswer: 1,
  },
  {
    //22
    question:
      "A instrução de trabalho é um documento muito importante para atividades operacionais, pois:",
    choices: [
      "Contém o modo correto de se executar uma determinada atividade.",
      "Unifica o conhecimento e aumenta o nível de segurança e qualidade do processo.",
      "Ensina que a atividade tem um passo a passo detalhado a ser seguido para garantir a qualidade do produto.",
      "Todas estão corretas.",
    ],
    correctAnswer: 3,
  },
  {
    //23
    question:
      "No contexto geral, como deve ser a ação de contenção quando uma peça / produto não conforme for detectada? ",
    choices: [
      "Deve-se checar as peças que estão no setor e no estoque.",
      "Deve-se verificar as peças que foram enviadas ao tratamento térmico e montagem.",
      "Deve-se estender a contenção para as peças em outros processos e expedição.",
      "Todas estão corretas.",
    ],
    correctAnswer: 3,
  },
  {
    //24
    question: "Caso o Poka Yoke esteja reprovado, o que devo fazer?",
    choices: [
      "Aviso o responsável da área e sigo a produção/montagem normalmente. ",
      "Abro uma OS e continuo trabalhando até que a manutenção realize o reparo.",
      "Desligo o Poka Yoke durante o processo.",
      "Paro imediatamente até que ações sejam tomadas e realizo o registro em check list.",
    ],
    correctAnswer: 3,
  },
  {
    //25
    question:
      "De acordo com a nova Política da Qualidade ZF, quais são os 5 princípios do DNA da Qualidade? ",
    choices: [
      "Pessoas, Princípios, Percepção, Produção, PDCA.",
      "Pessoas, Prevenção, Percepção, Performance, PDCA.",
      "Percepção, Prevenção, Performance, Produtividade, PDCA.",
      "Pessoas, Princípios, Produto, PDCA, Processo.",
    ],
    correctAnswer: 1,
  },
  {
    //26
    question:
      "O DNA da Qualidade se apoia em 5 princípios. O princípio Pessoas pode ser definido como:",
    choices: [
      "A estrutura do DNA da Qualidade, trazendo a reflexão das lições aprendidas e o compartilhamento de boas práticas. ",
      "Analisar os dados e informações para melhorar a tomada de decisão.",
      "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.",
      "Entender as expectativas dos clientes internos e externos.",
    ],
    correctAnswer: 2,
  },
  {
    //27
    question:
      "O DNA da Qualidade se apoia em 5 princípios. O princípio Prevenção pode ser definido como:",
    choices: [
      "Assegurar o planejamento dos produtos, processos e serviços da ZF com foco no defeito zero",
      "Analisar os dados e informações para melhorar a tomada de decisão. ",
      "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.",
      "Entender as expectativas dos clientes internos e externos.",
    ],
    correctAnswer: 0,
  },
  {
    //28
    question:
      "O DNA da Qualidade se apoia em 5 princípios. O princípio Percepção pode ser definido como:",
    choices: [
      "Assegurar o lançamento robusto de produto e um ciclo de vida estável.",
      "Focar na definição e monitoramento dos indicadores da ZF, avaliando o desempenho, rumo à excelência em Qualidade.",
      "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.",
      "Entender e atender as expectativas dos clientes internos e externos. ",
    ],
    correctAnswer: 3,
  },
  {
    //29
    question:
      "O DNA da Qualidade se apoia em 5 princípios. O princípio Performance pode ser definido como:",
    choices: [
      "Assegurar o lançamento robusto de produto e um ciclo de vida estável.",
      "Focar na definição e monitoramento dos indicadores da ZF, avaliando o desempenho, rumo à excelência em Qualidade.",
      "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.",
      "Entender e atender as expectativas dos clientes internos e externos. ",
    ],
    correctAnswer: 1,
  },
  {
    //30
    question:
      "O DNA da Qualidade se apoia em 5 princípios. O princípio PDCA pode ser definido como:",
    choices: [
      "Assegurar o planejamento dos produtos, processos e serviços da ZF com foco no defeito zero. ",
      "Analisar os dados e informações para melhorar a tomada de decisão. ",
      "A estrutura do DNA da Qualidade, trazendo a reflexão das lições aprendidas e o compartilhamento de boas práticas. ",
      "Entender as expectativas dos clientes internos e externos.",
    ],
    correctAnswer: 2,
  },
  {
    //31
    question:
      "Conforme a diretiva D SRC2 17-06 (Produção), as peças de setup, reprovadas nas inspeções do operador na liberação do equipamento devem ser identificadas com:",
    choices: [
      "Caixa de segregação ou Cinta plástica vermelha quando não for possível, devido ao tamanho das peças.",
      "Cinta plástica branca e segregadas para posterior retrabalho e Reinspeção no final do lote.",
      "Cinta plástica vermelha e segregadas, sem a necessidade de segregar reinspecionar no início do lote.",
      "Cinta plástica branca e segregadas para posterior retrabalho e Reinspeção no final de cada turno.",
    ],
    correctAnswer: 0,
  },
  {
    //32
    question:
      " Conforme a diretiva local D SRC2 17-02 o almoxarife deve separar fisicamente os materiais conforme necessidade, ele deve verificar contaminação das peças que inclui:",
    choices: [
      "Verificar oxidação nas peças",
      "Excesso de poeira nas peças.",
      "Excesso de contaminantes(óleo/graxa), que possa interferir na qualidade do produto.",
      "Todas estão corretas",
    ],
    correctAnswer: 3,
  },
  {
    //33
    question:
      " Conforme a diretiva local D SRC2 17-02 o almoxarife, deve fazer o armazenamento das peças em recipientes:",
    choices: [
      "Caçambas com madeira ou plástico dentro",
      "Caixas KLT com sujidade óleo ou graxa.",
      "Caçambas com água ou óleo ",
      "Recipientes limpos, livre de qualquer contaminante. ",
    ],
    correctAnswer: 3,
  },
  {
    //34
    question:
      "De acordo com a diretiva DN BRA 17-24 (Shutdown), são considerados Shutdown as paradas planejadas ou não que são superiores a: ",
    choices: [
      "10 dias corridos.",
      "10 dias úteis.",
      "12 dias corridos.",
      "12 dias úteis.",
    ],
    correctAnswer: 0,
  },
  {
    //35
    question:
      "Conforme a diretiva DN BRA 17-23 (Ações Corretivas e Preventivas), o Quality Alert deve ser utilizado para auxiliar na:",
    choices: [
      "Contenção / Prevenção de falhas internas e externas, de acordo com a complexidade da falha. ",
      "Contenção / Prevenção somente de falhas internas, de acordo com a complexidade da falha.",
      "Contenção / Prevenção somente de falhas externas, de acordo coma complexidade da falha. ",
      "Todas estão incorretas.",
    ],
    correctAnswer: 0,
  },
  {
    //36
    question:
      "Conforme a diretiva DN BRA 17-02 (Controle dos Dispositivos de Medição) é de responsabilidade do usuário o envio imediato ao Laboratório ou Preset de todo meio de controle que apresentar: ",
    choices: [
      "Prazo de validade de calibração vencida.",
      "Falta de identificação (Ex. Etiqueta ilegível).",
      "Mal funcionamento. ",
      "Todas estão corretas.",
    ],
    correctAnswer: 3,
  },
  {
    //37
    question:
      "Segundo a diretiva D SRC2 22-02 (Gestão de Desvio), quando houver necessidade de modificação do processo, os principais casos que requerem emissão de desvio:",
    choices: [
      "Fluxo do processo.",
      "Mudança de máquina.",
      "Poka Yoke. ",
      "Todas estão corretas.",
    ],
    correctAnswer: 3,
  },
  {
    //38
    question:
      "Conforme a instrução de trabalho (IT-GQ-007), quando houver necessidade de retrabalho, quando o mesmo deve ser realizado. ",
    choices: [
      "Retornar o produto à linha para realizar seu retrabalho no momento do processo",
      "Não precisa de retrabalho pode liberar o produto para expedição. ",
      "Liberar o produto para o cliente",
      " Retornar o produto à linha para realizar seu retrabalho no fim do lote de processo. ",
    ],
    correctAnswer: 3,
  },
  {
    //39
    question:
      "É essencial que o operador de empilhadeira realize o check list diário da empilhadeira para garantir as condições de segurança da máquina. Ao realizar o check list do sistema elétrico, deve-se verificar: ",
    choices: [
      "Farol. ",
      "Luz de Ré e Luz de Segurança. ",
      "Buzina. ",
      "Todas estão corretas. ",
    ],
    correctAnswer: 3,
  },
  {
    //40
    question:
      "Conforme o item 8.5.4 – Preservação da ITAF 16949, a ZF deve garantir a preservação de seus produtos durante todo o fluxo de processo até a entrega ao cliente. Assim, a preservação deve incluir: ",
    choices: [
      "Identificação, manuseio e controle de contaminação.",
      "Armazenamento e embalagem. ",
      "Transporte e proteção.",
      "Todas estão corretas.",
    ],
    correctAnswer: 3,
  },

  // Adicione mais perguntas aqui
];

var totalQuestions = 40; // Total de perguntas disponíveis
var questionsToAnswer = 10; // Número de perguntas que o usuário irá responder
var selectedQuestions = [];
var currentQuestion = 0; // Índice da pergunta atual
var score = 0; // Pontuação do usuário

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var resultsElement = document.getElementById("results");
var scoreElement = document.getElementById("score");

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetQuiz);
resetQuiz();
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  answeredQuestions = 0;
  selectRandomQuestions();
  displayQuestion();
  hideResults();
  resetSubmitButton();
}
function resetSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = "Enviar Resposta";
}
function hideResults() {
  resultsElement.style.display = "none";
  scoreElement.textContent = "";
}

function displayQuestion() {
  var question = questions[currentQuestion];
  questionElement.textContent = question.question;

  // Limpa as opções de resposta anteriores
  choicesElement.innerHTML = " ";

  // Adiciona as opções de resposta
  for (var i = 0; i < question.choices.length; i++) {
    var choice = document.createElement("label");
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = i;
    choice.textContent = question.choices[i];
    choice.appendChild(input);
    choicesElement.appendChild(choice);
  }
}

submitButton.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  var selectedChoiceIndex = document.querySelector(
    'input[name="choice"]:checked'
  );

  // Verifica se alguma opção foi selecionada
  if (selectedChoiceIndex) {
    // Exibe uma caixa de diálogo de confirmação ao usuário
    var confirmResponse = confirm("Tem certeza de sua resposta?");

    if (confirmResponse) {
      selectedChoiceIndex = parseInt(selectedChoiceIndex.value);

      if (selectedChoiceIndex === questions[currentQuestion].correctAnswer) {
        score++;
      }

      answeredQuestions++;

      if (answeredQuestions === questionsToAnswer) {
        displayResults();
      } else {
        currentQuestion++;
        displayQuestion();
      }
    }
  } else {
    alert("Por favor, selecione uma resposta antes de enviar.");
  }
  resetSubmitButton();
}

function displayResults() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  submitButton.addEventListener("click", handleChoiceClick);

  resultsElement.style.display = "block";
  scoreElement.textContent =
    "Você acertou " + score + " de " + 10 + " perguntas.";
}
// Função para selecionar aleatoriamente as perguntas
function selectRandomQuestions() {
  var shuffledQuestions = questions.sort(function () {
    return 0.5 - Math.random();
  });

  selectedQuestions = shuffledQuestions.slice(0, questionsToAnswer);
}

// Chamada da função para selecionar as perguntas aleatórias
selectRandomQuestions();
displayQuestion();
var questionsToAnswer = 10; // Número de perguntas que o usuário irá responder
var answeredQuestions = 0; // Número de perguntas respondidas pelo usuário

// ...

function handleChoiceClick() {
  var selectedChoiceIndex = document.querySelector(
    'input[name="choice"]:checked'
  );

  // Verifica se alguma opção foi selecionada
  if (selectedChoiceIndex) {
    // Exibe uma caixa de diálogo de confirmação ao usuário
    var confirmResponse = confirm("Tem certeza de sua resposta?");

    if (confirmResponse) {
      selectedChoiceIndex = parseInt(selectedChoiceIndex.value);

      if (selectedChoiceIndex === questions[currentQuestion].correctAnswer) {
        score++;
      }

      answeredQuestions++;

      if (answeredQuestions === questionsToAnswer) {
        displayResults();
      } else {
        currentQuestion++;
        displayQuestion();
      }
    }
  } else {
    alert("Por favor, selecione uma resposta antes de enviar.");
  }
  resetSubmitButton();
}
