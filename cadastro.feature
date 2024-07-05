
Funcionalidade: Cadastro de menbros na plataforma

Eu, como usuário de um website de cinema,
Quero me registrar como membro no site,
Para receber em primeira mão promoções e novidades do cinema.


Contexto:
    Dado que o usuário acessa a página de registro
    
@alta
Cenário: Registrar com todos os campos obrigatórios preenchidos
   Quando o usuário preenche todos os campos marcados com asteristico
   Então o sistema exibe uma mensagem de sucesso

@média
Cenário: Validar do formato de email
   Quando o usuário completar o registro com sucesso
   Então um e-mail de confirmação é enviado para o endereço de e-mail fornecido

@média
Esquema do Cenário: Validar dos campos de registro
   Quando o usuário preenche <Nome>, <Sobrenome>, <Email>, <Telefone> e <Senha>
   Então o sistema valida os campos e retorna "<Mensagem>"

   Exemplos:
   
   | Nome  | Sobrenome | Email            | Telefone    | Senha     | Mensagem                                          |
   | Ana   | Silva     | ana@email.com    | 11999887766 | An@1234!  | Cadastro realizado com sucesso                    |
   | João  |           | joao@email.com   |             | João#4321 | Preencher todos os campos obrigatorios            |
   | Maria | Pereira   | mariapereira.com | 21988776655 | Mp3re1ra  | Formato de email invalido                         |
   | Pedro | Alves     | pedro@email.com  |             | Pe@1      | Senha Fraca, não cumpre os critérios de segurança |
   |       | Santos    | luis@email.com   | 31987654321 | Lu1s*6789 | Preencher todos os campos obrigatorios            |  

@alta   
Cenario: Validar a criptografia da senha 
   E usuário ja concluiu o cadastro
   Quando validar criptografia no banco de dados
   Então a senha deve estar criiptografa

