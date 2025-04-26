/// <reference types="cypress"/>
// traz todos os métodos e funções do cypress
describe('Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    const email = `user${Date.now()}@teste.com`

    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('José')
    cy.get('#signup-lastname').type('Eduardo')
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type('83997459744')
    cy.get('#signup-password').type('Password@1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
  })
})