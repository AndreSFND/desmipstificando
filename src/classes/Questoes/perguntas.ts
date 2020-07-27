interface perguntaAlternativa {
    enunciado: string;
    dificuldade: number;
    alternativas: string[];
    correta: number;
} 

// OBS : comentários temporários, pode ficar tranquilo que eles vão sair depois

/* Template para a pergunta : 

    { 
        enunciado: "", 
        dificuldade: 1, 
        alternativas: [
            ``,
            ``,
            ``,
            ``
        ],
        correta: 0
    },

*/
let perguntasMatrix: perguntaAlternativa[][] = 
[

    // Nivel 1: Código
    [

        { 
            enunciado: "Como declaramos uma string constante no código?", 
            dificuldade: 1, 
            alternativas: [
                `string: .asciiz "Hello World"`,
                `.string “Ola mundo”`,
                `const: .byte “Hello World”`,
                `define “Ola Mundo” .char`
            ],
            correta: 0
        },

        { 
            enunciado: "Selecione a opção que possui a descrição correta da diretiva", 
            dificuldade: 1, 
            alternativas: [
                `.align 2: declara uma constante que ocupa 2 palavras de byte`,
                `.const 3: declara um vetor constante de 3 inteiros`,
                `.align 2: para o alinhamento de todas as palavras declaradas de 2 bytes`,
                `.align 0: para a declaração de palavras de 1 byte`
            ],
            correta: 3
        },

        { 
            enunciado: "O que o trecho add $t3, $t1, $t0 executa?", 
            dificuldade: 1, 
            alternativas: [
                `Adiciona o conteúdo do registrador $t3 em $t1 e $t0`,
                `Faz o produto de $t1 por $t0 e salva em $t3`,
                `Faz a soma de $t0 com $t1 e salva em $t3`,
                `Soma os endereços de $t1 e $t0 e salva o conteúdo em $t3`
            ],
            correta: 2
        },

        { 
            enunciado: "Selecione a alternativa que define o comando move $t0, $t3", 
            dificuldade: 1, 
            alternativas: [
                `Troca os conteúdos dos registradores $t0 e $t3`,
                `Copia o valor de $t0 em $t3`,
                `Soma os dois registradores e salva o valor em $t0`,
                `Copia o valor de $t3 em $t0`
            ],
            correta: 3
        },

        { 
            enunciado: "Após rodar o comando li $v0, 3($t1) o que ficará armazenado em $v0?", 
            dificuldade: 1, 
            alternativas: [
                `Isso é uma pegadinha`,
                `O valor 3`,
                `O valor contido em $t1`,
                `O conteúdo do endereço de $t1 com um shift de 3`
            ],
            correta: 0
        },

        { 
            enunciado: "Selecione a alternativa que faz o jump para o rótulo “label” se o registrador $t3 for maior ou igual ao registrador $t0", 
            dificuldade: 1, 
            alternativas: [
                `bne $t0, $3, label`,
                `bgt $t3, $t0, label`,
                `ble $t0, $t3, label`,
                `beq $t3, $t0, label`
            ],
            correta: 2
        },

        { 
            enunciado: "Qual é a funcionalidade do trecho cvt.w.s $f0, $f0?", 
            dificuldade: 1, 
            alternativas: [
                `Converte $t0 para que seja float`,
                `Converte $t0 para que seja inteiro`,
                `Verifica se $f0 = 0, e então faz o jump`,
                `Verifica se $f0 possui uma parte decimal`
            ],
            correta: 1
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Assinale a opção para ser inserida no final do código que não armazenará no registrador $t3 o valor 5 :</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>addi $t3, $zero, 0</li>
                                <li>li $t0, 5</li>
                                <li>move $t1, $t3</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `move $t3, $t0`,
                `addi $t3, $zero, 5`,
                `add $t3, $t3, $t1`,
                `li $t3, 5`
            ],
            correta: 2
        },

        { 
            enunciado: "Escolha o comando que copia o conteúdo do registrador $f1, do tipo flutuante, para o registrador $f0", 
            dificuldade: 1, 
            alternativas: [
                `l.s $f0, 0($t1)`,
                `mov.s $f0, $f1`,
                `neg.s $f1, $f0`,
                `add.s $f0, $f1, $f1`
            ],
            correta: 1
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>O que este código faz?</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>li $v0, 4</li>
                                <li>la $a0, label_string</li>
                                <li>syscall</li>
                                <li>li $v0, 5</li>
                                <li>syscall</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `Chama a função de leitura de uma string e depois encerra o programa`,
                `Entra na função label_string e depois lê um inteiro`,
                `Faz a leitura de uma string e a imprime em seguida`,
                `Imprime uma string e depois lê um inteiro`
            ],
            correta: 3
        },

    ],

    // Nivel 2: Acesso à memória e códigos mais complexos
    [

        { 
            enunciado: "O que significa o comando lw $a0, $a1?", 
            dificuldade: 1, 
            alternativas: [
                `Carrega o conteúdo do endereço salvo em $a1 em $a0`,
                `Lê o widget de $a0 em $a1`,
                `Lê o valor de $a0 e confirma se é igual a $a1`,
                `Lista todos os valores de $a0 e $a1`
            ],
            correta: 0
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Escolha a opção a ser usada na próxima linha de código, de modo que o resultado da multiplicação seja escrito no mesmo endereço de leitura da memória</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>lw $t1, 0($t0)</li>
                                <li>mult $t1, $t1</li>
                                <li>mflo $t2</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `move $t0, $t2`,
                `lw $t1, 0($t2)`,
                `syscall`,
                `sw $t2, 0($t0)`
            ],
            correta: 3
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Escolha a opção que completa o código, de modo que o código saia do loop quando o registrador deixar de ser negativo</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>???</li>
                                <li>addi $t1, $t1, 1</li>
                                <li>j loop</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `blt $t1, $zero, fim_loop`,
                `move $t1, $zero`,
                `ble $zero, $t1, fim_loop`,
                `j fim_loop`
            ],
            correta: 2
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Escolha qual é a saída esperada para o código caso a entrada seja 47</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>li $a0, 42</li>
                                <li>li $v0, 5</li>
                                <li>syscall</li>
                                <li>move $a2, $v0</li>
                                <li>sub $a0, $a0, $a2</li>
                                <li>li $v0, 1</li>
                                <li>syscall</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `42`,
                `-5`,
                `-89`,
                `47`
            ],
            correta: 1
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Assinale a alternativa que define o que faz o seguinte bloco de código</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>addi $sp, $sp, -8</li>
                                <li>sw $a2, 0($sp)</li>
                                <li>sw $ra, 4($sp)</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `Alocação de memória na pilha`,
                `Laço de repetição`,
                `Condicional de desvio / jump`,
                `Diretiva para o montador`
            ],
            correta: 0
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Considere o seguinte código. Sabendo que ao entrar em loop $t0 guarda 5 e $a1 guarda 3, qual será o valor de $t0 em fim_loop ?</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px;'>
                                <li>li $t1, 1</li>
                                <li>loop:</li>
                                <li>&nbsp&nbsp&nbsp&nbsp ble $a1, $t1, fim_loop</li>
                                <li>&nbsp&nbsp&nbsp&nbsp mul $t0, $t0, $a1</li>
                                <li>&nbsp&nbsp&nbsp&nbsp addi $a1, $a1, -1</li>
                                <li>&nbsp&nbsp&nbsp&nbsp j loop</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `125`,
                `30`,
                `15`,
                `8`
            ],
            correta: 1
        },

        { 
            enunciado: "Selecione a alternativa que possui apenas comandos que não acessam a memória", 
            dificuldade: 1, 
            alternativas: [
                `bge, li, lw`,
                `addi, sw, jal`,
                `div, bne, mtc`,
                `lb, addi, jr`
            ],
            correta: 2
        },

        { 
            enunciado: "Qual é o possível problema de se usar uma recursão sem o uso de $ra?", 
            dificuldade: 1, 
            alternativas: [
                `Nenhum, e isso é uma pegadinha`,
                `Nunca sair da recursão`,
                `Fica impossível usar strings sem o registrador $ra`,
                `Sem esse registrador não é possível encerrar o programa`
            ],
            correta: 1
        },

        { 
            enunciado: "Selecione a alternativa que reserva na pilha o espaço para a inserção de três valores inteiros", 
            dificuldade: 1, 
            alternativas: [
                `addi $sp, $sp, -12`,
                `lw $sp, 3($sp)`,
                `li $sp, 3`,
                `move $sp, $sp+12`
            ],
            correta: 0
        },

        { 
            enunciado: "Escreva o comando que salva no registrador $t0 o endereço do label “rotulo”", 
            dificuldade: 1, 
            alternativas: [
                `li $t0, rotulo`,
                `sw $rotulo, 0($sp)`,
                `jal rotulo`,
                `la $t0, rotulo`
            ],
            correta: 3
        },

    ],

    // Nível 3: introdução a organização e arquitetura
    [

        { 
            enunciado: "As definições de arquitetura e organização são, respectivamente:", 
            dificuldade: 1, 
            alternativas: [
                `Conjunto de atributos visíveis ao programador e como esses atributos estão implementados`,
                `Hardware (objetos tangíveis) e Software (objetos não tangíveis)`,
                `Maneira na qual componentes relacionam-se entre si e operação de componentes individuais`,
                `Como os atributos visíveis ao programador estão implementados e o conjunto desses atributos em si`
            ],
            correta: 0
        },

        { 
            enunciado: "São tipos de instrução, com respectivos exemplos:", 
            dificuldade: 1, 
            alternativas: [
                `Aritmética e Simples (add), de Controle de Fluxo (j) e de Comparações (beq)`,
                `De Operandos Lógicos (addiu), de Uso da memória (sb) e Imediata (li)`,
                `De Uso da memória (slt), de Laço de Repetição (syscall) e Aritmética e Simples (and)`,
                `De Comparações (slt), de Operandos Lógicos (ori) e de Controle de Fluxo (bne)`
            ],
            correta: 3
        },

        { 
            enunciado: "São formatos de instrução:", 
            dificuldade: 1, 
            alternativas: [
                `M (memória), D (desvio) e L (loop)`,
                `R (registrador), I (imediato) e J (desvio)`,
                `M (memória), I (impressão) e J (jump)`,
                `I (impressão), L (lógica) e A (aritmética)`
            ],
            correta: 1
        },

        { 
            enunciado: "São modos de endereçamento, com respectivos exemplos e tipos:", 
            dificuldade: 1, 
            alternativas: [
                `Imediato (add - Tipo I), Relativo ao PC (bne - Tipo I) e pseudo-direto (jal - Tipo J)`,
                `Por Registrador (addi - Tipo R), com Base (lw - Tipo I) e Simples (or - Tipo L)`,
                `Pseudo-direto (j - Tipo J), por Registrador (add - Tipo R) e Relativo ao PC (beq - Tipo I)`,
                `Com Base (lw - Tipo J), Condicional (slt - Tipo I) e Imediato (add - Tipo R)`
            ],
            correta: 2
        },

        { 
            enunciado: "Não é uma função do computador:", 
            dificuldade: 1, 
            alternativas: [
                `Computação de dados`,
                `Armazenamento de dados`,
                `Movimento de dados`,
                `Controle de memória`
            ],
            correta: 3
        },

        { 
            enunciado: "Não é um componente estrutural do computador:", 
            dificuldade: 1, 
            alternativas: [
                `Controlador Principal de Unidades (CPU)`,
                `Memória Principal`,
                `Entradas e Saídas (E/S ou I/O)`,
                `Sistemas de Interconexão (Barramento)`
            ],
            correta: 0
        },

        { 
            enunciado: "Não é um componente estrutural da CPU (Unidade Central de Processamento):", 
            dificuldade: 1, 
            alternativas: [
                `Registradores`,
                `Unidade Lógica e Aritmética (ULA)`,
                `Unidade Canalizadora (UC)`,
                `Conexão Interna na CPU (Barramento Interno)`
            ],
            correta: 2
        },

        { 
            enunciado: "Não é um componente estrutural da UC (Unidade de Controle):", 
            dificuldade: 1, 
            alternativas: [
                `Lógica de Sequenciamento`,
                `Memória de Controle`,
                `Registradores e Decodificadores da Unidade de Controle`,
                `Instrutor de Registros (IR)`
            ],
            correta: 3
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <table border='1' style='font-size: .6em; color: var(--text-color); border: none; margin-right: 30px; width: 400px; text-align: center'>
                                <tr>
                                    <td>Fetch</td>
                                    <td>Decode</td>
                                    <td>Execute</td>
                                    <td>Memory</td>
                                    <td>Write back</td>
                                </tr>
                                <tr style='font-weight: normal;'>
                                    <td>300ps</td>
                                    <td>400ps</td>
                                    <td>250ps</td>
                                    <td>500ps</td>
                                    <td>100ps</td>
                                </tr>
                            </table>

                            <text>Dadas as latências, qual é o tempo de ciclo na versão monociclo?</text>

                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `1350ps`,
                `520ps`,
                `420ps`,
                `1550ps`
            ],
            correta: 3
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <table border='1' style='font-size: .6em; color: var(--text-color); border: none; margin-right: 30px; width: 400px; text-align: center'>
                                <tr>
                                    <td>Fetch</td>
                                    <td>Decode</td>
                                    <td>Execute</td>
                                    <td>Memory</td>
                                    <td>Write back</td>
                                </tr>
                                <tr style='font-weight: normal;'>
                                    <td>300ps</td>
                                    <td>400ps</td>
                                    <td>250ps</td>
                                    <td>500ps</td>
                                    <td>100ps</td>
                                </tr>
                            </table>

                            <text>Dadas as latências e, considerando que na versão pipeline cada estágio consome outros 20ps entre os estágios, qual é a latência de uma instrução na multiciclo?</text>

                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `2600ps`,
                `1850ps`,
                `1550ps`,
                `2400ps`
            ],
            correta: 0
        },

    ],

    // Nivel 4: Pipeline
    [

        { 
            enunciado: "Qual das opções abaixo é a única pertencente ao ciclo de busca (fetch)?", 
            dificuldade: 1, 
            alternativas: [
                `No contador de programas (PC) estará o endereço da instrução anterior a ser executada`,
                `O processador faz a busca da instrução na posição de memória e armazena no PC`,
                `O PC é incrementado`,
                `A instrução armazenada vem do registrador de instrução (IR)`
            ],
            correta: 2
        },

        { 
            enunciado: "Qual das opções abaixo é a única não pertencente ao ciclo de execução?", 
            dificuldade: 1, 
            alternativas: [
                `Transferência de dados do processador para a memória ou da memória para o processador (processador-memória)`,
                `Transferência de dados entre processadores e outra entre dispositivos de E/S (processador-E/S)`,
                `Execução de operações aritméticas ou lógicas sobre os dados (processamento de dados)`,
                `Especifica que a sequência de execução de instruções seja alterada (controle)`
            ],
            correta: 1
        },

        { 
            enunciado: "Qual é a conversão correta de add $d, $s, $t para binário?", 
            dificuldade: 1, 
            alternativas: [
                `010000 ddddd ttttt sssss 00000 00000`,
                `100000 ddddd sssss ttttt 00000 00000`,
                `000000 ttttt sssss ddddd 10000 00000`,
                `000000 sssss ttttt ddddd 00000 10000`
            ],
            correta: 3
        },

        { 
            enunciado: "Quais são os bancos de registradores intermediários?", 
            dificuldade: 1, 
            alternativas: [
                `IF/ID, ID/EX, EX/MEM e MEM/WB`,
                `ID/IF, IF/EX, EX/MEM e MEM/WB`,
                `IF/MEM, MEM/ID, ID/EX e EX/WB`,
                `ID/EX, EX/IF, IF/MEM e MEM/WB`
            ],
            correta: 0
        },

        { 
            enunciado: "Quais são os tipos de dependências ou conflitos (hazards) do pipeline?", 
            dificuldade: 1, 
            alternativas: [
                `De Rotina, Condicionais e de Dados`,
                `Estruturais, de Dados e de Controle`,
                `De Controle, Temporais e de Acesso`,
                `De Memória, Estruturais e de Procedência`
            ],
            correta: 1
        },

        { 
            enunciado: "Os passos mínimos numa arquitetura pipeline são, nesta ordem:",
            dificuldade: 1, 
            alternativas: [
                `ID, IF, EX, MEM e WB`,
                `IF, ID, EX, MEM e WB`,
                `IF, MEM, ID, EX e WB`,
                `ID, EX, IF, MEM e WB`
            ],
            correta: 1
        },

        { 
            enunciado: "São técnicas de otimização implementadas de modo a reduzir ou eliminar as paradas devido às dependências estruturais, de dados e de controle, respectivamente:", 
            dificuldade: 1, 
            alternativas: [
                `Aumentar a disponibilidade de unidades funcionais, Forwarding e Delay Slots`,
                `Escalonamento de instruções, Delay Slots e Forwarding`,
                `Aumentar o número de núcleos de processamento, previsão de desvios e escalonamento de instruções`,
                `Previsão de desvios, Delay Slots e Forwarding`
            ],
            correta: 0
        },

        { 
            enunciado: "São os registradores intermediários dos respectivos bancos", 
            dificuldade: 1, 
            alternativas: [
                `IF/ID: NCP e IR`,
                `ID/EX: A, B, C, Imm, NPC, IR[20..16] e IR[15..11]`,
                `EX/MEM: ALUOutput, BranchTarget, Rd e B`,
                `MEM/WB: ALUOutput, LMDB e Rd`
            ],
            correta: 2
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Considerando o código, que o pipeline tem 5 estágios e nenhum tratamento de dependências foi implementado, então existe hazard entre:</text>

                            <ul style='list-style: none; font-size: .7em; color: var(--text-color); margin-left: 80px; text-transform: none;'>
                                <li>I0: div $t2, $t5, $t8</li>
                                <li>I1: sub $t9, $t2, $t7</li>
                                <li>I2: add $t5, $t5, $a0</li>
                                <li>I3: mul $a1, $t9, $t5</li>
                                <li>I4: beq $t2, $a1, 100</li>
                                <li>I5: or $t8, $t5, $t2</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `I2 e I5`,
                `I1 e I3`,
                `I0 e I5`,
                `I0 e I4`
            ],
            correta: 1
        },

        { 
            enunciado:  `<div style='display: flex; flex-direction: row;'>

                            <text style='width: 60%'>Considerando o código e sendo “X” para quando o valor for irrelevante, os valores dos respectivos registradores no final do ciclo de clock de quando o pipeline enche completamente são:</text>

                            <ul style='list-style: decimal; font-size: .7em; color: var(--text-color); margin-left: 80px; text-transform: none;'>
                                <li>lw $t0, 0($sp)</li>
                                <li>sw $t1, 0($sp)</li>
                                <li>add $t2, $t3, $t4</li>
                                <li>and $t4, $t5, $t6</li>
                                <li>sw $t0, 4($sp)</li>
                            </ul>
                        
                        </div>`,
            dificuldade: 1, 
            alternativas: [
                `IF/ID.NPC: 12`,
                `ID/EX.Imm: 0`,
                `EX/MEM.BranchTarget: X`,
                `MEM/WB.Rd: X`
            ],
            correta: 2
        },

    ]

];