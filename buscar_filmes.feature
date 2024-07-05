
Funcionalidade: Fazer busca de filmes na plataforma

Eu, como usuário de um website de cinema,
Quero busca filme usando a palavra chave
Para encontrar e explorar filmes que correspondam ao meu interesse.

Contexto:
Dado que O usuário deve estar na pagina de busca

@alta
Cenário:Buscar filmes com palavra-chave válida
Quando o usuário Preencher com uma palavra chave valida no campo "Digite aqui seu filme"
Então deve aparecer uma lista de filmes correspondente a palavra chave

@alta
Cenário:Buscar filmes sem resultado
 Quando o usuário Preencher com uma palavra chave invalida no campo "Digite aqui seu filme"
 Entao deve aparecer uma mensagem de erro, infomando que não há resultado

@alta
Cenário: Buscar de filme em tempo real
    Quando o usuário Digitar um nome de filme no campo "Digite aqui seu filme"
    Então a lista de filmes é atualizada automaticamente

@alta
Cenário: Limpar a busca de filmes
    Quando o usuário Clicar no botão "Limpar Busca"
    Então a lista de filmes e o campo de busca é resetada para o estado inicial

@alta
Cenário:Buscar de informações básicas do filme
    Quando o usuario fizer uma busca no campo "Digite aqui seu filme"
    Então deve aparerecer informações como titulo do filme, capa, sinopse curta para cada filme na lista de resultados

@baixa
Cenário:Garantir barra de rolagem infinita
    Quando o usuário Preencher com uma palavra chave valida no campo "Digite aqui seu filme"
    Então deve aparecer uma lista de mais de 10 filmes. E a pagina deve suportar rolagem infinita

@baixa
Cenário:Ordenar por popularidade e nota do IMDb
    Quando o usuário Preencher com uma palavra chave valida no campo "Digite aqui seu filme"
    Então os filmes são exibidos na ordem de popularidade e nota do IMDb, do mais alto para o mais baixo
