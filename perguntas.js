const perguntas_nivel_1 = [

    //TEMA:  Conjuntos (definição, operações: união, interseção, complemento, subconjuntos).  
    {
        enunciado: "O que é um conjunto na Matemática?",
        opcoes: [
          'a) Um número inteiro qualquer', 
          'b) Um agrupamento aleatório de objetos', 
          'c) Uma coleção bem definida de elementos', 
          'd) Um número com vírgula'
        ],
        correta: 'c) Uma coleção bem definida de elementos',
        svg: ''
      },

      {
        enunciado: "Se A = {1, 2, 3} e B = {3, 4, 5}, qual é a união A ∪ B?",
        opcoes: [
          'a) {1, 2, 3}', 
          'b) {3}', 
          'c) {1, 2, 3, 4, 5}', 
          'd) {4, 5}'
        ],
        correta: 'c) {1, 2, 3, 4, 5}',
        svg: ''
      },

      {
        enunciado: "Qual é a interseção de A = {2, 4, 6} e B = {1, 2, 3}?",
        opcoes: [
          'a) {2}', 
          'b) {1, 2, 3, 4, 6}', 
          'c) {}', 
          'd) {4, 6}'
        ],
        correta: 'a) {2}',
        svg: ''
      },

      {
        enunciado: "Se U = {a, b, c, d} e A = {a, c}, qual é o complemento de A?",
        opcoes: [
          'a) {a, c}', 
          'b) {b, d}', 
          'c) {a, b, c}', 
          'd) {a, b, c, d}'
        ],
        correta: 'b) {b, d}',
        svg: ''
      },

      {
        enunciado: "Se A = {1, 2} e B = {1, 2, 3}, então A é:",
        opcoes: [
          'a) Igual a B', 
          'b) Um conjunto disjunto de B', 
          'c) Um subconjunto de B', 
          'd) O conjunto complementar de B'
        ],
        correta: 'c) Um subconjunto de B',
        svg: ''
      },

    //TEMA:  Relações (reflexiva, simétrica, transitiva, equivalência).
    {
    enunciado: "Uma relação 𝑅 em um conjunto 𝐴 é dita reflexiva quando:",
    opcoes: [
      'a) Todo elemento de 𝐴 se relaciona com outro elemento qualquer',
      'b) Todo elemento de 𝐴 se relaciona consigo mesmo',
      'c) Apenas alguns elementos de 𝐴 se relacionam',
      'd) Nenhum elemento de 𝐴 se relaciona consigo'
    ],
    correta: 'b) Todo elemento de 𝐴 se relaciona consigo mesmo',
    svg: ''
  },
  {
    enunciado: "Uma relação 𝑅 é simétrica quando:",
    opcoes: [
      'a) Para todos os a, b ∈ A, se aRb, então bRa',
      'b) Para todo a ∈ A, temos aRa',
      'c) Existe a, b tais que aRb e bRa',
      'd) Se aRb, então b ≠ a'
    ],
    correta: 'a) Para todos os a, b ∈ A, se aRb, então bRa',
    svg: ''
  },
  {
    enunciado: "A relação 𝑅 é transitiva se:",
    opcoes: [
      'a) Para todos os a, b, c ∈ A, se aRb e bRc, então aRc',
      'b) Se aRb, então bRa',
      'c) Cada elemento se relaciona com ele mesmo',
      'd) aRb implica a = b'
    ],
    correta: 'a) Para todos os a, b, c ∈ A, se aRb e bRc, então aRc',
    svg: ''
  },
  {
    enunciado: "Qual das propriedades a seguir **não é** necessária para que uma relação seja de equivalência?",
    opcoes: [
      'a) Reflexiva',
      'b) Simétrica',
      'c) Transitiva',
      'd) Antissimétrica'
    ],
    correta: 'd) Antissimétrica',
    svg: ''
  },
  {
    enunciado: "Uma relação de equivalência deve satisfazer quais propriedades?",
    opcoes: [
      'a) Apenas reflexiva e simétrica',
      'b) Apenas simétrica e transitiva',
      'c) Reflexiva, simétrica e transitiva',
      'd) Reflexiva, antissimétrica e transitiva'
    ],
    correta: 'c) Reflexiva, simétrica e transitiva',
    svg: ''
  },


    //TEMA:  Funções (função injetora, sobrejetora, bijetora, composta, inversa).
    {
    enunciado: "Uma função é dita **injetora** quando:",
    opcoes: [
      'a) Cada elemento do contradomínio é imagem de pelo menos dois elementos do domínio',
      'b) Cada elemento do domínio tem mais de uma imagem',
      'c) Imagens diferentes correspondem a elementos diferentes do domínio',
      'd) Todos os elementos do contradomínio são atingidos'
    ],
    correta: 'c) Imagens diferentes correspondem a elementos diferentes do domínio',
    svg: ''
  },
  {
    enunciado: "Uma função é dita **sobrejetora** quando:",
    opcoes: [
      'a) Cada elemento do domínio é imagem de algum elemento do contradomínio',
      'b) Todo elemento do contradomínio é atingido por algum elemento do domínio',
      'c) Há elementos no contradomínio que não são atingidos',
      'd) Cada elemento do domínio tem duas imagens'
    ],
    correta: 'b) Todo elemento do contradomínio é atingido por algum elemento do domínio',
    svg: ''
  },
  {
    enunciado: "Uma função é **bijetora** quando ela é:",
    opcoes: [
      'a) Apenas injetora',
      'b) Apenas sobrejetora',
      'c) Injetora e sobrejetora ao mesmo tempo',
      'd) Constante'
    ],
    correta: 'c) Injetora e sobrejetora ao mesmo tempo',
    svg: ''
  },
  {
    enunciado: "A **função composta** f ∘ g é definida como:",
    opcoes: [
      'a) f(g(x))',
      'b) f(x) + g(x)',
      'c) f(x) - g(x)',
      'd) g(f(x))'
    ],
    correta: 'a) f(g(x))',
    svg: ''
  },
  {
    enunciado: "A **função inversa** de f, denotada por f⁻¹, satisfaz:",
    opcoes: [
      'a) f(f⁻¹(x)) = x e f⁻¹(f(x)) = x',
      'b) f(f⁻¹(x)) = 0',
      'c) f⁻¹(x) = -f(x)',
      'd) f⁻¹(x) = f(x)'
    ],
    correta: 'a) f(f⁻¹(x)) = x e f⁻¹(f(x)) = x',
    svg: ''
  },

    //TEMA:  Sequências numéricas (aritméticas e geométricas). 

    {
    enunciado: "Em uma **progressão aritmética (PA)**, cada termo é obtido:",
    opcoes: [
      'a) Somando sempre o mesmo valor ao termo anterior',
      'b) Multiplicando por 2 o termo anterior',
      'c) Subtraindo um valor diferente a cada termo',
      'd) Elevando o termo anterior ao quadrado'
    ],
    correta: 'a) Somando sempre o mesmo valor ao termo anterior',
    svg: ''
  },
  {
    enunciado: "A razão de uma **PA** é:",
    opcoes: [
      'a) A soma de dois termos quaisquer',
      'b) A multiplicação dos dois primeiros termos',
      'c) A diferença entre dois termos consecutivos',
      'd) A divisão entre o último e o primeiro termo'
    ],
    correta: 'c) A diferença entre dois termos consecutivos',
    svg: ''
  },
  {
    enunciado: "Em uma **progressão geométrica (PG)**, cada termo é obtido:",
    opcoes: [
      'a) Subtraindo sempre o mesmo número do termo anterior',
      'b) Dividindo sempre pelo mesmo número',
      'c) Somando um valor fixo ao termo anterior',
      'd) Multiplicando sempre pelo mesmo número'
    ],
    correta: 'd) Multiplicando sempre pelo mesmo número',
    svg: ''
  },
  {
    enunciado: "A razão de uma **PG** é calculada por:",
    opcoes: [
      'a) A diferença entre dois termos consecutivos',
      'b) A soma dos termos anteriores',
      'c) A divisão entre dois termos consecutivos',
      'd) O quadrado de qualquer termo'
    ],
    correta: 'c) A divisão entre dois termos consecutivos',
    svg: ''
  },
  {
    enunciado: "Qual é o próximo termo da PA: 5, 8, 11, 14, ...?",
    opcoes: [
      'a) 16',
      'b) 17',
      'c) 18',
      'd) 20'
    ],
    correta: 'c) 17',
    svg: ''
  }
    
    ];


    const perguntas_nivel_2 = [

    //TEMA:  Conjuntos (definição, operações: união, interseção, complemento, subconjuntos).  
    {
    enunciado: "Se A = {x ∈ ℕ | x < 10} e B = {2, 4, 6, 8, 10}, qual é A ∩ B?",
    opcoes: [
      'a) {2, 4, 6, 8, 10}',
      'b) {2, 4, 6, 8}',
      'c) {1, 3, 5, 7, 9}',
      'd) {10}'
    ],
    correta: 'b) {2, 4, 6, 8}',
    svg: ''
  },
  {
    enunciado: "Se o conjunto universo é U = {1, 2, 3, 4, 5, 6} e A = {2, 4, 6}, qual é o complemento de A em U?",
    opcoes: [
      'a) {2, 4, 6}',
      'b) {1, 3, 5}',
      'c) {1, 2, 3, 4, 5}',
      'd) {}'
    ],
    correta: 'b) {1, 3, 5}',
    svg: ''
  },
  {
    enunciado: "Quantos subconjuntos possui o conjunto C = {a, b, c, d}?",
    opcoes: [
      'a) 8',
      'b) 12',
      'c) 16',
      'd) 4'
    ],
    correta: 'c) 16',
    svg: ''
  },
  {
    enunciado: "Se A = {1, 2, 3}, B = {3, 4, 5} e C = {1, 2, 5}, qual é (A ∪ B) ∩ C?",
    opcoes: [
      'a) {1, 2, 3, 4, 5}',
      'b) {1, 2, 5}',
      'c) {1, 2}',
      'd) {1, 2, 3}'
    ],
    correta: 'b) {1, 2, 5}',
    svg: ''
  },
  {
    enunciado: "Dado A = {x ∈ ℤ | -2 ≤ x ≤ 2} e B = {x ∈ ℤ | x > 0}, qual é A ∩ B?",
    opcoes: [
      'a) {-2, -1, 0, 1, 2}',
      'b) {0, 1, 2}',
      'c) {1, 2}',
      'd) {-2, -1, 0}'
    ],
    correta: 'c) {1, 2}',
    svg: ''
  },


    //TEMA:  Relações (reflexiva, simétrica, transitiva, equivalência).
    
    {
    enunciado: "Considere a relação R em ℝ definida por: xRy ⇔ x - y ∈ ℤ. Essa relação é:",
    opcoes: [
      'a) Reflexiva, mas não simétrica nem transitiva',
      'b) Simétrica, mas não reflexiva nem transitiva',
      'c) Reflexiva, simétrica e transitiva',
      'd) Nenhuma das alternativas'
    ],
    correta: 'c) Reflexiva, simétrica e transitiva',
    svg: ''
  },
  {
    enunciado: "Seja o conjunto A = {1, 2, 3} e a relação R = {(1,1), (2,2), (3,3), (1,2), (2,1)}. Essa relação é:",
    opcoes: [
      'a) Reflexiva e simétrica',
      'b) Simétrica e transitiva',
      'c) Apenas simétrica',
      'd) Reflexiva, mas não simétrica nem transitiva'
    ],
    correta: 'a) Reflexiva e simétrica',
    svg: ''
  },
  {
    enunciado: "Se a relação R em A = {a, b, c} é tal que aRb, bRc ⇒ aRc, então R é:",
    opcoes: [
      'a) Reflexiva',
      'b) Simétrica',
      'c) Transitiva',
      'd) Antissimétrica'
    ],
    correta: 'c) Transitiva',
    svg: ''
  },
  {
    enunciado: "Qual das seguintes propriedades é **essencial** para que uma relação seja de equivalência?",
    opcoes: [
      'a) Antissimetria',
      'b) Assimetria',
      'c) Simetria',
      'd) Irreflexividade'
    ],
    correta: 'c) Simetria',
    svg: ''
  },
  {
    enunciado: "Dada a relação R definida em ℝ por xRy ⇔ x = y², essa relação é:",
    opcoes: [
      'a) Reflexiva e simétrica',
      'b) Não é reflexiva, nem simétrica, nem transitiva',
      'c) Simétrica e transitiva',
      'd) Reflexiva e transitiva'
    ],
    correta: 'b) Não é reflexiva, nem simétrica, nem transitiva',
    svg: ''
  },
    //TEMA:  Funções (função injetora, sobrejetora, bijetora, composta, inversa).
    {
    enunciado: "Considere f: ℝ → ℝ definida por f(x) = 2x + 1. Essa função é:",
    opcoes: [
      'a) Apenas injetora',
      'b) Apenas sobrejetora',
      'c) Bijetora',
      'd) Nem injetora nem sobrejetora'
    ],
    correta: 'c) Bijetora',
    svg: ''
  },
  {
    enunciado: "Se f(x) = x² e g(x) = √x, ambas com domínio e contradomínio em ℝ⁺, então (f ∘ g)(x) é igual a:",
    opcoes: [
      'a) x',
      'b) √x',
      'c) x²',
      'd) 2x'
    ],
    correta: 'a) x',
    svg: ''
  },
  {
    enunciado: "Qual das opções representa corretamente a **inversa** da função f(x) = (x - 3)/2?",
    opcoes: [
      'a) f⁻¹(x) = 2x - 3',
      'b) f⁻¹(x) = (x + 3)/2',
      'c) f⁻¹(x) = 2x + 3',
      'd) f⁻¹(x) = (x - 2)/3'
    ],
    correta: 'a) f⁻¹(x) = 2x + 3',
    svg: ''
  },
  {
    enunciado: "Qual das alternativas caracteriza uma **função sobrejetora** f: ℝ → ℝ?",
    opcoes: [
      'a) Existe y ∈ ℝ tal que não há x ∈ ℝ com f(x) = y',
      'b) Todo y ∈ ℝ é imagem de pelo menos um x ∈ ℝ',
      'c) Cada x ∈ ℝ tem mais de uma imagem',
      'd) A função não possui inversa'
    ],
    correta: 'b) Todo y ∈ ℝ é imagem de pelo menos um x ∈ ℝ',
    svg: ''
  },
  {
    enunciado: "Se f: A → B é bijetora, então a inversa f⁻¹:",
    opcoes: [
      'a) Não existe, pois a função não é injetora',
      'b) Existe e também é bijetora',
      'c) Existe, mas não é função',
      'd) Existe, mas não é sobrejetora'
    ],
    correta: 'b) Existe e também é bijetora',
    svg: ''
  },

    //TEMA:  Sequências numéricas (aritméticas e geométricas). 

    {
    enunciado: "Qual é o 10º termo da progressão aritmética (PA) de razão 3 e termo inicial 2?",
    opcoes: [
      'a) 27',
      'b) 29',
      'c) 30',
      'd) 32'
    ],
    correta: 'b) 29',
    svg: ''
  },
  {
    enunciado: "A soma dos 20 primeiros termos da PA (5, 8, 11, ...) é:",
    opcoes: [
      'a) 590',
      'b) 600',
      'c) 610',
      'd) 620'
    ],
    correta: 'b) 600',
    svg: ''
  },
  {
    enunciado: "Qual é o 5º termo da progressão geométrica (PG): 2, 6, 18, ...?",
    opcoes: [
      'a) 54',
      'b) 72',
      'c) 162',
      'd) 486'
    ],
    correta: 'c) 162',
    svg: ''
  },
  {
    enunciado: "A razão de uma PG é 1/2 e o primeiro termo é 16. Qual é o 4º termo?",
    opcoes: [
      'a) 2',
      'b) 4',
      'c) 8',
      'd) 1'
    ],
    correta: 'b) 4',
    svg: ''
  },
  {
    enunciado: "Uma sequência tem o termo geral dado por an = 3n - 2. Essa sequência é:",
    opcoes: [
      'a) Uma PA de razão 1',
      'b) Uma PG de razão 3',
      'c) Uma PA de razão 3',
      'd) Uma PG de razão 2'
    ],
    correta: 'c) Uma PA de razão 3',
    svg: ''
  },
    ];


    const perguntas_nivel_3 = [

    //TEMA:  Conjuntos (definição, operações: união, interseção, complemento, subconjuntos).  
    {
    enunciado: "Se A = {x ∈ ℝ | x² < 4} e B = {x ∈ ℝ | x > 0}, qual é A ∩ B?",
    opcoes: [
      'a) (-2, 2)',
      'b) (0, 2)',
      'c) (-2, 0)',
      'd) (0, 4)'
    ],
    correta: 'b) (0, 2)',
    svg: ''
  },
  {
    enunciado: "Se A = {1, 2, 3}, B = {2, 3, 4} e C = {3, 4, 5}, qual é (A ∪ B) ∩ C?",
    opcoes: [
      'a) {3, 4}',
      'b) {2, 3}',
      'c) {2, 3, 4}',
      'd) {1, 2, 3, 4, 5}'
    ],
    correta: 'a) {3, 4}',
    svg: ''
  },
  {
    enunciado: "Qual é o complemento do conjunto A = {x ∈ ℕ | x < 10} em B = {x ∈ ℕ | x ≤ 15}?",
    opcoes: [
      'a) {10, 11, 12, 13, 14, 15}',
      'b) {1, 2, 3, 4, 5, 6, 7, 8, 9}',
      'c) {11, 12, 13, 14, 15}',
      'd) {6, 7, 8, 9}'
    ],
    correta: 'a) {10, 11, 12, 13, 14, 15}',
    svg: ''
  },
  {
    enunciado: "Se A = {x ∈ ℝ | x² ≤ 4} e B = {x ∈ ℝ | x ≥ -1}, qual é A ⊆ B?",
    opcoes: [
      'a) A está contido em B',
      'b) A não está contido em B',
      'c) A e B são subconjuntos do conjunto universo',
      'd) A é subconjunto próprio de B'
    ],
    correta: 'b) A não está contido em B',
    svg: ''
  },
  {
    enunciado: "Se A = {x ∈ ℝ | x > 1} e B = {x ∈ ℝ | x² - 4x + 3 = 0}, qual é A ∩ B?",
    opcoes: [
      'a) {1, 3}',
      'b) {2, 3}',
      'c) {1}',
      'd) {2}'
    ],
    correta: 'b) {2, 3}',
    svg: ''
  },


    //TEMA:  Relações (reflexiva, simétrica, transitiva, equivalência).
    {
    enunciado: "Considere a relação R em ℝ definida por: xRy ⇔ x² - y² = 0. Essa relação é:",
    opcoes: [
      'a) Reflexiva, mas não simétrica nem transitiva',
      'b) Reflexiva e simétrica, mas não transitiva',
      'c) Simétrica e transitiva, mas não reflexiva',
      'd) Reflexiva, simétrica e transitiva'
    ],
    correta: 'd) Reflexiva, simétrica e transitiva',
    svg: ''
  },
  {
    enunciado: "Seja A = {1, 2, 3, 4} e a relação R definida por: (x, y) ∈ R ⇔ x - y é divisível por 2. Essa relação é:",
    opcoes: [
      'a) Apenas reflexiva',
      'b) Reflexiva e simétrica, mas não transitiva',
      'c) Reflexiva, simétrica e transitiva',
      'd) Reflexiva e transitiva, mas não simétrica'
    ],
    correta: 'c) Reflexiva, simétrica e transitiva',
    svg: ''
  },
  {
    enunciado: "Se uma relação R em A é reflexiva, simétrica e transitiva, então R é:",
    opcoes: [
      'a) Uma relação de equivalência',
      'b) Uma relação antissimétrica',
      'c) Uma relação parcial',
      'd) Uma relação total'
    ],
    correta: 'a) Uma relação de equivalência',
    svg: ''
  },
  {
    enunciado: "Considere a relação R em ℝ definida por: xRy ⇔ x ≤ y. Essa relação é:",
    opcoes: [
      'a) Reflexiva, mas não simétrica nem transitiva',
      'b) Reflexiva e transitiva, mas não simétrica',
      'c) Simétrica e transitiva, mas não reflexiva',
      'd) Reflexiva, simétrica e transitiva'
    ],
    correta: 'b) Reflexiva e transitiva, mas não simétrica',
    svg: ''
  },
  {
    enunciado: "Se a relação R em A = {a, b, c, d} é dada por: R = {(a, a), (b, b), (c, c), (d, d), (a, b), (b, c), (c, d)}, então R é:",
    opcoes: [
      'a) Reflexiva, simétrica, mas não transitiva',
      'b) Reflexiva, transitiva, mas não simétrica',
      'c) Reflexiva, simétrica e transitiva',
      'd) Não é reflexiva nem transitiva'
    ],
    correta: 'b) Reflexiva, transitiva, mas não simétrica',
    svg: ''
  },

    //TEMA:  Funções (função injetora, sobrejetora, bijetora, composta, inversa).
   
    {
    enunciado: "Seja f: ℝ → ℝ dada por f(x) = 3x - 5 e g: ℝ → ℝ dada por g(x) = 2x + 1. Qual é o valor de (f ∘ g)(x)?",
    opcoes: [
      'a) 6x - 7',
      'b) 6x - 3',
      'c) 5x - 7',
      'd) 5x - 1'
    ],
    correta: 'a) 6x - 7',
    svg: ''
  },
  {
    enunciado: "Se f: A → B é uma função injetora e g: B → C é uma função sobrejetora, qual das alternativas é verdadeira para a composição (g ∘ f)?",
    opcoes: [
      'a) (g ∘ f) é injetora e sobrejetora',
      'b) (g ∘ f) é apenas injetora',
      'c) (g ∘ f) é apenas sobrejetora',
      'd) (g ∘ f) é bijetora'
    ],
    correta: 'c) (g ∘ f) é apenas sobrejetora',
    svg: ''
  },
  {
    enunciado: "Se f: ℝ → ℝ é dada por f(x) = 2x + 1 e g: ℝ → ℝ é dada por g(x) = x², qual das opções descreve a inversa de (f ∘ g)?",
    opcoes: [
      'a) (f ∘ g)⁻¹(x) = (x - 1)/2',
      'b) (f ∘ g)⁻¹(x) = √(x - 1)/2',
      'c) (f ∘ g)⁻¹(x) = √(x - 1)',
      'd) (f ∘ g)⁻¹(x) = (x - 1)/2²'
    ],
    correta: 'b) (f ∘ g)⁻¹(x) = √(x - 1)/2',
    svg: ''
  },
  {
    enunciado: "Se f: ℝ → ℝ é dada por f(x) = 5x - 7 e g: ℝ → ℝ é dada por g(x) = (x + 7)/5, qual é o valor de (f ∘ g)(x)?",
    opcoes: [
      'a) x',
      'b) x - 1',
      'c) x + 1',
      'd) 2x'
    ],
    correta: 'a) x',
    svg: ''
  },
  {
    enunciado: "Qual é a condição necessária para que uma função f: ℝ → ℝ seja bijetora?",
    opcoes: [
      'a) f deve ser injetora e sobrejetora',
      'b) f deve ser injetora e não pode ter inversa',
      'c) f deve ser sobrejetora, mas não injetora',
      'd) f deve ser injetora e possuir inversa não definida'
    ],
    correta: 'a) f deve ser injetora e sobrejetora',
    svg: ''
  },
    //TEMA:  Sequências numéricas (aritméticas e geométricas). 

    {
    enunciado: "Em uma progressão aritmética (PA) de razão r, o 5º termo é 17 e o 10º termo é 27. Qual é o valor de r?",
    opcoes: [
      'a) 2',
      'b) 1',
      'c) 2,5',
      'd) 1,5'
    ],
    correta: 'a) 2',
    svg: ''
  },
  {
    enunciado: "Se a soma dos 15 primeiros termos de uma PA é 540 e o 10º termo é 40, qual é o valor do primeiro termo?",
    opcoes: [
      'a) 20',
      'b) 25',
      'c) 30',
      'd) 35'
    ],
    correta: 'b) 25',
    svg: ''
  },
  {
    enunciado: "Dada a progressão geométrica (PG) com o primeiro termo 3 e a razão 2, qual é o valor do 7º termo?",
    opcoes: [
      'a) 192',
      'b) 128',
      'c) 96',
      'd) 64'
    ],
    correta: 'a) 192',
    svg: ''
  },
  {
    enunciado: "Qual é a soma dos 8 primeiros termos de uma progressão geométrica (PG) com primeiro termo 5 e razão 3?",
    opcoes: [
      'a) 1100',
      'b) 1210',
      'c) 1110',
      'd) 1150'
    ],
    correta: 'c) 1110',
    svg: ''
  },
  {
    enunciado: "Se a razão de uma progressão geométrica (PG) é 1/2 e o 4º termo é 24, qual é o primeiro termo?",
    opcoes: [
      'a) 96',
      'b) 48',
      'c) 32',
      'd) 16'
    ],
    correta: 'a) 96',
    svg: ''
  }
    ];