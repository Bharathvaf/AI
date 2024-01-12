describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').selectFile('cypress/fixtures/download.jfif');
    cy.get('#file-submit').click();
  })
})