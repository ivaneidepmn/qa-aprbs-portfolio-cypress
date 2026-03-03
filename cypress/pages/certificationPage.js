class CertificationPage {

  visitPage() {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  }

  checkPageLoaded() {
    cy.contains('Certificação').should('be.visible')
  }

  checkButtonExists() {
    cy.get('button').should('exist')
  }

  checkFormExists() {
    cy.get('input').should('exist')
  }

}

export default new CertificationPage()