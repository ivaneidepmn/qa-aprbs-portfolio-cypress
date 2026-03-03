import CertificationPage from '../pages/certificationPage'

describe('APRBS Certification Website', () => {

  it('Deve carregar a página de certificação', () => {
    CertificationPage.visitPage()
    CertificationPage.checkPageLoaded()
  })

  it('Deve verificar se o botão de acesso existe', () => {
    CertificationPage.visitPage()
    CertificationPage.checkButtonExists()
  })

  it('Deve validar se existe formulário na página', () => {
    CertificationPage.visitPage()
    CertificationPage.checkFormExists()
  })

})