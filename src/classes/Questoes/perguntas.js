var perguntasMatrix = [
    [
        {
            enunciado: "Como declaramos uma string constante no código?",
            dificuldade: 1,
            alternativas: [
                "string: .asciiz \"Hello World\"",
                ".string \u201COla mundo\u201D",
                "const: .byte \u201CHello World\u201D",
                "define \u201COla Mundo\u201D .char"
            ],
            correta: 0
        },
        {
            enunciado: "Selecione a opção que possui a descrição correta da diretiva",
            dificuldade: 1,
            alternativas: [
                ".align 2: declara uma constante que ocupa 2 palavras de byte",
                ".const 3: declara um vetor constante de 3 inteiros",
                ".align 2: para o alinhamento de todas as palavras declaradas de 2 bytes",
                ".align 0: para a declara\u00E7\u00E3o de palavras de 1 byte"
            ],
            correta: 3
        },
        {
            enunciado: "O que o trecho add $t3, $t1, $t0 executa?",
            dificuldade: 1,
            alternativas: [
                "Adiciona o conte\u00FAdo do registrador $t3 em $t1 e $t0",
                "Faz o produto de $t1 por $t0 e salva em $t3",
                "Faz a soma de $t0 com $t1 e salva em $t3",
                "Soma os endere\u00E7os de $t1 e $t0 e salva o conte\u00FAdo em $t3"
            ],
            correta: 2
        },
        {
            enunciado: "Selecione a alternativa que define o comando move $t0, $t3",
            dificuldade: 1,
            alternativas: [
                "Troca os conte\u00FAdos dos registradores $t0 e $t3",
                "Copia o valor de $t0 em $t3",
                "Soma os dois registradores e salva o valor em $t0",
                "Copia o valor de $t3 em $t0"
            ],
            correta: 3
        },
        {
            enunciado: "Após rodar o comando li $v0, 3($t1) o que ficará armazenado em $v0?",
            dificuldade: 1,
            alternativas: [
                "Isso \u00E9 uma pegadinha",
                "O valor 3",
                "O valor contido em $t1",
                "O conte\u00FAdo do endere\u00E7o de $t1 com um shift de 3"
            ],
            correta: 0
        },
        {
            enunciado: "Selecione a alternativa que faz o jump para o rótulo “label” se o registrador $t3 for maior ou igual ao registrador $t0",
            dificuldade: 1,
            alternativas: [
                "bne $t0, $3, label",
                "bgt $t3, $t0, label",
                "ble $t0, $t3, label",
                "beq $t3, $t0, label"
            ],
            correta: 2
        },
        {
            enunciado: "Qual é a funcionalidade do trecho cvt.w.s $f0, $f0?",
            dificuldade: 1,
            alternativas: [
                "Converte $t0 para que seja float",
                "Converte $t0 para que seja inteiro",
                "Verifica se $f0 = 0, e ent\u00E3o faz o jump",
                "Verifica se $f0 possui uma parte decimal"
            ],
            correta: 1
        },
    ],
    [
        {
            enunciado: "O que significa o comando lw $a0, $a1?",
            dificuldade: 1,
            alternativas: [
                "Carrega o conte\u00FAdo do endere\u00E7o salvo em $a1 em $a0",
                "L\u00EA o widget de $a0 em $a1",
                "L\u00EA o valor de $a0 e confirma se \u00E9 igual a $a1",
                "Lista todos os valores de $a0 e $a1"
            ],
            correta: 0
        },
        {
            enunciado: "Selecione a alternativa que possui apenas comandos que não acessam a memória",
            dificuldade: 1,
            alternativas: [
                "bge, li, lw",
                "addi, sw, jal",
                "div, bne, mtc",
                "lb, addi, jr"
            ],
            correta: 2
        },
        {
            enunciado: "Qual é o possível problema de se usar uma recursão sem o uso de $ra?",
            dificuldade: 1,
            alternativas: [
                "Nenhum, e isso \u00E9 uma pegadinha",
                "Nunca sair da recurs\u00E3o",
                "Fica imposs\u00EDvel usar strings sem o registrador $ra",
                "Sem esse registrador n\u00E3o \u00E9 poss\u00EDvel encerrar o programa"
            ],
            correta: 1
        },
        {
            enunciado: "Selecione a alternativa que reserva na pilha o espaço para a inserção de três valores inteiros",
            dificuldade: 1,
            alternativas: [
                "addi $sp, $sp, -12",
                "lw $sp, 3($sp)",
                "li $sp, 3",
                "move $sp, $sp+12"
            ],
            correta: 0
        },
    ],
    [
        {
            enunciado: "As definições de arquitetura e organização são, respectivamente:",
            dificuldade: 1,
            alternativas: [
                "Conjunto de atributos vis\u00EDveis ao programador e como esses atributos est\u00E3o implementados",
                "Hardware (objetos tang\u00EDveis) e Software (objetos n\u00E3o tang\u00EDveis)",
                "Maneira na qual componentes relacionam-se entre si e opera\u00E7\u00E3o de componentes individuais",
                "Como os atributos vis\u00EDveis ao programador est\u00E3o implementados e o conjunto desses atributos em si"
            ],
            correta: 0
        },
        {
            enunciado: "São tipos de instrução, com respectivos exemplos:",
            dificuldade: 1,
            alternativas: [
                "Aritm\u00E9tica e Simples (add), de Controle de Fluxo (j) e de Compara\u00E7\u00F5es (beq)",
                "De Operandos L\u00F3gicos (addiu), de Uso da mem\u00F3ria (sb) e Imediata (li)",
                "De Uso da mem\u00F3ria (slt), de La\u00E7o de Repeti\u00E7\u00E3o (syscall) e Aritm\u00E9tica e Simples (and)",
                "De Compara\u00E7\u00F5es (slt), de Operandos L\u00F3gicos (ori) e de Controle de Fluxo (bne)"
            ],
            correta: 3
        },
        {
            enunciado: "São formatos de instrução:",
            dificuldade: 1,
            alternativas: [
                "M (mem\u00F3ria), D (desvio) e L (loop)",
                "R (registrador), I (imediato) e J (desvio)",
                "M (mem\u00F3ria), I (impress\u00E3o) e J (jump)",
                "I (impress\u00E3o), L (l\u00F3gica) e A (aritm\u00E9tica)"
            ],
            correta: 1
        },
        {
            enunciado: "São modos de endereçamento, com respectivos exemplos e tipos:",
            dificuldade: 1,
            alternativas: [
                "Imediato (add - Tipo I), Relativo ao PC (bne - Tipo I) e pseudo-direto (jal - Tipo J)",
                "Por Registrador (addi - Tipo R), com Base (lw - Tipo I) e Simples (or - Tipo L)",
                "Pseudo-direto (j - Tipo J), por Registrador (add - Tipo R) e Relativo ao PC (beq - Tipo I)",
                "Com Base (lw - Tipo J), Condicional (slt - Tipo I) e Imediato (add - Tipo R)"
            ],
            correta: 2
        },
        {
            enunciado: "Não é uma função do computador:",
            dificuldade: 1,
            alternativas: [
                "Computa\u00E7\u00E3o de dados",
                "Armazenamento de dados",
                "Movimento de dados",
                "Controle de mem\u00F3ria"
            ],
            correta: 3
        },
        {
            enunciado: "Não é um componente estrutural do computador:",
            dificuldade: 1,
            alternativas: [
                "Controlador Principal de Unidades (CPU)",
                "Mem\u00F3ria Principal",
                "Entradas e Sa\u00EDdas (E/S ou I/O)",
                "Sistemas de Interconex\u00E3o (Barramento)"
            ],
            correta: 0
        },
        {
            enunciado: "Não é um componente estrutural da CPU (Unidade Central de Processamento):",
            dificuldade: 1,
            alternativas: [
                "Registradores",
                "Unidade L\u00F3gica e Aritm\u00E9tica (ULA)",
                "Unidade Canalizadora (UC)",
                "Conex\u00E3o Interna na CPU (Barramento Interno)"
            ],
            correta: 2
        },
        {
            enunciado: "Não é um componente estrutural da UC (Unidade de Controle):",
            dificuldade: 1,
            alternativas: [
                "L\u00F3gica de Sequenciamento",
                "Mem\u00F3ria de Controle",
                "Registradores e Decodificadores da Unidade de Controle",
                "Instrutor de Registros (IR)"
            ],
            correta: 3
        },
    ],
    [
        {
            enunciado: "Qual das opções abaixo é a única pertencente ao ciclo de busca (fetch)?",
            dificuldade: 1,
            alternativas: [
                "No contador de programas (PC) estar\u00E1 o endere\u00E7o da instru\u00E7\u00E3o anterior a ser executada",
                "O processador faz a busca da instru\u00E7\u00E3o na posi\u00E7\u00E3o de mem\u00F3ria e armazena no PC",
                "O PC \u00E9 incrementado",
                "A instru\u00E7\u00E3o armazenada vem do registrador de instru\u00E7\u00E3o (IR)"
            ],
            correta: 2
        },
        {
            enunciado: "Qual das opções abaixo é a única não pertencente ao ciclo de execução?",
            dificuldade: 1,
            alternativas: [
                "Transfer\u00EAncia de dados do processador para a mem\u00F3ria ou da mem\u00F3ria para o processador (processador-mem\u00F3ria)",
                "Transfer\u00EAncia de dados entre processadores e outra entre dispositivos de E/S (processador-E/S)",
                "Execu\u00E7\u00E3o de opera\u00E7\u00F5es aritm\u00E9ticas ou l\u00F3gicas sobre os dados (processamento de dados)",
                "Especifica que a sequ\u00EAncia de execu\u00E7\u00E3o de instru\u00E7\u00F5es seja alterada (controle)"
            ],
            correta: 1
        },
        {
            enunciado: "Qual é a conversão correta de add $d, $s, $t para binário?",
            dificuldade: 1,
            alternativas: [
                "010000 ddddd ttttt sssss 00000 00000",
                "100000 ddddd sssss ttttt 00000 00000",
                "000000 ttttt sssss ddddd 10000 00000",
                "000000 sssss ttttt ddddd 00000 10000"
            ],
            correta: 3
        },
        {
            enunciado: "Quais são os bancos de registradores intermediários?",
            dificuldade: 1,
            alternativas: [
                "IF/ID, ID/EX, EX/MEM e MEM/WB",
                "ID/IF, IF/EX, EX/MEM e MEM/WB",
                "IF/MEM, MEM/ID, ID/EX e EX/WB",
                "ID/EX, EX/IF, IF/MEM e MEM/WB"
            ],
            correta: 0
        },
        {
            enunciado: "Quais são os tipos de dependências ou conflitos (hazards) do pipeline?",
            dificuldade: 1,
            alternativas: [
                "De Rotina, Condicionais e de Dados",
                "Estruturais, de Dados e de Controle",
                "De Controle, Temporais e de Acesso",
                "De Mem\u00F3ria, Estruturais e de Proced\u00EAncia"
            ],
            correta: 1
        },
        {
            enunciado: "Os passos mínimos numa arquitetura pipeline são, nesta ordem:",
            dificuldade: 1,
            alternativas: [
                "ID, IF, EX, MEM e WB",
                "IF, ID, EX, MEM e WB",
                "IF, MEM, ID, EX e WB",
                "ID, EX, IF, MEM e WB"
            ],
            correta: 1
        },
        {
            enunciado: "São técnicas de otimização implementadas de modo a reduzir ou eliminar as paradas devido às dependências estruturais, de dados e de controle, respectivamente:",
            dificuldade: 1,
            alternativas: [
                "Aumentar a disponibilidade de unidades funcionais, Forwarding e Delay Slots",
                "Escalonamento de instru\u00E7\u00F5es, Delay Slots e Forwarding",
                "Aumentar o n\u00FAmero de n\u00FAcleos de processamento, previs\u00E3o de desvios e escalonamento de instru\u00E7\u00F5es",
                "Previs\u00E3o de desvios, Delay Slots e Forwarding"
            ],
            correta: 0
        },
    ]
];
