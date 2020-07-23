interface pergunta {
    enunciado: string;
    dificuldade: number;
    alternativas: string[];
    correta: number;
} 

let perguntasMatrix: pergunta[] = [

    // OBS : comentários temporários, pode ficar tranquilo que eles vão sair depois
    /* Template para a pergunta : 
    { enunciado : "B?", dificuldade : 1, alternativas :['b', 'b', 'b', 'b'], correta : 1 }
    */

    // Código

    // Fácil
    { enunciado: "O que significa o comando lw $a0, $a1 ?", dificuldade: 1, alternativas: ['Carrega o conteúdo do endereço salvo em $a1 em $a0', 'Lê o widget de $a0 em $a1', 'Lê o valor de $a0 e confirma se é igual a $a1 ', 'Lista todos os valores de $a0 e $a1'], correta: 0 },
    { enunciado: "Selecione a opção que possui a descrição correta da diretiva :", dificuldade: 1, alternativas: ['.align 2 : declara uma constante que ocupa 2 palavras de byte', '.const 3 : declara um vetor constante de 3 inteiros', '.align 2 : para o alinhamento de todas as palavras declaradas de 2 bytes', '.align 0 : para a declaração de palavras de 1 byte'], correta: 3 },
    { enunciado: "O trecho add $t3, $t1, $t0 executa o que?", dificuldade: 1, alternativas: ['Adiciona o conteúdo do registrador $t3 em $t1 e $t0', 'Faz o produto de $t1 por $t0 e salva em $t3', 'Faz a soma de $t0 com $t1 e salva em $t3', 'Soma os endereços de $t1 e $t0 e salva o conteúdo em $t3'], correta: 2 },
    { enunciado: "Sabemos que é possível o uso de variáveis com ponto flutuante na arquitetura MIPS, sendo assim, qual é a funcionalidade do trecho cvt.w.s $f0, $f0?", dificuldade: 1, alternativas: ['Converte $t0 para que seja float', 'Converte $t0 para que seja inteiro', 'Verifica se $f0 = 0, e então faz o jump', 'Verifica se $f0 possui uma parte decimal'], correta: 1 },
    { enunciado: "Qual é o possível problema de se usar uma recursão sem o uso de $ra?", dificuldade: 1, alternativas: ['Nenhum, e isso é uma pegadinha', 'Nunca sair da recursão', 'Fica impossível usar strings sem o registrador $ra', 'Sem esse registrador não é possível encerrar o programa'], correta: 1 },
    { enunciado: "Selecione qual alternativa define o comando move $t0, $t3 :", dificuldade: 1, alternativas: ['Troca os conteúdos dos registradores $t0 e $t3', 'Copia o valor de $t0 em $t3', 'Soma os dois registradores e salva o valor em $t0', 'Copia o valor de $t3 em $t0'], correta: 3 },
    { enunciado: "Após o trecho li $v0, 3($to que ficará armazenado em $v0?", dificuldade: 1, alternativas: ['Isso é uma pegadinha', 'O valor 3', 'O valor contido em $t1', 'O conteúdo do endereço de $t1 com um shift de 3'], correta: 0 },

    // Médio
    { enunciado: "Assinale a sequência de código que ao final não armazenará no registrador $t3 o valor 5 :", dificuldade: 2, alternativas: ['li $t0, 1\nli $t1, 2\nmult  $t1, $t1\nmflo  $t2\nadd $t3, $0, $t2', 'li $t0, 2\naddi $t3, $t0, 3', '$li $t0, 1\n$li $t3, 5\nadd $t2, $t3, $t0\nmove $t3, $t2', 'li $t0, 1\nmove $t3, $t0\nadd $t3, $zero, $t0\nadd $t3, $zero, $t0\nadd $t3, $zero, $t0\nadd $t3, $zero, $t0'], correta: 2 },
    { enunciado: "Leia o seguinte trecho de código e depois diga qual é a sua funcionalidade:\nli $v0, 4\nla $a0, string\nsyscall\n\nli $v0, 5\nsyscall", dificuldade: 2, alternativas: ['Chama a função de leitura de uma string e depois encerra o programa', 'Entra na função string e depois lê um inteiro', 'Lê uma string como se fosse um int, o que causa erro', 'Imprime uma string e depois lê um inteiro'], correta: 3 },
    { enunciado: "Assim como em outras linguagens, podemos usar condicionais. Selecione a alternativa que faz o jump para o rótulo “label” se o registrador $t3 for maior ou igual ao registrador $t0.", dificuldade: 2, alternativas: ['bne $t0, $3, label', 'bgt $t3, $t0, label', 'ble $t0, $t3, label', 'beq $t3, $t0, label'], correta: 2 },

    // Processador

    // Fácil
    { enunciado: "As definições de arquitetura e organização são, respectivamente :", dificuldade: 1, alternativas: ['Conjunto de atributos visíveis ao programador e como esses atributos estão implementados', 'Hardware (objetos tangíveis) e Software (objetos não tangíveis)', 'Maneira na qual componentes relacionam-se entre si e operação de componentes individuais', 'Como os atributos visíveis ao programador estão implementados e o conjunto desses atributos em si'], correta: 0 },
    { enunciado: "Selecione qual das opções abaixo é a única pertencente ao ciclo de busca (fetch):", dificuldade: 1, alternativas: ['No contador de programas (PC) estará o endereço da instrução anterior a ser executada', 'O processador faz a busca da instrução na posição de memória e armazena no PC', 'O PC é incrementado', 'A instrução armazenada vem do registrador de instrução (IR)'], correta: 2 },
    { enunciado: "Selecione qual das opções abaixo é a única <p>NÃO</p> pertencente ao ciclo de execução (execute):", dificuldade: 1, alternativas: ['Transferência de dados do processador para a memória ou da memória para o processador (processador-memória)', 'Transferência de dados entre processadores e outra entre dispositivos de E/S (processador-E/S)', 'Execução de operações aritméticas ou lógicas sobre os dados (processamento de dados)', 'Especifica que a sequência de execução de instruções seja alterada (controle)'], correta: 1 },
    { enunciado: "São tipos de instrução, com respectivos exemplos:", dificuldade: 1, alternativas: ['Aritmética e Simples (add), de Controle de Fluxo (j) e de Comparações (beq)', 'De Operandos Lógicos (addiu), de Uso da memória (sb) e Imediata (li)', 'De Uso da memória (slt), de Laço de Repetição (syscall) e Aritmética e Simples (and)', 'De Comparações (slt), de Operandos Lógicos (ori) e de Controle de Fluxo (bne)'], correta: 3 },
    { enunciado: "São formatos de instrução:", dificuldade: 1, alternativas: ['M (memória), D (desvio) e L (loop)', 'R (registrador), I (imediato) e J (desvio)', 'M (memória), I (impressão) e J (jump)', 'I (impressão), L (lógica) e A (aritmética)'], correta: 1 },
    { enunciado: "São modos de endereçamento, com respectivos exemplos e tipos:", dificuldade: 1, alternativas: ['Imediato (add - Tipo I), Relativo ao PC (bne - Tipo I) e pseudo-direto (jal - Tipo J)', 'Por Registrador (addi - Tipo R), com Base (lw - Tipo I) e Simples (or - Tipo L)', 'Pseudo-direto (j - Tipo J), por Registrador (add - Tipo R) e Relativo ao PC (beq - Tipo I)', 'Com Base (lw - Tipo J), Condicional (slt - Tipo I) e Imediato (add - Tipo R)'], correta: 2 },
    { enunciado: "A conversão correta de add $d, $s, $t para binário é:", dificuldade: 1, alternativas: ['010000 ddddd ttttt sssss 00000 00000', '100000 ddddd sssss ttttt 00000 00000', '000000 ttttt sssss ddddd 10000 00000', '000000 sssss ttttt ddddd 00000 10000'], correta: 3 },
    { enunciado: "Os bancos de registradores intermediários são:", dificuldade: 1, alternativas: ['IF/ID, ID/EX, EX/MEM e MEM/WB ', 'ID/IF, IF/EX, EX/MEM e MEM/WB', 'IF/MEM, MEM/ID, ID/EX e EX/WB', 'ID/EX, EX/IF, IF/MEM e MEM/WB'], correta: 0 },
    { enunciado: "Os tipos de dependências ou conflitos (hazards) do pipeline são:", dificuldade: 1, alternativas: ['De Rotina, Condicionais e de Dados', 'Estruturais, de Dados e de Controle', 'De Controle, Temporais e de Acesso', 'De Memória, Estruturais e de Procedência'], correta: 1 }

];