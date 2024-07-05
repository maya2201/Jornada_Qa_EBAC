Funcionalidade: Ver uma lista Recomendações diarias de filme

Eu, como usuário frequente do website de cinema,
Quero ver uma lista de 4 a 5 filmes recomendados,
Para descobrir e assistir filmes que estão em alta.

@baixa
 Cenário: Exibir das recomendações do dia
    Dado que o usuário acessa a página inicial do website de cinema
    Quando a página é carregada
    Então de 4 a 5 filmes recomendados do dia são exibidos na seção "Recomendações do Dia"
    E cada filme exibe a capa, título e uma breve sinopse

@baixa
Cenário: Atualizar diáriamente as recomendações
    Dado que é um novo dia
    Quando o usuário acessa a página inicial do website de cinema
    Então a seção "Recomendações do Dia" é atualizada com novos filmes

@media
 Cenário: Verificar a quantidade de recomendações
    Dado que o usuário está na seção "Recomendações do Dia"
    Quando a lista de recomendações é gerada
    Então o sistema assegura que há entre 4 e 5 filmes listado

@baixa
Cenario: Selecionar Critérios dos filmes recomendados
    Dado que o usuário esteja na seção "Recomendações do Dia"
    Quando A lista de recomendações é gerada
    Então os filmes devem ser selecionados com base em: Popularidade, avaliações recentes , relevância para tendências atuais conforme o IMDB
     
@alta
Cenário:Falha na atualização diária
    Dado que ocorre uma falha na atualização diária por problemas na API    
    Quando o sistema tenta atualizar as recomendações do dia
    Então o sistema deve manter os títulos dos filmes do dia anterio