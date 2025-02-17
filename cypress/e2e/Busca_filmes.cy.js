/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Busca de Filme', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Busca de filmes', () => {
    cy.get('#search-input').type('Harry Potter')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', 'Harry Potter')
  });

  it('Busca de filmes sem resultado', () => {
    cy.get('#search-input').type('@@')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain', 'Filme não encontrado')
  });

  it('Limpar a Busca do Fime', () => {
    cy.get('#search-input').type('Harry Potter')
    cy.get('#clear-button').click()
  });

  it('Deve buscar uma lista de filmes', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[0].titulo)
      cy.get('#search-button').click()
      cy.get('#recommendations-section').should('contain', filmes[0].titulo)
    })
});

  it('Deve buscar filmes com sucesso da lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click()
      cy.get('#recommendations-section').should('contain', filmes.titulo)

    })
  })

});