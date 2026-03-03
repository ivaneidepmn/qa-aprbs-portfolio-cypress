-describe('APRBS Certification Website', () => {

  it('Deve carregar a página inicial', () => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
    cy.contains('Certificação').should('be.visible')
  })

  it('Deve verificar se o botão de acesso existe', () => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
    cy.get('button').should('exist')
  })

  it('Deve validar se a página possui formulário', () => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
    cy.get('input').should('exist')
  })

})