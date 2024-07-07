/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastros de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Ana')
    cy.get('#signup-lastname').type('MOnteiro')
    cy.get('#signup-email').type('ana123@testes.com')
    cy.get('#signup-phone').type('11964962525')
    cy.get('#signup-password').type('Teste32!2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})

  it('Novo Cadastro com email já existente ', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Murilo')
    cy.get('#signup-lastname').type('Francisco')
    cy.get('#signup-email').type('ana123@testes.com')
    cy.get('#signup-phone').type('11964962525')
    cy.get('#signup-password').type('Teste32!2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , '"message":"Este email já está cadastrado."')
  })

  it ('Deve validar mensagem de erro com campo nome invalido', () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('123')
    cy.get('#signup-lastname').type('Francisco')
    cy.get('#signup-email').type('teste987@testes.com')
    cy.get('#signup-phone').type('11964962525')
    cy.get('#signup-password').type('Teste32!2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , '"message":"Nome deve conter apenas caracteres alfabéticos, acentuados e espaços"')
  })

  it ('Deve validar mensagem de erro com campo sobrenome', () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('José')
    cy.get('#signup-lastname').type('123')
    cy.get('#signup-email').type('teste988@teste.com')
    cy.get('#signup-phone').type('11964962525')
    cy.get('#signup-password').type('Teste32!2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'message":"Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it ('Deve validar mensagem senha fraca', () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('José')
    cy.get('#signup-lastname').type('Alfredo')
    cy.get('#signup-email').type('teste22@teste.com')
    cy.get('#signup-phone').type('11964962525')
    cy.get('#signup-password').type('123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , '"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"')
  })


  it ('Deve validar mensagem de erro de senha vazia ', () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('José')
    cy.get('#signup-lastname').type('Alfredo')
    cy.get('#signup-email').type('teste221@teste.com')
    cy.get('#signup-phone').type('11964962525')
    // cy.get('#signup-password').type("")
    cy.get('#signup-button').click('')
    cy.get('#signup-response').should('contain' , '"message":"Senha não pode estar vazia"')
  })
