<reference types="cypress"/>
describe('Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `ketilly${Date.now()}@teste.com`
    cy.preencherCadastro('Ketilly', 'Queiroz', email, '83998765988', 'Password@123')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
    
  });

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Ketilly20', 'Queiroz', 'ketilly@teste.com', '83998765988', 'Password@123')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
})