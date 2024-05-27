## Sobre o Projeto

Esse projeto possui 3 páginas:
- Página Inicial (com um botão direcionando para a Página do Jogo, e outro para a Página do Ranking)
- Página do Jogo (com um botão para retornar para a Página Inicial, uma caixa de texto e um botão para interagir/jogar)
- Página do Ranking (com um botão para a Página Inicial, e a lista dos Top 10 jogadores que fizeram mais pontos no jogo)

## Fluxo da Página do Jogo

Na Página do Jogo, existem as telas de Jogo e de Fim de Jogo;

- Ao entrar nessa página, estará a tela de Jogo, que solicita o nome do jogador que aparecerá na Página de Ranking caso consiga uma das 10 maiores pontuações;
- Após inserir o nome, é iniciado o jogo;
- Ao perder o jogo, aparece a tela de Fim de jogo mostrando a pontuação final do jogador e informando se o jogador entrou ou não para o Ranking do Top 10;

## Sobre o Jogo

Objetivo: fazer a maior quantidade de pontos;

Dados iniciais:
- Round 1;
- 3 vidas;
- 0 pontos;
- Número sorteado (1 até 5)

Como funciona: 
- Será sorteado um número aleatório no início de cada Round (de 1 até o número do Round + 4), e o jogador terá que adivinhar esse número;
- São 3 tentativas por round para adivinhar;
- Se adivinhar, ganha a seguinte quantidade de pontos ((4 - quantidade de tentativas utilizadas) * número do Round) e avança para o próximo Round;
- Se não adivinhar, perde 1 vida e avança para o próximo Round;
- A cada tentativa que errar o número, é informado se o número sorteador é maior ou menor que o número inserido pelo jogador;
- Se perder 3 vidas, o jogo termina.




