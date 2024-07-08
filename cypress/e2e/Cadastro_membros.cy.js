/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastros de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `anamont${Date.now()}@teste.com`
    cy.preencherCadastro('Ana', 'Monstt', email, '11964962528', 'Teste1234@123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com campo nome invalido', () => {
    cy.preencherCadastro('Fabio35', 'Araujo', 'fabio@teste.com', '11964987558', 'Teste123!124')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Novo Cadastro com email já existente ', () => {
    cy.preencherCadastro('Caio', 'Fernandes', 'murilo123@testes.com', '11964925758', 'Teste1244!12')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  });

  it('Deve validar mensagem de erro com campo sobrenome', () => {
    cy.preencherCadastro('Claudia', 'José18', 'claudia12@teste.com', '1197875236', 'Teste!17458')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem senha fraca', () => {
    cy.preencherCadastro('Claudia', 'José', 'claudia12@teste.com', '1197875236', '1234')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"')
  });

  it('Deve validar mensagem de erro de senha vazia ', () => {
   cy.validarSenhaVazia('Ana', 'Fernades', 'ana123@teste321.com' , '11985687466')
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })
})
