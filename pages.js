var pagTxt = [`Undefned`, 
    `Você segue a figura até as brumas envolventes. Ela pula para o assento do condutor do coche negro
    e a porta da carruagem se abre. Os corcéis empinamem expectativa, seu bufar tornando-se vapor no ar frio.<br><br>
    <strong>Escolha sua proxima ação:</strong>`, //1
    `Você abre as portas de bronze e caminha por um bem iluminado hall de entrada que se encontra deserto.
    Mosaicos de chão e tapeçarias de parede vermelhos e negros dão à câmara uma aparência sombria, e por um instante
    você pensa ter ouvido um tênue lamento...<br><br>
    Existem três saídas do hall.<br><br>
    <strong>Escolha sua proxima ação:</strong>`, //2
    `Você tem uma <strong>Espada Mágica</strong>?`, //3
    `Você morde os biscoitos açucarados e crocantes com sua fina e escura camada de chocolate - e alcança o centro macio de<br>
    sangue coagulado. A guloseima favorita do Conde, mas que o enoja e o deixa nauseado.<br><br>
    Você fica trêmulo de horror; <strong>perca 1 ponto de FÉ</strong>.`, //4
    `Assim que cruza o portal, você percebe um pentagrama no chão - tarde demais!
    Uma forma esfumaçada se materializa dentro dele, e um corcel espectral com olhos chamejantes, bafo de fogo e uma fumaça nauseante, 
    atira-se para a frente a fim de atacá-lo. Você não tem tempo de fugir - deve enfrentar o terrível <strong>Corcel Demônio</strong> do Conde.<br><br>
    Devido aos efeitos do bafo de fogo do Corcel você deve subtrair 2 pontos de sua HABILIDADE enquanto durar este combate`, //5
    `Durante cada Série de Ataque até que mate a Névoa Vampira, você <strong>perderá 1 ponto de ENERGIA</strong> pela drenagem de sangue.`, //6
    `Um raio de luar o atinge e você vê, com horror, que suas mãos estão cobertas
    por pelo! Sente seus dentes crescendo, e quase começa a uivar para a lua!
    Esta transformação é muito dolorosa - perca 3 pontos de ENERGIA.<br>
    Mude sua Licantropia para Aflição de Grande Licantropia em sua Folha de Aventuras.<br><br>
    <strong>Você examina a torre, à procura de alguma coisa que possa ajudá-lo</strong>.`, //7
    `Você enfia a chave na fechadura e empurra a porta de modo a abri-la.<br>
    Lá dentro, há uma fila de tumbas simples sem qualquer marca ou decoração, todas idênticas. Você tem uma sensação estranha; seus nervos estão
    formigando, e algumas gotas de suor escorrem de sua sobrancelha para dentro de um olho, fazendo-o piscar. Você coça os olhos para clarear a
    visão e, quando olha novamente, vê uma pálida figura fantasmagórica flutuando em sua direção, avisando-lhe que prossiga.<br>
    A aparição - aparentemente uma mulher - é jovem, de rosto lúgubre e parece muito determinada.<br><br>
    <strong>Você pode fugir ou andar em sua direção</strong>.`, //8
    `A criaturinha lhe pergunta se veio para ver seu mestre. Você confirma com a cabeça.<br>
    “Bem, então não fique aí parado, entre! Ele não está muito ocupado - tenho certeza que as poções logo estarão prontas!”<br>
    Você percebe que este é um laboratório de alquimia, e que a pequena criatura alada é mágica - um <strong>homúnculo</strong>.<br><br>
    Ele gesticula para a porta sul, a qual você abre.`, //9
    `Trêmulo após a luta, você olha o caixão. Vencendo seu medo, abre-o. Ele está vazio, a não ser por uma fina camada de terra seca e negra em seu fundo.
    Você o vira, jogando terra no chão, e quebra a madeira com o punho de sua espada. No quadro de Notas de sua Folha de Aventuras, anotamos que destruiu um dos caixões de<br>
    Reiner Heydrich!<br> <strong>Ganhe 1 ponto de FÉ</strong>. Você sai da câmara.<br><br>
    Pode tentar abrir a porta na <strong>ponta oeste do corredor</strong> ou seguir o corredor <strong>passando pela porta sul</strong>.`, //10
    `Você venceu os servos Mortos-Vivos.<br><br>
    <strong>Escolha sua proxima ação:</strong>`, //11
    `Você sente uma onda de bem-estar vinda do item abençoado.<br><br>
    <strong>Sua ENERGIA retoma para seu nível total</strong>!`, //12
    `Quando você se aproxima, um pequeno e envelhecido <strong>Gnomo</strong> corre de dentro de sua cabana para a luz cinzenta da madrugada e anda meio de lado até você,
    sorrindo de modo bastante malicioso. Ele lhe pede 2 Moedas de Ouro para levá-lo para o outro lado do rio, em seu barco, mas acrescenta que você
    pode ficar e dormir em sua cabana se o desejar - e você está muito cansado!<br><br>
    <strong>Escolha sua proxima ação:</strong>`, //13
    `Você já tem uma <strong>Espada Mágica?</strong>`, //14
    `Gunthar lhe dá um pouco de comida e vinho (recuperou 4 pontos de ENERGIA perdida) e lhe conta sobre seu trabalho como curandeiro. Ele está bem consciente da
    malevolência de seu irmão e denuncia Reiner como uma criatura cruel e vil. Mas Gunthar diz não ser um lutador, e de modo algum poderia matar o próprio irmão!<br>
    Gunthar parece esmagado pela maldade reinante no Castelo, quase em estado de desespero. Você corre o risco e diz que está aqui para acabar com Reiner Heydrich.
    Os olhos de Gunthar se iluminam de esperança, e ele diz que lhe dará a única coisa que possui que pode ajudá-lo. De dentro de um bolso cuidadosamente<br>
    escondido em seu manto, ele tira um crucifixo de prata preso em uma corrente, acrescentando que ele será necessário para destruir Reiner.<br>
    Crucifixo juntou-se a seus Equipamentos.<br>
    Você também precisará de uma estaca para perfurar o coração de Reiner quando ele estiver dormindo em seu caixão, mas Gunthar não tem nenhuma; você terá que
    encontrar uma em outro lugar.<br><br>
    “A menos, é claro, que encontre a espada de Siegfried, a Estrela da Noite, mas ela está perdida há muitos anos” suspira ele.<br><br>
    <strong>Escolha sua proxima ação:</strong>`, //15
    `A garota corresponde a seu beijo. Infelizmente, isto significa enterrar firmemente os dentes em seu pescoço!<br><br><strong>Perca 2 pontos de ENERGIA</strong>.<br><br>
    Você agora terá de enfrentar a garota; jogue um dado. O resultado é o número de Séries de Ataque que sua garganta continuará a sangrar, e você
    <strong>perderá 1 ponto de ENERGIA</strong> em cada Série enquanto durar o sangramento`, //16
    `Na presente situação, o único item útil é um Espelho Prateado. Ao ver o Espelho Prateado, Reiner vai recuar. Isto lhe dá tempo
     de jogar Água-benta sobre ele se puder e desejar fazê-lo, ou lançar-lhe um feitiço.<br>
     Após ter feito isso, você ainda terá um pouco de tempo extra, pois o Vampiro hesita
     diante do Espelho Prateado.<br> Você pode também dar um golpe de espada, causando-lhe a perda de 2 pontos de ENERGIA, e iniciando uma luta.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //17
     `Você abre a porta. Está muito escuro lá dentro e precisa de sua lanterna para conseguir enxergar. Dando uma olhadela, pode ver sacos de grãos e alguns ratos fujões.<br><br>
     Há uma porta na parede oeste deste depósito.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //18
     `A nuvem de gás passa lentamente por trás de uma tapeçaria na parede e lhe revela uma porta secreta. Abrindo-a, você descobre o último dos caixões de Reiner Heydrich;
     retirando-lhe a tampa, descobre o corpo do Vampiro, que se recompõe lentamente.<br>
     Se você tem um <strong>Crucifixo</strong> ou o <strong>Escudo da Fé</strong>,
     e também uma <strong>Estaca</strong> ou a <strong>Espada Mágica, Estrela da Noite</strong>
     saberá o que fazer.`, //19
     `Você já conhece os artifícios de Katarina; ela tentou controlá-lo antes, mas você resistiu a ela na primeira vez - e é imune a quaisquer outros truques!<br><br>
     Você ataca com sua espada, causando-lhe a <strong>perda de 2 pontos de ENERGIA.</strong>`, //20
     `Após ter vencido Wilhelm, você olha a incrível desordem reinante nesses aposentos.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //21
     `O Thassaloss Maior é o mais poderoso de todos os guardiões do Conde. Quando enfrentá-lo, deve, em cada Série de Ataque, jogar mais um dado além dos dois 
     dados usados em combate normal. Se o resultado for 1-5, um raio verde de frio intenso, saído das órbitas vazias do monstro, o enregela e você perde 1 ponto de ENERGIA.<br>
     Você só evita esse raio se o resultado for 6. Isso ocorrendo, não importa quem tenha a maior Força de Ataque da Série de Ataque, portanto, o Thassaloss é um inimigo formidável!`, //22
     `Água-benta não causa ferimentos em Katarina, já que ela não é de fato um Vampiro! Ela se agacha para evitar o vidro lançado e não tem tempo de contra-atacar. 
     Lute com sua espada; se estiver usando Nightstar, pode exigir um bônus de apenas 1 ponto de HABILIDADE com esta espada.`, //23
     `Suas mãos conseguem agarrar um arbusto na beirada do precipício rochoso, e isto o salva da morte certa, nas rochas pontiagudas lá embaixo. 
     Você se ergue e, todo trêmulo, segue a estrada em direção ao Castelo.<br><br>
     <strong>Há uma longa caminhada pela frente, portanto, jogue um dado.</strong>`, //24
     `Você examina os aposentos de Lothar, e após um certo tempo, encontra uma alcova escondida na parede, de dentro da qual retira uma Estaca de Prata e as Chaves do Castelão; 
     acrescente os dois objetos a seus Equipamentos. Você pode levar o Livro das Espadas para Katarina Heydrich ou siga para a porta no final sul do corredor para ir embora.`, //25
     `Você tem uma <strong>Espada Mágica</strong>?`, //26
     `Quando atravessa cuidadosamente a soleira da porta, passa por um fio muito fino e extremamente bem escondido e o alarme soa, avisando o homem. 
     Ele acorda e, não sem razão, avança sobre você com sua faca muito bem afiada; <strong>perca 2 pontos de ENERGIA</strong>.
     <br><br>
     Você agora pode atacá-lo ou tentar conversar com ele - afinal, você ainda não o atacou, então ele pode até ouvi-lo.`, //27
     `Antes que você acabe com ela, a detestável coisa morta-viva se transforma em uma nuvem de gás e flutua para longe!<br><br>
     <strong>Você pode lançar um feitiço de Parede de Força se tiver.</strong>`, //28
     `Qual feitiço deseja usar?`, //29
     `O Ghoul monstruosamente grande se afasta de você, pingando saliva de seus restos de dentes enegrecidos.<br><br>
     <strong>Você pode subir a escada de pedra oposta à porta ou pode atacar o Ghoul que recua.</strong>`, //30
     `O corredor vira para sul, e você vê quatro portas a sua frente: duas para leste, uma para oeste e outra no fim do corredor, observando-o.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //31
     `Com o símbolo da cruz no Crucifixo ou o Escudo da Fé, seguro diante de seu corpo, você enfia a ponta da Estaca ou de Nightstar no coração do Conde Reiner Heydrich. 
     Manchas de sangue negro espalham-se sobre a seda branca que cobre o caixão e sobre suas mãos, mas você não relaxa seu golpe. 
     Um guincho medonho sai da boca dele e as mãos, como garras, do Vampiro moribundo, agarram nas bordas do caixão, mas as soltam devagar. O corpo lentamente se transforma em pó. 
     Finalmente o Conde juntou-se no inferno a seus ancestrais vampirescos.<br><br>
     <strong>Ganhe 2 pontos de FÉ e 2 pontos de SORTE!</strong>`, //32
     `Quando você entra no sino da torre, um bando de morcegos se levanta e começa a voar diante de seu rosto.<br><br>
     <strong>Você deve Testar sua Sorte</strong>.`, //33
     `Você entra em uma suíte ricamente decorada, com mobílias cobertas com plush, carpetes, tapetes, tapeçarias e pinturas exóticas, e sacos cheios de pratos de ouro, 
     cálices transbordantes de pedras preciosas, garrafas decorativas, ornamentos... este lugar está cheio de riquezas! Nele também há uma pessoa. 
     Reclinada preguiçosamente em uma poltrona de braços, semelhante a um trono, e em meio a almofadas de couro, encontra- se uma jovem mulher surpreendentemente bela; 
     seus cachos, negros e soltos, cobrem seus ombros e lhe emolduram o rosto fino e muito pálido. Um bracelete de esmeraldas circunda-lhe o pulso quando ela levanta um 
     braço de dentro das dobras do vestido negro e gesticula para que você se aproxime.<br>
     “É de bom tom bater primeiro, mas pode entrar” murmura Katarina Heydrich 
     em uma voz rouca e sedutora.<br><br>
     <strong>Você vai atacá-la ou conversar com ela?</strong>`, //34
     `“Você possui tudo que é necessário para destruir Reiner em seu caixão” diz-lhe suavemente o fantasma, “mas pode enfrentá-lo?”<br><br>
     Você tem o Livro das Espadas?`, //35
     `Pode tentar negociar com Karl-Rinna se assim o desejar; mas é preciso que Teste sua Sorte para fazê-lo. 
     Se for azarado, ou se não desejar arriscar-se em ofender Karl-Rinna ao tentar pechinchar, pode escolher simplesmente alegar pobreza e oferecer-lhe um pagamento mais baixo.`, //36
     `Tentar parar o barulho tocando no teclado não o leva a lugar nenhum, e você <strong>perde 1 ponto de ENERGIA</strong> devido às mordidas de rato que levou, enquanto fazia essa tentativa!
     <br><br>
     <strong>Escolha sua proxima ação:</strong>`, //37
     `O dedo indicador da mão é levantado, de modo dolorosamente lento, e ele aponta para o sul. Pelo canto do olho, você vê uma cabeça humana presa, 
     abrindo e fechando os olhos, aparentemente tentando falar, mas ela nada pode dizer. 
     Novamente o dedo aponta para o sul e; por um instante, você pensa poder ouvir uma voz sussurrante dizer:<br>
     “Socorro.”<br>
     Então, os braços caem sem vida e a cabeça não se move. Isto é enervante; você <strong>perde 1 ponto de FÉ</strong> e abandona imediatamente sua busca.<br><br>
     <strong>Você agora vai abrir a porta sul da junção em forma de T ou a porta sul?</strong>`, //38
     `Os lobos param para devorar a comida; reduza 2 refeições de suas Provisões. Você fecha a porta atrás de você.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //39
     `Você pega as 4 Moedas de Ouro que estão sobre a mesa e um pouco de comida da bem provida despensa (mais 4 Provisões somadas á sua Folha de Aventuras).<br><br>
     Você agora pode entrar no barco ou atravessar o rio.`, //40
     `Você retorna para Katarina. Ela ronrona feliz com as notícias sobre a morte do Castelão. Pega o Livro das Espadas e lança um feitiço sobre ele. 
     Chamas mágicas azuis atingem o tomo, mas ele não queima. Em vez disso, um estranho som retumbante ergue-se dele. 
     Então o livro some e em seu lugar fica - nada! Katarina olha, horrorizada.<br>
     “Maldito Reiner! Ele anulou meu contrafeitiço!” esbraveja ela.<br>
     Seu rosto fica contorcido pela raiva.<br><br>
     De repente, você se aterroriza com o que ela possa fazer em sua fúria e foge, seguindo para a porta na ponta sul do corredor.`, //41
     `Como a névoa está a sua volta, é fácil atingi-la; some 1 ponto a sua HABILIDADE enquanto enfrenta a <strong>Névoa Vampira</strong>.<br><br>
     Se for atingido duas vezes, haverá consequências.`, //42
     `Você coloca a grande chave de ferro na fechadura maciça e o pesado portão se abre. Descendo, a escuridão é profunda e você precisa de uma fonte de luz: 
     sua lanterna ou uma Espada Mágica, se tiver uma. Você desce os degraus de pedra, cobertos de poeira e cortados entre paredes cheias de teias e de limo. 
     As paredes têm uma decoração pálida e, em intervalos, rostos de gárgulas parecem olhá-lo de soslaio, ou é sua imaginação? Ratos correm ao longe; 
     quando chega a um túnel no final dos degraus, nota uma pequena pilha de ossos que eles deviam estar remexendo. Não parecem ser ossos humanos. Com um arrepio, 
     você caminha até chegar a uma porta, e a abre com suas chaves. A sua frente está um corredor no qual podem ser vistas portas e alcovas um pouco distantes.<br><br>
     <strong>Você agora deve Testar sua Sorte.</strong>`, //43
     `A Aparição recua guinchando, seus braços como garras movendo o ar, próximo a seu rosto, mas sua FÉ o protege! 
     Você agora vê uma escada de madeira em espiral que sobe nesta câmara vazia e poeirenta. Você poderia escapar da Aparição por este caminho com facilidade; 
     porém, já que ela é um ser do mal, você preferiria destruí-la. Você ouviu dizer, contudo, que somente uma arma mágica pode ferir uma Aparição, então, 
     se não possui nenhuma, pode ser perigoso atacá-la!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //44
     `Você abre a porta da sala de estar do Conde Reiner Heydrich. Ricas paredes de nogueira e mobília de carvalho lhe informam que ele pelo menos é uma pessoa de bom gosto. 
     Mas você não tem tempo a perder para se preocupar com detalhes, pois dois de seus bichinhos de estimação correm para atacá-lo, 
     uma horrenda Doninha Vampira e um maléfico <strong>Morcego Vampiro Chifrudo</strong> com asas de couro!<br>
     Enfrente o Morcego normalmente. A cada Série de Ataque, enquanto estiver enfrentando o morcego, deve jogar também um dado além dos dados de combate normais. 
     Se o resultado for 5 ou 6, a pequena e detestável doninha afundou suas presas em sua perna; perca 2 pontos de ENERGIA por causa da mordida. 
     Pior ainda, a doninha suga seu sangue; para cada Série de Ataque subsequente, a drenagem de sangue causa- lhe a perda de 1 ponto de ENERGIA.<br>
     Uma vez morto o morcego, a doninha fugirá.<br>
     Se o morcego mordê-lo duas vezes, haverá consequências`, //45
     `Você quase é pego de surpresa por uma forma humana fantasmagórica que avança silenciosamente pelo quarto para atacá-lo! 
     O malicioso e odiento Espectro é o mais poderoso dos servos mortos-vivos do Conde e você terá que enfrentá-lo!<br><br>
     Você tem uma <strong>Espada Mágica</strong>?`, //46
     `Após um exame cuidadoso, você encontra uma porta secreta na passagem da parede norte, a uns 3 metros da porta, no final da passagem. 
     Você a abre e entra em uma câmara vazia, com uma porta semi-aberta na parede leste. Dois Zumbis carregando alabardas encontram-se de guarda - sua FÉ não vai protegê-lo 
     contra esses guardas sem mentes, porém incansavelmente treinados!<br><br>
     <strong>Enfrente os Zumbis no batente, um de cada vez</strong>.`, //47
     `Gunthar parece nervoso. Ele diz que qualquer magia que usasse para ajudar alertaria Katarina, que pode ser muito perigosa... ele reluta visivelmente. 
     Você tem o <strong>Livro dos Curandeiros</strong>?<br>`, //48
     `Infelizmente, seu olhar fixa o quadro do Conde por muito tempo, e os olhos dele o queimam, mantendo-o fascinado.<br><br>Você tem uma 
     <strong>Aflição de Licantropo</strong>?`, //49
     `Você ronda a construção cuidadosamente. Aproximou-se do sul e pode perceber algumas características do que lhe parece ser um depósito duplo. 
     Nos cantos sudoeste e sudeste estão as torres, cujas espirais agigantam-se sobre os tetos de ardósia das paredes de pedras. 
     Morcegos entram e saem voando do campanário da torre. As pequenas janelas das torres são muito altas e muito estreitas para subir-se por elas. 
     Você pode ver luzes no andar térreo através das janelas nos lados oeste e leste, mas pesadas cortinas evitam que veja qualquer coisa dentro do Castelo em si.<br><br>
     Jogue um dado e some 3.<br><br>
     <strong>Um teste de FÉ</strong>.`, //50
     `Verificando cuidadosamente, você encontra uma pequena porta secreta em uma parede; ela esconde uma reentrância, da qual você retira um escudo branco com uma cruz vermelha. 
     Este é o Escudo de Fé; ganhe 1 ponto de FÉ e 1 ponto de SORTE por tê-lo encontrado e acrescente-o a seus Equipamentos.<br>
     Você agora deve sair da torre, pegar o hall de entrada e lá abrir a porta norte.`, //51
     `Você está com um problema desesperador, lutando contra uma das mais poderosas criações mágicas do Conde, um Thassaloss Menor. 
     Você deve subtrair 2 pontos de sua HABILIDADE enquanto estiver neste combate, pois ainda está parcialmente cego devido aos efeitos do clarão mágico.<br>
     Em cada Série de Ataque, jogue um dado além dos dois dados usuais de combate. Se o resultado do terceiro dado for 1-3, o Thassaloss o atingirá com um estonteante 
     raio verde de frio que sai de suas órbitas vazias e brilhantes e você então perderá 1 ponto de ENERGIA. Se o resultado for 4-6, você tem tempo de evitar o raio. 
     O Thassaloss pode congelá-lo até mesmo quando a Força de Ataque dele for menor que a sua, ele portanto é um poderoso inimigo!<br><br>
     Se vencer, pode examinar esta câmara ou ir embora, na esperança de encontrar oponentes menos formidáveis em qualquer outro lugar.`, //52
     `O vinho branco é o magnífico Chardonnay da Mauristatia: seco, frio e com a mais leve sugestão de pétillance! Você se sente bastante refrescado e 
     recupera 4 pontos de ENERGIA.<br><br>
     Agora pode tentar mordiscar os biscoitos de aparência apetitosa ou então ir para a porta oeste.`, //53
     `Você abre as portas de um covil de lobos, e dois grandes lobos fitam-no e lambem os "beiços"!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //54
     `Neste aposento há somente uma grande arca de carvalho no alto de uma mesa. Ela está seguramente trancada e fechada, mas você consegue abri-la com as chaves do Castelão. 
     Porém, a tampa ainda assim não abrirá! Você vê uma placa prateada na arca com algum tipo de código escrito nela, e a investiga para ver se consegue encontrar 
     um meio de levantar a tampa da arca.`, //55
     `Você sente um brilho quente emanar do globo quando o segura, <strong>recupere 3 pontos de ENERGIA</strong>. Mas, curiosamente, Siegfried parece desapontado com você.`, //56
     `Quando você mata o pequeno homúnculo, ouve-se um dos grandes vasos de vidro explodir e você é encharcado por ácido borbulhante: perca 5 pontos de ENERGIA. 
     Há um grande barulho no laboratório, e alguns equipamentos começam a agitar-se de modo estrondoso. Se ainda estiver vivo, 
     saia pelo caminho que entrou e corra até a ponta extrema do corredor para conseguir fugir. Lá existe uma porta à esquerda, a qual você abre.`, //57
     `Você abre a porta que dá para um pequeno depósito de linho e vê uma grande, e provavelmente venenosa, aranha rastejando no meio do tecido engomado!<br>
     Você fecha a porta rapidamente voltando ao corredor.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //58
     `Você fecha a porta atrás de si. Quando olha para norte, vê uma trilha gosmenta de muco amarelo esverdeado que segue de sob a porta ao norte!<br>
     Você rapidamente abre a porta a leste e entra.`, 
     `Você abre a porta para uma câmara tipo depósito, coberta de teias, e que está cheia de cacarecos. 
     Se você a examinar, correrá o risco de ser surpreendido por alguém que entre no hall principal.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, 
     `Siegfried diz que, enquanto uma estaca pode matar Reiner se ela for enfiada diretamente em seu coração, sua arma atual não pode afetá-lo durante um combate; você tem 
     que ter uma Espada Mágica. Tal arma existe, com certeza nem de perto tão poderosa quanto a do próprio Siegfried, na tumba de Adolf, um Senhor do Castelo no passado distante.
     <br><br>
     Esta tumba fica para leste da junção em T, então você parte e segue para lá.`, 
     `De repente, a garota fica de pé, os braços estendidos, com a cabeça jogada para trás. Ela grita!<br>
     Jogue um dado e some 4.<br>
     <strong>Um teste de FÉ</strong>.`, //62
     `O Conde flutua para longe, para trás de algumas tapeçarias - você examina, mas não consegue encontrar nenhuma passagem! 
     Você sabe que os vampiros podem se regenerar, e sabe também que ainda não o matou e que ele não demorará muito para voltar! Você tem tempo para realizar quatro - 
     e <strong>apenas</strong> quatro - ações. Decida quais serão.<br>
     Pode comer uma refeição (que leva duas ações e você só poderá devorar uma refeição nesse meio tempo);<br>
     beber uma Poção de Cura ou de conhaque restaurador (uma ação por bebida);<br>
     soltar a garota com suas chaves (duas ações);<br>
     lançar um feitiço do tipo Cura Real ou Feitiço de Sorte (um ação para cada feitiço lançado)<br>
     ou pegar um objeto em sua mochila (uma ação por item que queira pegar).`, //63
     `Valderesse ergue o Gnomo pela camisa e o segura no alto, enquanto fala com ele, cara a cara.<br>
     “Leve meu amigo para o outro lado do rio, Snivel, de graça. Você me deve um favor por manter aqueles lobos longe de você na semana passada!”<br>
     Voltando-se em sua direção, ela murmura que Snivel não é do tipo de Gnomo cuja oferta de hospitalidade deveria ser aceita. 
     Existe uma cabana de guarda-florestal ao longo da trilha e lá você poderá descansar em segurança. Ela desce o Gnomo e ele o adula e bajula. 
     Você sobe em seu barco e ele murmura algumas palavras que não consegue entender. O barco se move para a frente, contra a corrente, indo para o meio do rio! 
     Valderesse acena-lhe um adeus, quando você desce em segurança na margem oposta.`, //64
     `Gastar tempo examinando os foles de ar de um órgão grande, desconhecido, enquanto está sendo mordido por malévolos ratos, não é exatamente um negócio simples.<br>
     <strong>Perca 3 pontos de ENERGIA</strong> devido às mordidas, antes de desistir e correr para a porta norte.`, //65
     `A mulher que se encontra a sua frente é alta e magra, com esvoaçantes cabelos negros e misteriosos olhos verdes-esmeralda. 
     Ela é adorável, mas muito pálida; a cor marmórea de sua pele é enfatizada pelo vestido negro que usa jóias de prata fria e esmeraldas brilhantes a adornam. 
     Esta é <strong>Katarina Heydrich</strong>, a irmã do Conde, que olha nos seus olhos profundamente!`, //66
     `Você está se aproximando da porta quando os ratos começam a guinchar, e então correm para atacá-lo! Eles são muitos para que os enfrente.<br>
     Você pode abrir a porta oeste e passar por ela ou recuar de volta até o pátio.`, //67
     `Katarina sorri-lhe sedutoramente; você fica encantado e sabe que tem que fazer exatamente o que ela deseja. 
     Você concorda em assassinar o Castelão e segue-lhe as direções: parta, vá para sul e pegue a segunda porta para leste.`, //68
     `Você venceu o Vampiro, mas não tem poder suficiente rara destruí-lo até o fim. Enquanto observa, pensa poder ver um sorriso formar-se lentamente em seu rosto, 
     e um pequeno fio de sangue corre, lentamente por seu rosto, quando suas presas são reveladas pelos lábios, mortalmente pálidos, que se erguem lentamente. 
     Você liberta Nastassia, se ainda não o tiver feito, e juntos correm para salvar suas vidas. Apesar de todos os tropeções e quedas, finalmente voltam a Leverhelven. 
     O povo fica feliz por ver Nastassia novamente, mas quando as pessoas sabem que o Conde ainda vive, caem em silêncio e balançam suas cabeças, em desespero. 
     Sua aventura pode ter terminado, mas sua busca não foi completada.<br><br>
     <strong>Você falhou em sua missão.</strong>`, //69
     `O Ghoul pula sobre você com garras cheias de sujeira e sangue, seu bafo rançoso e quente atingindo-lhe o rosto. 
     Seus olhos são infernos, em miniatura, de ódio flamejante e fome por carne viva!<br><br>
     Se o Ghoul acertá-lo três vezes haverá consequências.`, //70
     `Você tem uma <strong>Espada Mágica</strong>?`, //71
     `O Conde Heydrich enfia as presas em sua garganta e suga, avidamente, seu sangue quente e forte.<br>
     Você perde a consciência, mas logo você levantará dos mortos, como um servo sem mente!`, //72
     `Enquanto caminha pela noite, usando sua lanterna para iluminar o caminho, pode ouvir lobos uivando, nesta noite úmida e enevoada. 
     A brilhante luz da lua, às vezes, esgueira- se por entre a densa neblina e as nuvens pesadas, para mostrar-lhe alguns detalhes do que está fora do 
     caminho e do pequeno círculo de luz quente lançado por sua lanterna. Quando os uivos ficam mais próximos, um desses clarões de luar revela dois lobos bem à sua frente. 
     Eles são espécimes grandes, com pelo cinzento, olhos amarelados e focinhos arreganhados - e estão saltando sobre você!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //73
     `“Para destruir Reiner, você precisa de um Crucifixo e de uma Estaca” diz Siegfried.<br> 
     “Pegue este globo e fixe em seu olho mental a imagem de uma cruz de prata.”<br>
     Você assim o faz, fechando os olhos para ajudar em sua concentração; quando os abre, a bola se foi, mas em suas mãos está um pequeno crucifixo de prata! 
     O mesmo foi acrescentado à sua Lista de Equipamentos.`, //74
     `Você pensa sobre o que dizer, mas o Sábio fala livremente, por si mesmo. Na maior parte do tempo comenta como o Conde é malvado e como ele - o Sábio - 
     necessita de mais dinheiro para livros. Você percebe que terá de pagar por informações, e que não vai ser barato. Enquanto se pergunta quanto lhe oferecer, e como 
     fazê-lo de modo educado, o Sábio anuncia de repente: “É claro, por uma boa quantia em ouro eu poderia levá-lo à biblioteca. Quem sabe o que se pode encontrar lá?” 
     Você pode perguntar ao Sábio sobre vários assuntos, mas terá que pagar para conseguir cada resposta. Ele aceitará Moedas de Ouro, ou quaisquer itens de Tesouro de igual 
     valor. Você pode escolher perguntar-lhe o que desejar da lista que se segue, mas tem que pagar por cada resposta. O Sábio exige pagamento adiantado e ele não pechincha!<br><br>
     <strong>Você pode perguntar sobre:</strong>`, //75
     `O Conde é, de modo incomum, resistente a esta magia.<br><br>
     <strong>Jogue um dado.</strong>`, //76
     `Você rapidamente percebe que o homem é forte, ágil e astuto. Você enfrenta um oponente muito perigoso!<br><br>
     Se sobreviver, e se não tiver dormido na cabana do Gnomo, terá que dormir aqui; você não será perturbado, e recuperará 4 pontos de ENERGIA pelo descanso.<br>
     Você pode então examinar a cabana, se assim desejar.`, //77
     `Durante sua busca, você encontra um total de 4 Moedas de Ouro, mas também encontra o bichinho de estimação do jovem, um imenso <strong>Corvo filhote</strong>, 
     que se empoleira em uma viga no quarto de Wilhelm e salta para atacá-lo!<br><br>
     <strong>Se o corvo o ferir, haverão consequências.</strong>`, //78
     `Karl-Rinna, o Alquimista, deixa-o e entra em seu laboratório pela porta norte deste aposento; meia hora mais tarde, ele retoma com um líquido verde 
     borbulhante em um vaso cônico de vidro. Em seu ombro empoleira-se um homúnculo verde e alado; ele rosna ameaçadoramente quando você entrega suas 8 
     Moedas de Ouro e bebe a coisa fedorenta. O sabor é horroroso e você se sente nauseado e fraco depois de bebê-la.<br><br>
     <strong>Perca 4 pontos de ENERGIA.</strong><br>
     Mas ela funciona, e você fica curado de sua <strong>Aflição de Licantropia</strong>. Com uma sensação de alívio, agradece ao Alquimista e 
     sai pela porta oeste deste aposento.`, //79
     `Você sente que Katarina fez alguma tentativa de controlá-lo magicamente, mas falhou. 
     Rosnando de frustração e raiva, ordena-lhe que se vá. Ela começa a conjurar um feitiço, mas você é rápido e consegue fugir!`,  //80
     `Enfrente os Zumbis um de cada vez, em ordem.<br>
     Você está em menor número, mas um bravo guerreiro não deveria ter medo dessas criaturas lentas e sem mente!`, //81
     `Você recua para dentro do caixão e sai da Tumba Inferior; o fantasma desaparece quando você parte.<br><br>
     Subindo a escada de volta até a junção em T você percebe que de lá pode descer pela escada leste ou pela escada para sul.`, //82
     `<strong>Você tem uma Espada Mágica?</strong>`, //83
     `Lothar era um homem bom e descente, e você o matou sem necessidade.<br><br>
     Perca <strong>2 pontos de FÉ</strong> e <strong>1 ponto de SORTE.</strong>`, //84
     `85`, 
     `Você balança sua lanterna em volta e manda os morcegos embora. Eles voam, guinchando para dentro da escuridão envolvente da noite.<br>
     Você vê, à sua frente, na suja torre do sino, alguns velhos sinos de bronze e um de prata, que parece brilhar com uma luz azul muito tênue.<br><br>
     Jogue um dado e some 3.<br><br>
     <strong>Um teste de FÉ</strong>.`, //86
     `Você passa pela porta destrancada e se encontra em uma varanda de pedra que fica sobre o pátio.<br>
     Esta varanda estende-se para leste e oeste de onde está, e também continua seguindo em direção ao sul pelo lado leste.<br>
     Há ainda mais três portas que saem da varanda.<br><br>
     Uma porta fica para a <strong>direita</strong> e leva a uma câmara próxima à torre sudoeste.<br>
     Uma segunda porta fica a meio caminho do contraforte <strong>sul</strong>.<br>
     A última porta fica no <strong>extremo sul</strong> da varanda, mais distante de você.`, //87
     `Que decisão tola! O monstro já estava muito perto da porta e você não tem mais tempo de fugir.<br><br>
     O Ghoul Fedorento o acerta: perca <strong>2 pontos de ENERGIA.</strong>`, //88
     `Jogue dois dados.<br><br>
     <strong>Um teste de HABILIDADE</strong>.<br><br>
     Se o resultado for fracasso você terá que enfrentar o cachorro!`, //89
     `A Cripta tem uma entrada de pedra com degraus descendentes. Hediondas cabeças de gárgulas com malévolos sorrisos fitam-no melifluamente, e os pesados portões de ferro 
     estão firmemente trancados. 
     Às suas costas, você ouve rosnados em algum lugar a oeste e resolve não investigar o barulho.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //90
     `Dando um passo para a frente, seu peso aciona uma armadilha-alçapão escondida.<br>
     Você cai com força no chão de pedra, três metros abaixo, <strong>perdendo 4 pontos de ENERGIA</strong>.<br><br>
     Se estava carregando conhaque ou Água benta, suas garrafas se quebraram.<br><br>
     Você consegue arrastar-se para fora do fosso: uma simples, porém eficiente armadilha.`, //91
     `Gunthar não tem nenhuma arma e você pode matá-lo com facilidade; contudo, ao fazê- lo, ele segura seu pescoço e sussurra uma maldição sobre você.<br><br>
     Você <strong>perde 3 ponto de ENERGIA</strong>.<br><br>
     Agora a Maldição do Curandeiro o aflige.<br><br>
     Examinando os aposentos, você encontra <strong>3 Moedas de Ouro</strong> e nada mais que tenha algum valor.<br>
     Você retoma para o patamar, e, quando chega lá, abre a porta ao oeste.`, //92
     `Qual feitiço pretende lançar?`, //93
     `<strong>“Você tem o Livro”</strong> diz a aparição, de modo aprovador.<br>
     <strong> “Minha espada está presa dentro dele. A magia de Reiner usou sangue para colocá-la aí dentro, e sangue será necessário para libertá-la novamente.”</strong><br><br>
     Siegfried aponta para um cálice de prata ornamentado, que está sobre a mesa.
     <strong>“Você deve dar seu sangue para libertar Nightstar. Isso lhe custará energia, mas a arma é incomparável.”</strong><br><br>
     Se estiver pronto para fazê-lo pode seguir em frente com o ritual.<br>
     Se não quiser reduzir sua ENERGIA, pode escolher se manter apenas com a Estaca de Prata que encontrou.`, //94
     `Cabelo começa a surgir nas costas de suas mãos e seus dentes caninos parecem crescer e forçar caminho por cima de seu lábio inferior!<br><br>
     Você <strong>perde</strong> 1 ponto de <strong>FÉ</strong> e 1 ponto de <strong>SORTE</strong>.<br><br>
     Já é perceptível que se não obtiver ajuda logo, você estará com sérios problemas!<br>
     Sua Aflição de <strong>Licantropia</strong> foi alterada para <strong>Licantropia Maior</strong>.<br><br>
     Você foge o mais rápido possível, podendo abrir a porta na ponta leste do corredor ou correr para sul, ao longo do corredor.`, //95
     `Você machuca o braço, no ombro, e a mão o solta: o que parece ser sangue fresco derrama-se sobre o chão.<br>
     Sua expressão é de choque ao ouvir o som de um choro vindo de uma das cabeças humanas seladas em uma redoma;<br><br>
     Você <strong>perde</strong> 1 ponto de <strong>FÉ</strong> e 1 ponto de <strong>SORTE</strong><br><br>.
     Fugir deste lugar é a opção mais sensata.<br>
     Voltando à junção você pode abrir a porta leste ou a porta sul.`, //96
     `Risadas de escárnio ressoam pela passagem, vindas do oeste. Você vê um homem alto, de cabelos negros e trajando um manto rubro-negro, 
     inconfundível por causa de suas entradas na testa e seus brilhantes olhos vermelhos.<br><br>
     <strong>O Conde!</strong><br><br>
     “Você não é páreo para mim, seu verme inútil”, escarnece ele.<br>
     O Conde se envolve com seu manto e se transforma em um morcego gigante. Ele voa a uma grande velocidade, e você não consegue persegui-lo`, //97
     `Seus cabelos da nuca erguem-se quando sente que alguma coisa intensamente má está no aposento!<br>
     Girando sobre seu próprio eixo, você vê uma figura humana verde e fantasmagórica começando a tomar forma junto à passagem da porta.<br>
     Não podendo fugir, o combate é inevitável - mas você ainda tem tempo para realizar uma ação de qualquer tipo antes de ser forçado a lutar.<br>
     Tem tempo de devorar um pouco de comida ou uma poção, a fim de recuperar pontos de ENERGIA, se puder; ou pode escolher dar o golpe inicial no Espectro.`, // 98
     `Apesar de haver uma indescritível maldição sobre o Castelo, aí também se pode sentir um poderoso bem. No centro da parede norte existe <strong>algo mágico</strong>, talvez?<br>
     Como você não pode entrar direto nesta parte do castelo, terá que entrar pelos portões principais.`, //99
     `Você se sente terrivelmente fraco, enquanto os tentáculos da Névoa Vampira detém-se sobre o local ensanguentado do seu pescoço.<br><br>
     <strong>Perca 2 pontos de ENERGIA</strong> por causa da dor, e <strong>mais 2 a cada Série de Ataque</strong>, devido ao sangramento, 
     não importando quem tenha a maior Força de Ataque, até destruir a Névoa!`, //101
     `Você abre a porta norte do hall de entrada e vê um corredor muito bem iluminado alongando-se à sua frente. O chão é ladrilhado e há pequenas aquarelas presas nas paredes. 
     A sua frente há uma porta na parede leste, e mais adiante uma na parede oeste; entre as duas existe uma passagem para leste. Há também uma porta no final do corredor, para norte.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //101
     `102`, 
     `Enfrente os dois lobos, um de cada vez, no umbral da porta.`, 
     `104`, 
     `105`, 
     `106`, 
     `107`, 
     `108`, 
     `109`, 
     `Jogue dois dados.<br><br>
     <strong>Um teste de Habilidade.</strong>`, //110
     `111`, 
     `112`, 
     `113`, 
     `114`, 
     `115`, 
     `116`, 
     `<strong>Escolha sua proxima ação:</strong>`, //117
     `118`, 
     `119`, 
     `120`, 
     `121`, 
     `122`, 
     `123`, 
     `124`, 
     `125`, 
     `Você tosse e o homem, tendo acordado, olha nervosamente para você. Ele lhe oferece pão e um pouco de sopa quente de uma panela junto ao fogo 
     (que recuperam 4 pontos de sua ENERGIA) e lhe diz quem é e o que está fazendo aqui.<br>
     O homem da floresta, Barandrun, diz que já foi um guerreiro, mas que se cansou de batalhas e derramamentos de sangue. Ele agora prefere viver só, em paz com as criaturas 
     da floresta. Porém, a grande maioria delas desapareceu e ele está triste e preocupado. Ele tem certeza que é o mal, no Castelo Heydrich, o que os está amedrontando. 
     Você se sente confiante para contar-lhe sobre sua busca. Ele comenta sobre sua bravura e diz que talvez possa ajuda-lo um pouco. 
     Ele sabe que existe pelo menos um homem bom no Castelo e que talvez possa ajuda-lo. Lothar, o Castelão do Castelo, costumava ser simpático com Barandrun.<br>
     “Mas não o tenho visto há alguns meses; nem mesmo sei se ele ainda vive. Talvez também tenha caído sob o jugo do Conde, ou então foi morto. Mas se encontra-lo, 
     ele talvez possa ajuda-lo.”<br>
     Barandrun também lhe dá um presente: um fio de dentes de alho que ele pegara de uma pequena horta, na parte de trás de sua cabana. 
     Por sua insistência, você o coloca em volta do pescoço; anote Alho em seus Equipamentos. Barandrun lhe oferece um lugar seguro para ficar. 
     Se ainda não dormiu na cabana do Gnomo, dormirá aí recuperá 4 pontos de ENERGIA. Tendo ou não dormido aí, volte a sua jornada pela tarde.`, //126
     `O terceiro e último golpe do Ghoul o paralisa, e a coisa repulsiva se prepara para devorar-lhe o corpo imóvel.<br><br>
     Você ainda está consciente quando é <strong>comido vivo</strong>.<br><br>
     <strong>Um final horrendo para sua aventura!</strong>`, 
     `128`, 
     `129`, 
     `130`, 
     `131`, 
     `132`, 
     `133`, 
     `Karl-Rinna concorda em fazer a poção por uma taxa reduzida, mas ele levará todos os tesouros que você tiver.`, //134
     `135`, 
     `136`, 
     `137`, 
     `138`, 
     `139`, 
     `140`, 
     `Os portões são feitos de sólidas e grossas barras de ferro; você não pode abri-los.<br><br>
     Jogue um dado e some 2.<br><br>
     <strong>Um teste de Fé.</strong>`, //141
     `142`, 
     `143`, 
     `144`, 
     `145`, 
     `O Sábio pega uma <strong>Chave de Prata</strong> de um bolso do colete.<br><br>
     “Isto o fará entrar” diz ele. “Volte pelo corredor para oeste, vire à direita, e abra a porta norte com isto.”`, //146
     `147`, 
     `As pessoas estão ansiosas por dizer-lhe como chegar ao Castelo! Eles o advertem que o caminho a ser seguido não oferece segurança. 
     Somente um veículo fantasmagórico pode atravessá-lo a salvo. Eles indicam que há uma trilha que segue para nordeste, pela floresta, que leva direto ao Castelo. 
     Se você tiver sorte, poderá evitar os animais selvagens da floresta; há uma cabana no caminho onde poderá descansar e dormir. Mas terá, porém, que atravessar o rio; 
     o homem de um braço só lhe dá 2 Moedas de Ouro para pagar a taxa que o barqueiro irá lhe pedir.<br><br>
     Você parte pela trilha e logo se encontra envolvido pela floresta. Os galhos das árvores parecem virados e contorcidos em formas grotescas, e à distância, 
     corujas piam e lobos uivam. O chão da floresta não tem plantas que o curem, e suas botas estalam na terra de cascalho. Vai ficando mais claro, talvez esteja 
     chegando o crepúsculo - e então uma flecha passa assobiando perto de sua orelha e se fixa em um tronco de árvore! No lusco-fusco a sua esquerda, você vê um grande 
     urso balançando em sua direção, e do seu lado, uma figura esguia está preparando outra flecha para lançar em sua direção!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //148
     `149`, 
     `150`, 
     `151`, 
     `Jogue dois dados.<br><br> 
     <strong>Um teste de Habilidade.</strong>`, //152
     `153`, 
     `154`, 
     `155`, 
     `156`, 
     `157`, 
     `Os únicos feitiços úteis, aqui, são <strong>Grande Ataque</strong> ou <strong>Raio de Jandor</strong>.`, //158
     `159`, 
     `160`, 
     `161`, 
     `162`, 
     `163`, 
     `164`, 
     `Os tentáculos da criatura de névoa envolvem sua garganta e você tem a sensação de pequenas, mas afiadas, agulhas enterrando-se em sua pele!`, //165
     `166`, 
     `167`, 
     `168`, 
     `169`, 
     `170`, 
     `171`, 
     `172`, 
     `173`, 
     `Você sobe no coche e os cavalos saem a galope - sem fazer qualquer som enquanto se movem! Você se recosta em um confortável assento forrado de preto. Olhando 
     pelas janelas de pesadas cortinas púrpuras, você nada vê além da densa e envolvente bruma, mas os uivos dos lobos que ouve fazem um arrepio descer por sua coluna.<br><br>
     <strong>Jogue um dado e some 2 ao resultado.<br><br>
     Um teste de FÉ.</strong>`, 
     `175`, 
     `176`, 
     `177`, 
     `178`, 
     `179`, 
     `180`, 
     `181`, 
     `182`, 
     `183`, 
     `184`, 
     `185`, 
     `186`, 
     `187`, 
     `188`, 
     `189`,  
     `190`, 
     `191`, 
     `Os esforços para penetrar na Cripta não passam despercebidos. Uma forma pequena, parecendo um anão, de uma figura espectral, preta e quase sem feições, 
     vem flutuando pelos degraus.<br>
     Você pode sentir o mal arrepiante no ar que ela desloca; suas pequenas garras negras estendem-se para agarrá-lo!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //192
     `193`, 
     `194`, 
     `195`, 
     `196`, 
     `197`, 
     `198`, 
     `199`, 
     `200`,
     `Você tenta acertar o Cavaleiro com sua espada, mas ele simplesmente ri, quando sua espada atravessa o ar! Você não pode feri-lo. 
     Ele chicoteia os cavalos para um galope, deixando-o de pé, olhando tolamente. A crença em suas próprias capacidades fica estremecido por tal falha inicial,
     <strong>reduzindo 1 ponto de sua FÉ</strong>. Você precisa encontrar outro meio de ir para o castelo.`, 
     `202`, 
     `203`, 
     `204`, 
     `205`, 
     `206`, 
     `207`, 
     `208`, 
     `209`, 
     `210`, 
     `211`, 
     `212`, 
     `213`, 
     `214`, 
     `215`, 
     `Você joga sua Água-benta no Vampiro.<br>Jogue um dado e some 1, para obter um resultado entre 2 e 7; o total é o número de pontos de ENERGIA que o líquido 
     abençoado causa de dano à criatura morta-viva enlouquecida, cuja pele agora parece estar pegando fogo!<br><br>`, //216
     `217`, 
     `218`, 
     `219`, 
     `220`, 
     `221`, 
     `222`, 
     `Você de repente sente um arrepio dentro da carruagem e lá, surgindo lentamente a sua frente, encontra-se um fantasma! A forma espectral de um homem alto 
     com cabelos negros ondulados e olhos verdes, sua figura, praticamente toda coberta por uma volumosa capa negra e púrpura, sorri, sentada no lado oposto.<br>
     “O Conde o espera” ele ri de modo afetado, “apesar de temer que sua estadia aqui seja demasiada curta.”<br>
     Ele se recosta e continua a sorrir de um jeito malicioso e escarnecedor. Então, a carruagem dá uma guinada súbita e a aparição fantasmagórica pula sobre você!<br><br>
     <strong>Jogue um dado e some 4 ao resultado.<br><br>
     Mais um teste de FÉ.></strong>`, //223
     `224`, 
     `225`, 
     `226`, 
     `227`, 
     `Você prossegue pela tarde, e adentra na noite escurecida, até que finalmente vê o castelo no topo de uma colina escarpada. Jogue dois dados.<br><br>
     <strong>Um teste de Habilidade.<br>`, //228
     `229`, 
     `230`, 
     `231`, 
     `232`, 
     `233`, 
     `234`, 
     `235`, 
     `236`, 
     `237`, 
     `238`, 
     `239`, 
     `240`, 
     `241`, 
     `242`, 
     `243`, 
     `244`, 
     `245`, 
     `Você se aproxima o bastante para ver a figura de uma jovem; ela está vestida em couro verde e marrom e armada com um arco e uma espada longa, 
     que é mantida embainhada do seu lado.<br><br>
     O urso o impede de chegar a ela, então você terá que enfrentá-lo ou tentar conversar para livrar-se do problema.`, //246
     `247`, 
     `248`, 
     `249`, 
     `250`, 
     `Você mata o velho facilmente; ele não tem arma e não é páreo em uma luta. Foi um ato extremamente maldoso, matar outro ser humano assim, o Alquimista era um homem bom.<br><br>
     Você <strong>perdeu 2 pontos de sua FÉ e 2 pontos de SORTE</strong>.<br><br>
     Você examina o aposento, mas não encontra nada que reconheça como útil, então sai pela porta da parede oeste.`, //251
     `Você abre a porta e um odor denso e mofado de ar parado o saúda. Você usa sua lanterna para ver, e agora percebe que está na base da torre sudeste.<br><br>
     Jogue um dado e some 3.<br><br>
     <strong>Um teste de FÉ.</strong>`, //252
     `253`, 
     `254`, 
     `255`, 
     `256`, 
     `257`, 
     `Você vê que há uma placa na porta, com a inscrição: <strong>Doutor Marcel Adenauer</strong>.<br>Você bate como manda a boa educação, e uma voz trêmula, mas brusca, responde:<br>
     “Entre!”<br>
     Você entra, e vê um homem de meia-idade, com cabelos grisalhos, vestindo um manto e sentado a uma mesa coberta por papeis organizados em pilhas. 
     O aposento está cheio de livros e papeis, e o homem o fita por sobre uma bola de cristal, montada em uma base de dragão, que se encontra sobre sua mesa.<br><br>
     “Doutor Adenauer, meu jovem”, diz ele. “Sábio empregado do Conde Reiner Heydrich aquele mão de vaca, jamais me dá dinheiro para minhas pesquisas. 
     Esses livros importantes custam uma fortuna!”<br><br>
     Com um gesto de mão indica-lhe uma parede cheia de estantes. Ele parece rabugento, mas não é hostil. Pelo menos não parece ser!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //258
     `259`, 
     `260`, 
     `261`, 
     `262`, 
     `263`, 
     `264`, 
     `265`, 
     `266`, 
     `267`, 
     `268`, 
     `269`, 
     `270`, 
     `271`, 
     `O demônio pula em sua garganta e você salta para o lado a fim de livrar-se dele: mas a porta da carruagem abre repentinamente e você é lançado para fora.<br>
     Você <strong>perde 2 pontos de ENERGIA</strong> dos arranhões causados pela queda e, enquanto rola no chão, a risada distante da criatura fantasmagórica ressoa em seus ouvidos. 
     Você agora deve <strong>Testar sua Sorte</strong>.`, //272
     `273`, 
     `274`, 
     `275`, 
     `276`, 
     `277`, 
     `278`, 
     `279`, 
     `280`, 
     `281`, 
     `282`, 
     `283`, 
     `Sem uma arma mágica, não há esperanças de vencer o Conde; outras coisas como feitiços e Água-benta podem causar alguns danos, mas <strong>não podem superá-lo</strong>.
     <br>O Conde o deixa exausto com seus ataques até que, finalmente, mergulha as presas em sua garganta quente e pulsante, rasgando pele e músculo e <strong>fazendo o sangue jorrar no ar.</strong>
     <br><br><strong>Sua busca fracassou.</strong>`, //284
     `285`, 
     `286`, 
     `287`, 
     `288`, 
     `289`,  
     `290`, 
     `Você conta a Lothar sobre Katarina e sua natureza má e ele não parece nem um pouco surpreso. Muito seriamente ele diz que lhe contará sobre 
     os Heydrich e como você poderá vencê-los`, //291
     `Você tem uma <strong>Espada Mágica</strong>?`, //292 
     `293`, 
     `Abrindo a porta oeste, você vê um corredor que continua seguindo para oeste à sua frente.<br>
     Está bem iluminado e há um grosso tapete carmim no meio do chão de cerâmica. Há uma porta próxima a você, na parede norte, e outra um pouco mais à frente; 
     também pode ver que há uma porta bem a sua frente no fim do corredor, e que o corredor vira para o sul neste ponto.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //294
     `295`, 
     `296`, 
     `297`, 
     `298`, 
     `O que você usará?`, //299
     `Você não encontra nada digno de nota, então volta ao corredor. Pode abrir a porta no fim do lado leste ou seguir o corredor para o sul.`, //300
     `301`, 
     `302`, 
     `303`, 
     `304`, 
     `305`, 
     `306`, 
     `Você abre a porta e entra em uma espécie de santuário; a sala está às escuras e você precisa de alguma luz para poder enxergar. 
     Há toalhas brancas e amarelas sobre as mesas, peças penduradas nas paredes para decorar a sala, pequenos banquinhos e uma escrivaninha. 
     Há também um livro sobre uma cadeira que atrai sua atenção, então você o pega. É a história das vidas de homens-santos e curandeiros famosos, 
     e tem uma assinatura na primeira folha de Gunthar Heydrich. Pode levar o livro com você, se desejar.<br><br>`, //307
     `308`, 
     `309`, 
     `310`, 
     `311`, 
     `312`, 
     `313`, 
     `314`, 
     `315`, 
     `Você sobe uma escada de madeira íngreme e estreita, até chegar a uma plataforma diante de uma porta de madeira decorada com hieróglifos em âmbar e prata. 
     Alguma coisa está arranhando o outro lado da porta. Há um distinto e desagradável cheiro de cemitério aqui.<br><br>
     Você pode reunir sua coragem e abrir a porta ou recuar pelas escadas e abrir a porta ao norte no hall de entrada.`, //316
     `317`, 
     `318`, 
     `319`, 
     `320`, 
     `321`, 
     `322`, 
     `323`, 
     `324`, 
     `Quando você está andando pela sala, um dos morcegos de pedra voa da parede e arranha seu rosto, <strong>perdendo 2 pontos de ENERGIA</strong> com os machucados.<br>
     Você tenta combater o ataque mas a criatura mágica desapareceu!<br><br>
     Eventualmente você alcança a porta e a abre`, //325
     `Você usa seu ombro contra os pesados portões de madeira, e eles se abrem com um ranger que o deixa bem nervoso. Você atravessa uma pequena área de entrada 
     até chegar a um grande pátio. A sua frente, vê grandes portas de metal decoradas do outro lado do pátio e além da entrada, no que parece ser uma Cripta de família. 
     Há também duas portas a oeste, e uma porta logo virando a esquina, que se abre para a parte sudeste do prédio principal.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //326
     `Jogue um dado e some 5.<br><br>
     <strong>Um teste de FÉ.</strong>`, //327
     `328`, 
     `329`, 
     `Uma fumaça penetra no quarto através de uma grade no chão, uma figura irradiando uma hedionda maldade.<br><strong>Uma Aparição!</strong><br><br>
     Jogue um dado e some 3.<br><br>
     <strong>Um teste de FÉ.</strong>`, //330
     `331`, 
     `A porta tem uma pequena fechadura de prata.<br><br>
     Você só pode abrir essa porta se tiver uma <strong>Chave de Prata</strong>.<br><br>
     Você pode voltar e abrir a porta a oeste do corredor, se ainda não o tiver feito, ou poderá seguir pela passagem leste.`, //332
     `333`, 
     `334`, 
     `335`, 
     `336`, 
     `337`, 
     `338`, 
     `339`, 
     `340`, 
     `341`, 
     `342`, 
     `343`, 
     `Você grita que não lhes deseja nenhum mal, mas a mulher já lançou uma flecha que o acerta; o fazendo <strong>perder 2 pontos de ENERGIA.</strong>
     Abaixando o arco, ela gesticula para o urso, que rosna mas não o ataca. Ela se aproxima, desculpando-se, e explica que é uma Guarda- florestal, cujo 
     trabalho é proteger as árvores, e ela não espera que alguém que vagueia pela noite tenha boas intenções! Ela cuida do ferimento leve que a flecha causou.<br><br>
     Valderesse, a Guarda, é uma pessoa amigável e prestativa; você lhe conta sobre sua jornada para salvar Natassia das garras do Conde Heydrich. 
     Com isso ela fica bem séria.<br>“O Conde é um homem muito mau. Lobos ferozes e bandos de morcegos infestam as terras à volta de seu castelo, e as pessoas daqui dizem que ele 
     rapta mulheres jovens para serem suas escravas - ou pior. Mas nem sempre foi assim. Seu irmão, Siegfried, que foi Conde antes dele, esse sim era um homem bom e decente ...”<br>
     mas ela para ao som de um trovão e uma pesada chuva começa a açoitar os galhos das árvores acima de suas cabeças.<br>
     “Vamos, vamos para a balsa!”<br>
     Você a segue em direção ao rio, e no caminho ela lhe dá alguma comida para ajudá-lo em sua jornada; <strong>somando 2 refeições a suas Provisões.</strong>`, 
     `345`, 
     `346`, 
     `347`, 
     `348`, 
     `349`, 
     `350`, 
     `351`, 
     `352`, 
     `Depois de andar cerca de três metros, você chega a uma porta no lado norte da passagem, mas a iluminação suave continua pelo corredor e revela uma porta no fundo do corredor.
     <br><br>
     Você abrirá a porta norte ou a porta ao fundo?`, 
     `354`, 
     `355`, 
     `356`, 
     `357`, 
     `Você entra na cabana e a revista. No quarto do Gnomo encontra o retrato de um homem mau e cadavérico, mas sem dúvida atraente; cabelo negro escovado para trás e duas profundas 
     entradas e penetrantes olhos verdes, que parecem olhar através de você. Ele tem um sorriso debochado no rosto, e sua capa negra e carmim traz o mesmo brasão de armas que viu na 
     carruagem do Conde. Abaixo do retrato há uma simples plaqueta de metal com letras rudimentares onde se pode ler “Mestre”. É mais sábio manter-se longe do Gnomo!<br><br>
     Passando pela cozinha, você vê o brilho de ouro sobre a mesa e um generoso suprimento de comida que pode precisar para sua jornada. Também há um grande cachorro roncando diante do fogão.<br><br>
     <strong>Escolha sua proxima ação:</strong>`, //358
     `359`, 
     `O Corvo é um inimigo feroz e perigoso. Ele sempre ataca seu rosto e você grita em agonia quando ele <strong>arranca-lhe um olho</strong>!<br>
     Você <strong>perde 2 pontos de sua HABILIDADE</strong> e registra a <strong>Maldição do Corvo</strong> em seu quadro de Aflições.<br>
     A menos que consiga a cura dessa Aflição, você não será capaz de recuperar esses pontos perdidos de HABILIDADE. 
     Cambaleando, mãos no rosto que sangra, você segue pela porta até o fim da passagem sul.`, //360
     `361`, 
     `Você segue pela trilha estreita que tem uma subida e, de repente, sai da névoa para uma área completamente limpa. 
     Brilhantemente iluminado por três quartos de lua, está o impressionante Castelo Heydrich!<br><br>
     Agora você pode decidir subir e entrar pelos portões entreabertos ou dar a volta no lugar para ver o que pode descobrir.`, 
     `363`, 
     `364`, 
     `365`, 
     `366`, 
     `367`, 
     `368`, 
     `369`, 
     `Você rola pela beira de um precipício e seu corpo é cortado em pedaços pelas rochas da ravina abaixo.<br><br>
     <strong>Você falhou miseravelmente em sua missão!</strong>`, 
     `Você abre a grande porta negra que dá para leste e entra num corredor úmido e abafado, em que o mal quase pode ser tocado. 
     Sua fonte de luz mostra brilhos que se refletem à frente, e você vê os ossos amarelos do guardião que avança, implacavelmente, em sua direção. 
     A imensa criatura-esqueleto com quatro braços - um Thassaloss Maior - carrega uma maciça foice negra; grandes órbitas vazias e de brilho esverdeado 
     reluzem sobre um sorriso sem expressão, no maxilar.<br><br><strong>Você pode lutar com essa coisa ou jogar-lhe um feitiço, se tiver</strong>.`, 
     `372`, 
     `373`, 
     `374`, 
     `375`, 
     `376`, 
     `Você abre a porta para uma sala de estrebaria. Parece vazia, mas há um estranho cheiro aqui - de lobos - e pode ouvir rosnados através da fina parede sul, 
     então você decide não seguir naquela direção!<br><br>
     <strong>Escolha sua proxima ação:</strong>`, 
     `378`, 
     `379`, 
     `380`, 
     `381`, 
     `382`, 
     `Você segue pela trilha até o outro lado do rio, e anda através da névoa fina. Não há pássaros cantando, nem sinais de vida; esse silêncio é enervante. 
     Depois de algumas horas, você chega a uma pequena cabana em meio a uma clareira; uma linha fina de fumaça azul sobe preguiçosamente pela chaminé. Olhando, cautelosamente, 
     pela porta entreaberta, você percebe um homem lá dentro, dormitando em frente ao fogão. Ele usa roupas de couro marrom e cinza, e há uma longa faca curva em suas mãos. 
     Você vê pouco de onde ele está, mas consegue sentir o cheiro de boa comida sendo feita!<br><br>
     Se você não dormiu na cabana do Gnomo, você está muito cansado agora, e <strong>terá que dormir aqui</strong>.<br>
     Você pode atacar o homem, esperando ganhar pela surpresa, ou pode entrar e falar com ele.<br>
     Se você já dormiu na cabana do Gnomo: Há também a opção de ignorar o homem e seguir em sua jornada.`, 
     `384`, 
     `385`, 
     `386`, 
     `387`, 
     `388`, 
     `389`, 
     `390`, 
     `391`, 
     `392`, 
     `393`, 
     `394`, 
     `395`, 
     `396`, 
     `397`, 
     `398`, 
     `399`, 
     `400`,

]
// indexes de finais de aventura: 69
var pagNmb = 0