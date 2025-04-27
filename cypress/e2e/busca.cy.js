/// <reference types="cypress"/>

describe('US-00 : Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });

    // aqui estamos buscando por id, sendo necessária a troca manual
    it('Deve buscar filmes com sucesso de uma lista', () => { 
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[3].titulo)
        })
    });

    // aqui a busca será feita e o campo será limpado a cada busca com o método clear
    // método wait (3000) define um tempo de 3 segundos antes de limpar e fazer uma nova busca
    // {force: true} faz o click forçado na busca para quando surgir algum erro de cache etc
    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').wait(2000).clear().type(filmes.titulo)
            cy.get('#search-button').click({force: true})
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });
});