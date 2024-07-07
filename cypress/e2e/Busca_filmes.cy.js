/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Busca de Filme', () => {
    it('Deve fazer o cadastro de campos obrigatorios', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('Jurassic Park')
      cy.get('#search-button').click()
      cy.get(':nth-child(1) > h3').should('contain' , 'Jurassic Park')
      cy.get(':nth-child(2) > h3').should('contain' , 'The Lost World: Jurassic Park')
      cy.get(':nth-child(3) > h3').should('contain' , 'Jurassic Park III')
      cy.get(':nth-child(4) > h3').should('contain' , "The Making of 'Jurassic Park'")
      cy.get(':nth-child(5) > h3').should('contain' ,'Jurassic Park')
      cy.get(':nth-child(6) > h3').should('contain' ,'Jurassic Park: The Game')
      cy.get(':nth-child(7) > h3').should('contain' ,'Jurassic Park: Operation Genesis')
      cy.get(':nth-child(8) > h3').should('contain' ,'LEGO Jurassic Park: The Unofficial Retelling')
      cy.get(':nth-child(9) > h3').should('contain' ,'Beyond Jurassic Park')
      cy.get(':nth-child(10) > h3').should('contain' ,'The Lost World: Jurassic Park')
    })
  })

  describe('US-001-Funcionalidade: Busca de Filme', () => {
   it('Busca de filmes sem resultado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('@@')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain' , 'Filme não encontrado')
  })
  })

    describe('US-001-Funcionalidade: Busca de Filme', () => {
      it('Limpar a Busca do Fime', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('Harry Potter')
      cy.get('#clear-button').click()
      })
    })
  



